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
  const { universityId } = req.params;
  const result =
    await UniversityServices.getSingleUniversityFromDB(universityId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Services is created successfully',
    data: result,
  });
});

export const UniversityController = {
  createUniversity,
  getAllUniversities,
  getSingleUniversity,
};
