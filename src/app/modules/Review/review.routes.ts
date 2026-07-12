import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewValidation } from './review.validation';
import { ReviewController } from './review.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/create-review',
  auth(USER_ROLE.admin, USER_ROLE.consultant, USER_ROLE.student),
  validateRequest(ReviewValidation.createReviewValidationSchema),
  ReviewController.createReview,
);
router.get('/', auth(USER_ROLE.admin), ReviewController.getAllReviews);
router.get('/:id', auth(USER_ROLE.admin), ReviewController.getSingleReview);
router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(ReviewValidation.updateReviewValidationSchema),
  ReviewController.updateReview,
);
router.delete('/:id', auth(USER_ROLE.admin), ReviewController.deleteReview);

export const ReviewRoutes = router;
