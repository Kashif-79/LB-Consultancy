import { z } from 'zod';
import { SERVICE_CATEGORIES } from './services.constant';

export const createServiceValidationSchema = z.object({
  body: z.object({
    service: z.object({
      name: z.enum([...SERVICE_CATEGORIES] as [string, ...string[]]),
      definition: z.string(),
      description: z.string(),
      isActive: z.boolean().optional(),
    }),
  }),
});

export const ServiceValidation = {
  createServiceValidationSchema,
};
