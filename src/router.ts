import { Router } from 'express';
import {RootRouter, PlanetRouter} from ".";

let router: Router = Router();

// mount express paths, any addition middleware can be added as well.
// ex. router.use('/pathway', middleware_function, sub-router);

router.use('/', RootRouter);
router.use('/planet', PlanetRouter);

// Export the router
export = router;
