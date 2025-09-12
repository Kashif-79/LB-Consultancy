import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UniversityController } from './university.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';
import { UniversityValidation } from './university.validation';

const router = express.Router();

router.post(
  '/create-university',
  auth(USER_ROLE.admin),
  validateRequest(UniversityValidation.createUniversityValidationSchema),
  UniversityController.createUniversity,
);
router.get('/', UniversityController.getAllUniversities),
  router.get('/:id', UniversityController.getSingleUniversity);
router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(UniversityValidation.updateUniversityValidationSchema),
  UniversityController.updateUniversity,
);
router.delete(
  '/:id',
  auth(USER_ROLE.admin),
  UniversityController.deleteUniversity,
);

export const UniversityRoutes = router;
