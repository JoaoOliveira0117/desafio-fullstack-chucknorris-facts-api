import { Router } from 'express';

import health from './health/index';

const router = Router();

router.use('/health', health);

export default router;
