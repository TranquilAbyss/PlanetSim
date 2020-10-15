import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', function (req: Request, res: Response) {
  res.send('Hello World');
})

export const RootRouter = router
