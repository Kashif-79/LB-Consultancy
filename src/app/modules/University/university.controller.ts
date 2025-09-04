import status from 'http-status';
import catchAsync from '../../utilis/catchAsync';
import sendResponse from '../../utilis/sendResponse';
import { UniversityServices } from './university.service';

const createUniversity = catchAsync(async (req, res) => {
  // const { university: universityData } = req.body;
  const result = await UniversityServices.createUniversityIntoDB(req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'University created successfully',
    data: result,
  });
});

const getAllUniversities = catchAsync(async (req, res) => {
  const result = await UniversityServices.getAllUniversitiessFromDB(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Universities are retrived successfully',
    meta: result.meta,
    data: result.result,
  });
});
const getSingleUniversity = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UniversityServices.getSingleUniversityFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'University is retrieved successfully',
    data: result,
  });
});
const updateUniversity = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { university } = req.body;
  const result = await UniversityServices.updateUniversityFromDB(
    id,
    university,
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'University is updated successfully',
    data: result,
  });
});

const deleteUniversity = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UniversityServices.deleteUniversityFromDB(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'University is deleted successfully',
    data: result,
  });
});

export const UniversityController = {
  createUniversity,
  getAllUniversities,
  getSingleUniversity,
  updateUniversity,
  deleteUniversity,
};
