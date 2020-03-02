import { Router } from 'express';

import {
  getConfirmedData,
  getDeathData,
  getRecoveredData,
} from '../controllers/report';

const router = Router({ strict: true });

// desc             >     get all confirmed report data
// route            >     /api/covid-19/confirmed
// access control   >     public
router.get('/confirmed', getConfirmedData);

// desc             >     get all death report data
// route            >     /api/covid-19/deaths
// access control   >     public
router.get('/deaths', getDeathData);

// desc             >     get all recovered report data
// route            >     /api/covid-19/recovered
// access control   >     public
router.get('/recovered', getRecoveredData);

export default router;
