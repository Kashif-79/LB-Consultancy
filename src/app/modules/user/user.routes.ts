import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { studentValidations } from '../Student/student.validation';
import { UserController } from './user.controller';
import { adminValidations } from '../Admin/admin.validation';
import { consultantValidations } from '../Consultant/consultant.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';

const router = express.Router();

router.post(
  '/create-student',
  auth(USER_ROLE.admin),
  validateRequest(studentValidations.createStudentValidationSchema),
  UserController.createStudent,
);
router.post(
  '/create-admin',
  validateRequest(adminValidations.createAdminValidationSchema),
  UserController.createAdmin,
);
router.post(
  '/create-consultant',
  validateRequest(consultantValidations.createConsultantValidationSchema),
  UserController.createConsultant,
);

export const UsersRoutes = router;
