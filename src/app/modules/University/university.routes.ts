import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UniversityValidaton } from './university.validation';
import { UniversityController } from './university.controller';

const router = express.Router();

router.post(
  '/create-university',
  validateRequest(UniversityValidaton.createUniversityValidationSchema),
  UniversityController.createUniversity,
);
router.get('/', UniversityController.getAllUniversities),
  router.get('/:universityId', UniversityController.getSingleUniversity);

export const UniversityRoutes = router;
