import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UniversityValidaton } from './university.validation';
import { UniversityController } from './university.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/create-university',
  validateRequest(UniversityValidaton.createUniversityValidationSchema),
  UniversityController.createUniversity,
);
router.get('/', UniversityController.getAllUniversities),
  router.get('/:universityId', UniversityController.getSingleUniversity);
router.patch(
  '/:universityId',
  auth(USER_ROLE.admin),
  validateRequest(UniversityValidaton.updateUniversityValidationSchema),
  UniversityController.updateUniversity,
);
router.delete(
  '/:universityId',
  auth(USER_ROLE.admin),
  UniversityController.deleteUniversity,
);

export const UniversityRoutes = router;
