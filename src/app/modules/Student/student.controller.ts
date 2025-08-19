import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utilis/sendResponse';
import catchAsync from '../../utilis/catchAsync';
import status from 'http-status';

const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB(req.query);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Student is retrived successfully',
    meta: result.meta,
    data: result.result,
  });
});
const getSingleStudent = catchAsync(async (req, res) => {
  const { stuId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(stuId);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});

const updateStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { student } = req.body;
  const result = await StudentServices.updateStudentIntoDB(id, student);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Student is updated successfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const { stuId } = req.params;
  const result = await StudentServices.deleteStudentFromDB(stuId);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Student is deleted successfully',
    data: result,
  });
});

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
