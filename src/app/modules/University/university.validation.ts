import { z } from 'zod';

export const createUniversityValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'University name is required',
      })
      .trim(),

    country: z.string(),

    website: z.string({
      required_error: 'Website is required',
    }),
    ranking: z.number().int().min(1, 'Ranking must be at least 1').optional(),
    admissionOpen: z.boolean().default(true),
    tuitionFees: z.number().optional(),

    programs: z
      .array(z.enum(['UG', 'PG', 'PHD', 'Diploma']))
      .min(1, 'At least one program must be selected'),
  }),
});

export const UniversityValidaton = {
  createUniversityValidationSchema,
};
