import express from 'express';
import { AdminController } from './admin.controller';
import { adminValidations } from './admin.validation';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.get('/', auth(USER_ROLE.admin), AdminController.getAllAdmins);
router.get('/:id', auth(USER_ROLE.admin), AdminController.getSingleAdmin);
router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(adminValidations.updateAdminValidationSchema),
  AdminController.updateAdmin,
);

export const AdminRoutes = router;
