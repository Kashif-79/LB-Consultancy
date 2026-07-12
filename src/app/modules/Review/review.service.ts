import QueryBuilder from '../../../builder/QueryBuilder';
import { reviewSearchableFields } from './review.constant';
import { TReview } from './review.interface';
import { Review } from './review.model';

const createReviewIntoDb = async (payLoad: TReview) => {
  const result = await Review.create(payLoad);
  return result;
};

const getAllReviewsFromDB = async (query: Record<string, unknown>) => {
  const reviewQuery = new QueryBuilder(
    Review.find().populate('user').populate('service'),
    query,
  )
    .search(reviewSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await reviewQuery.countTotal();
  const result = await reviewQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const getSingleReviewFromDB = async (id: string) => {
  const result = await Review.findById(id).populate('user').populate('service');
  return result;
};

const updateReviewFromDB = async (id: string, payLoad: Partial<TReview>) => {
  const result = await Review.findOneAndUpdate({ _id: id }, payLoad, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteReviewFromDB = async (id: string) => {
  const result = await Review.findOneAndUpdate(
    { _id: id },
    { isDeleted: true },
  );
  return result;
};

export const ReviewService = {
  createReviewIntoDb,
  getAllReviewsFromDB,
  getSingleReviewFromDB,
  updateReviewFromDB,
  deleteReviewFromDB,
};
