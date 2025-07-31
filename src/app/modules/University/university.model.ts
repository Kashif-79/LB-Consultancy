import { model, Schema } from 'mongoose';
import { TUniversity } from './university.interface';

const universitySchema = new Schema<TUniversity>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Country',
    },
    website: {
      type: String,
      required: true,
      unique: true,
    },
    ranking: {
      type: Number,
      min: 1,
    },
    admissionOpen: {
      type: Boolean,
      required: true,
      default: true,
    },
    tuitionFees: {
      currency: {
        type: String,
        trim: true,
      },
      min: {
        type: Number,
        min: 0,
      },
      max: {
        type: Number,
        min: 0,
      },
    },
    programs: {
      type: String,
      required: true,
      enum: ['UG', 'PG', 'PHD', 'Diploma'],
    },
  },
  {
    timestamps: true,
  },
);

export const University = model('University', universitySchema);
