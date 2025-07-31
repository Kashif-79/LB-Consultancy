import { TStudent } from './student.interface';
import { Student } from './student.model';

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findById(id);
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.findOneAndUpdate(
    { _id: id },
    { isDeleted: true },
  );
  return result;
};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
