import { Types } from 'mongoose';
import { TBloodGroup, TGender, TUserName } from '../../interface/user';

export type TConsultant = {
  user: Types.ObjectId;
  name: TUserName;
  gender: TGender;
  dateOfBirth?: Date;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: TBloodGroup;
  presentAddress: string;
  permanentAddress: string;
  isDeleted?: boolean;
};
