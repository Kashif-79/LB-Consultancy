import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceValidation } from './services.validation';
import { ServicesController } from './services.controller';

const router = express.Router();

router.post(
  '/create-service',
  validateRequest(ServiceValidation.createServiceValidationSchema),
  ServicesController.createServices,
);
router.get('/', ServicesController.getAllServices),
  router.get('/:serviceId', ServicesController.getSingleService);

export const ServicesRoutes = router;
