import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { ConsultantController } from './consultant.controller';
import { consultantValidations } from './consultant.validation';

const router = express.Router();

router.get('/', ConsultantController.getAllConsultants);
router.get('/:consultantId', ConsultantController.getSingleConsultant);
router.patch(
  '/:consultantId',
  validateRequest(consultantValidations.updateConsultantValidationSchema),
  ConsultantController.updateConsultant,
);

export const ConsultantRoutes = router;
