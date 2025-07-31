import { Schema, model } from 'mongoose';
import { TService } from './Services.interface';
import { SERVICE_CATEGORIES } from './services.constant';

const serviceSchema = new Schema<TService>(
  {
    name: {
      type: String,
      required: true,
    },
    description: { type: String },
    category: SERVICE_CATEGORIES,
    price: { type: Number },
    duration: { type: String }, // e.g., "1 hour"
    consultants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Consultant',
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export const Service = model('Service', serviceSchema);
