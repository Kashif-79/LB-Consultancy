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
    }),
  }),
});

export const CountryValidation = {
  createCountryValidationSchema,
};
