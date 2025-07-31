import catchAsync from '../../utilis/catchAsync';
import sendResponse from '../../utilis/sendResponse';
import { UserServices } from './user.service';

const createStudent = catchAsync(async (req, res) => {
  const { student: studentData, password } = req.body;
  const result = await UserServices.createStudentIntoDB(studentData, password);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});
const createAdmin = catchAsync(async (req, res) => {
  const { admin: adminData, password } = req.body;
  const result = await UserServices.createAdminIntoDB(adminData, password);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Admin is created successfully',
    data: result,
  });
});
const createConsultant = catchAsync(async (req, res) => {
  const { consultant: consultantData, password } = req.body;
  const result = await UserServices.createConsultantIntoDB(
    consultantData,
    password,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Consultant is created successfully',
    data: result,
  });
});

export const UserController = {
  createStudent,
  createAdmin,
  createConsultant,
};
