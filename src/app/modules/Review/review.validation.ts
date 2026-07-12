import { z } from 'zod';

export const createReviewValidationSchema = z.object({
  body: z.object({
    review: z.object({
      user: z.string(),
      service: z.string(),
      rating: z.number().min(1).max(5),
      comment: z.string().optional(),
    }),
  }),
});

export const updateReviewValidationSchema = z.object({
  body: z.object({
    review: z.object({
      user: z.string().optional(),
      service: z.string().optional(),
      rating: z.number().min(1).max(5).optional(),
      comment: z.string().optional(),
    }),
  }),
});

export const ReviewValidation = {
  createReviewValidationSchema,
  updateReviewValidationSchema,
};
