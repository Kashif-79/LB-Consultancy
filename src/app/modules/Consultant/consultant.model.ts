import { model, Schema } from 'mongoose';
import { userNameSchema } from '../../interface/user';
import { TConsultant } from './consultant.interface';

const consultantSchema = new Schema<TConsultant>({
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User id is nedded'],
    unique: true,
    ref: 'User',
  },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: "The gender is must be any of them from: 'male','female'",
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: { type: Date },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  contactNo: {
    type: String,
    required: [true, 'contact is required'],
    unique: true,
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact is required'],
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present adress is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent adress is required'],
  },
  isDeleted: {
    type: Boolean,
    default: 'false',
  },
});

export const Consultant = model<TConsultant>('Consultant', consultantSchema);
