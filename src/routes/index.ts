import { Router } from 'express';

import health from './health/index';
import facts from './facts/index';

const router = Router();

router.use('/health', health);
router.use('/facts', facts);

export default router;
