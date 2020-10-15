import { Router, Request, Response } from 'express';
import { Planet } from '../entities/Planet';
import { DI } from "../server";

const router: Router = Router();

router.get('/', function (req: Request, res: Response) {
  const planet = DI.em.create('Planet', {x:0, y:0, z:0, population:100});
  DI.em.persist(planet);
  res.send(planet);
})

export const PlanetRouter = router
