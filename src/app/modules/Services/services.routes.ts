import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceValidation } from './services.validation';
import { ServicesController } from './services.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/create-service',
  auth(USER_ROLE.admin),
  validateRequest(ServiceValidation.createServiceValidationSchema),
  ServicesController.createServices,
);
router.get('/', ServicesController.getAllServices),
  router.get('/:id', ServicesController.getSingleService);
router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(ServiceValidation.updateServiceValidationSchema),
  ServicesController.updateService,
);
export const ServicesRoutes = router;
