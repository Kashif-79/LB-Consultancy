import express from 'express';
import { AdminController } from './admin.controller';
import { adminValidations } from './admin.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.get('/', AdminController.getAllAdmins);
router.get('/:adminId', AdminController.getSingleAdmin);
router.patch(
  '/:adminId',
  validateRequest(adminValidations.updateAdminValidationSchema),
  AdminController.updateAdmin,
);

export const AdminRoutes = router;
