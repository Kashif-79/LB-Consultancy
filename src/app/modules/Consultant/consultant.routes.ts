import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { ConsultantController } from './consultant.controller';
import { consultantValidations } from './consultant.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.get('/', auth(USER_ROLE.admin), ConsultantController.getAllConsultants);
router.get(
  '/:id',
  auth(USER_ROLE.admin),
  ConsultantController.getSingleConsultant,
);
router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(consultantValidations.updateConsultantValidationSchema),
  ConsultantController.updateConsultant,
);

export const ConsultantRoutes = router;
