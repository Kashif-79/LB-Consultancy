import express from 'express';
import { AdminController } from './admin.controller';
import { adminValidations } from './admin.validation';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.get('/', auth(USER_ROLE.admin), AdminController.getAllAdmins);
router.get('/:adminId', AdminController.getSingleAdmin);
router.patch(
  '/:adminId',
  validateRequest(adminValidations.updateAdminValidationSchema),
  AdminController.updateAdmin,
);

export const AdminRoutes = router;
