import express from 'express';
import { Application, Request, Response } from 'express';
import { EntityManager, MikroORM, EntityRepository } from '@mikro-orm/core';
import router from "./router";
import { Planet } from './entities';

const port = process.env.PORT || 3000;

export const DI = {} as {
  orm: MikroORM,
  em: EntityManager,
  planetRepository: EntityRepository<Planet>
};

const app: Application = express();

(async () => {
  DI.orm = await MikroORM.init({
      entities: ['./entities/*.js'],
      entitiesTs: ['./entities/*.ts'],
      dbName: 'postgres',
      type: 'postgresql', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
      clientUrl: 'postgresql://postgres:postgres@127.0.0.1:5432', // defaults to 'mongodb://localhost:27017' for mongodb driver
      baseDir: __dirname, // defaults to `process.cwd()`
  })
  DI.em = DI.orm.em;
  DI.planetRepository = DI.orm.em.getRepository(Planet);

  app.use('/', router)

  app.get('/endpoints', function (req: Request, res: Response) {
    res.send(app.routes)
  })
})();

app.listen(port, function () {
    console.log('App is listening on port '+ port +'!');
});
