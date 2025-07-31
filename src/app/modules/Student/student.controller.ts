import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utilis/sendResponse';
import catchAsync from '../../utilis/catchAsync';

const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student is retrived successfully',
    data: result,
  });
});
const getSingleStudent = catchAsync(async (req, res) => {
  const { stuId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(stuId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});
const deleteStudent = catchAsync(async (req, res) => {
  const { stuId } = req.params;
  const result = await StudentServices.deleteStudentFromDB(stuId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student is deleted successfully',
    data: result,
  });
});

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
