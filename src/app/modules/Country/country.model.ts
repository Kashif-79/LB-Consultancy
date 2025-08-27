import { model, Schema } from 'mongoose';
import { TCountry } from './country.interface';

const countrySchema = new Schema<TCountry>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    continent: {
      type: String,
    },
    currency: {
      type: String,
    },
    language: {
      type: String,
    },
    whyStudy: {
      type: String,
    },
    requirements: {
      type: String,
    },
    expenses: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const Country = model('Country', countrySchema);
