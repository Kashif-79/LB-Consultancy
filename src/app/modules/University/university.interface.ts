import { Types } from 'mongoose';

export type TProgrames = 'UG' | 'PG' | 'PHD ' | 'Diploma';

export type TUniversity = {
  name: string;
  country: Types.ObjectId;
  website: string;
  ranking?: number;
  admissionOpen: boolean;
  tuitionFees: {
    currency?: string;
    min?: number;
    max?: number;
  };
  programs: TProgrames;
};
