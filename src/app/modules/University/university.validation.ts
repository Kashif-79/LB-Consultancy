import { z } from 'zod';
import { Types } from 'mongoose';

export const ProgramesEnum = z.enum(['UG', 'PG', 'PHD', 'Diploma']);
export type TProgrames = z.infer<typeof ProgramesEnum>;

export const createUniversityValidationSchema = z.object({
  body: z.object({
    university: z.object({
      name: z
        .string({
          required_error: 'University name is required',
        })
        .trim(),

      country: z.string({
        required_error: 'Country ID is required',
      }),

      website: z.string({
        required_error: 'Website is required',
      }),
      ranking: z.number().int().min(1, 'Ranking must be at least 1').optional(),
      admissionOpen: z.boolean().default(true),
      tuitionFees: z
        .object({
          currency: z.string().trim().optional(),
          min: z
            .number()
            .min(0, 'Minimum tuition fees cannot be negative')
            .optional(),
          max: z
            .number()
            .min(0, 'Maximum tuition fees cannot be negative')
            .optional(),
        })
        .optional(),

      programs: ProgramesEnum,
    }),
  }),
});

export const UniversityValidaton = {
  createUniversityValidationSchema,
};
