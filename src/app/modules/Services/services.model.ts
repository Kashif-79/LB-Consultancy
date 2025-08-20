import { Schema, model } from 'mongoose';
import { TService } from './services.interface';
import { SERVICE_CATEGORIES, serviceStatus } from './services.constant';

const serviceSchema = new Schema<TService>(
  {
    name: SERVICE_CATEGORIES,
    definition: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: serviceStatus,
      default: 'OPEN',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export const Service = model('Service', serviceSchema);
