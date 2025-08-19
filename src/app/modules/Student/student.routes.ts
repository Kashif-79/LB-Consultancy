import express from 'express';
import { StudentController } from './student.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';
import validateRequest from '../../middlewares/validateRequest';
import { studentValidations } from './student.validation';

const router = express.Router();
router.get('/', StudentController.getAllStudents);
router.get('/:stuId', StudentController.getSingleStudent);
router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(studentValidations.updateStudentValidationSchema),
  StudentController.updateStudent,
);
router.delete('/:stuId', StudentController.deleteStudent);

export const StudentsRoutes = router;
