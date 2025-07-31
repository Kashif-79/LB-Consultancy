import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { studentValidations } from '../Student/student.validation';
import { UserController } from './user.controller';
import { adminValidations } from '../Admin/admin.validation';
import { consultantValidations } from '../Consultant/consultant.validation';

const router = express.Router();

router.post(
  '/create-student',
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
