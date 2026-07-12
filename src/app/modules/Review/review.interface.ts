import { Types } from 'mongoose';

export type TReview = {
  user: Types.ObjectId;
  service: Types.ObjectId;
  rating: number;
  comment?: string;
  isDeleted?: boolean;
};
