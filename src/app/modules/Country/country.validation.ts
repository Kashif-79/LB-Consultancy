import { z } from 'zod';

export const createCountryValidationSchema = z.object({
  body: z.object({
    country: z.object({
      name: z.string({
        required_error: 'Country name is required',
      }),
      code: z.string({
        required_error: 'Country code is required',
      }),
      continent: z.string().optional(),
      currency: z.string().optional(),
      language: z.string().optional(),
      whyStudy: z.string().optional(),
      requirements: z.string().optional(),
      expenses: z.string().optional(),
    }),
  }),
});
export const updateCountryValidationSchema = z.object({
  body: z.object({
    country: z.object({
      name: z
        .string({
          required_error: 'Country name is required',
        })
        .optional(),
      code: z
        .string({
          required_error: 'Country code is required',
        })
        .optional(),
      continent: z.string().optional(),
      currency: z.string().optional(),
      language: z.string().optional(),
      whyStudy: z.string().optional(),
      requirements: z.string().optional(),
      expenses: z.string().optional(),
    }),
  }),
});

export const CountryValidation = {
  createCountryValidationSchema,
  updateCountryValidationSchema,
};
