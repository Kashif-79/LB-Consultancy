import { Schema } from 'mongoose';
import { USER_ROLE } from '../modules/user/user.constant';

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First Name is required'],
    validate: function (value: string) {
      const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
      return firstNameStr === value;
    },
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last name is required'],
  },
});

export type TBloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'O+'
  | 'O-'
  | 'AB+'
  | 'AB-';
export type TGender = 'male' | 'female' | 'other';
export type TUserRole = keyof typeof USER_ROLE;
