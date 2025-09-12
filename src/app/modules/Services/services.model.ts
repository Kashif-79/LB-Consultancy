import { Schema, model } from 'mongoose';
import { TService } from './services.interface';
import { SERVICE_CATEGORIES, serviceStatus } from './services.constant';
import { string } from 'zod';

const serviceSchema = new Schema<TService>(
  {
    name: {
      type: String,
      enum: SERVICE_CATEGORIES,
      required: true,
      unique: true,
    },
    definition: {
      type: String,
      unique: true,
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
