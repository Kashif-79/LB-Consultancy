import { Schema, model } from 'mongoose';
import { TService } from './services.interface';
import { SERVICE_CATEGORIES } from './services.constant';

const serviceSchema = new Schema<TService>(
  {
    name: SERVICE_CATEGORIES,
    definition: {
      type: String,
    },
    description: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export const Service = model('Service', serviceSchema);
