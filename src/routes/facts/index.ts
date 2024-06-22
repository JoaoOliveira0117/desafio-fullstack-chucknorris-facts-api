import { Router } from 'express';
import getRandomFactController from '../../controllers/facts/getRandomFactController';
import getFactsByQueryController from '../../controllers/facts/getFactsByQueryController';
import getFactById from '../../controllers/facts/getFactById';

const router = Router();


router.get('/random', getRandomFactController);
router.get('/search', getFactsByQueryController);
router.get('/:id', getFactById);

export default router;
