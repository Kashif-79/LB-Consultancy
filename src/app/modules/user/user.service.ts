import mongoose, { startSession } from 'mongoose';
import { TStudent } from '../Student/student.interface';
import { TUser } from './user.interface';
import { User } from './user.model';
import { Student } from '../Student/student.model';
import config from '../../config';
import { TAdmin } from '../Admin/admin.interface';
import { Admin } from '../Admin/admin.model';
import { TConsultant } from '../Consultant/consultant.interface';
import { Consultant } from '../Consultant/consultant.model';

const createStudentIntoDB = async (payLoad: TStudent, password: string) => {
  const userData: Partial<TUser> = {};

  // set student role
  userData.role = 'student';
  userData.email = payLoad.email;
  userData.password = password || (config.default_pass as string);

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const newUser = await User.create([userData], { session });

    if (newUser.length === 0) {
      throw new Error('User creation failed');
    }

    payLoad.user = newUser[0]._id;

    const newStudent = await Student.create([payLoad], { session });
    if (newStudent.length === 0) {
      throw new Error('Student creation failed');
    }
    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};
const createAdminIntoDB = async (payLoad: TAdmin, password: string) => {
  const userData: Partial<TUser> = {};

  // set admin role
  userData.role = 'admin';
  userData.email = payLoad.email;
  userData.password = password || (config.default_pass as string);

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const newUser = await User.create([userData], { session });

    if (newUser.length === 0) {
      throw new Error('User creation failed');
    }

    payLoad.user = newUser[0]._id;

    const newAdmin = await Admin.create([payLoad], { session });
    if (newAdmin.length === 0) {
      throw new Error('Admin creation failed');
    }
    await session.commitTransaction();
    await session.endSession();
    return newAdmin;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};
const createConsultantIntoDB = async (
  payLoad: TConsultant,
  password: string,
) => {
  const userData: Partial<TUser> = {};

  // set consultant role
  userData.role = 'consultant';
  userData.email = payLoad.email;
  userData.password = password || (config.default_pass as string);

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const newUser = await User.create([userData], { session });

    if (newUser.length === 0) {
      throw new Error('User creation failed');
    }

    payLoad.user = newUser[0]._id;

    const newConsultant = await Consultant.create([payLoad], { session });
    if (newConsultant.length === 0) {
      throw new Error('Consultant creation failed');
    }
    await session.commitTransaction();
    await session.endSession();
    return newConsultant;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

export const UserServices = {
  createStudentIntoDB,
  createAdminIntoDB,
  createConsultantIntoDB,
};
