import { z } from 'zod';
import { SERVICE_CATEGORIES } from './services.constant';

export const createServiceValidationSchema = z.object({
  body: z.object({
    service: z.object({
      name: z.string(),
      description: z.string(),
      category: z.enum([...SERVICE_CATEGORIES] as [string, ...string[]]),
      price: z.number().optional(),
      duration: z.string().optional(),
      consultants: z.array(z.string()).optional(), // Array of Consultant IDs
      isActive: z.boolean().optional(),
    }),
  }),
});

export const ServiceValidation = {
  createServiceValidationSchema,
};
