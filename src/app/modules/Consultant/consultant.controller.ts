import status from 'http-status';
import catchAsync from '../../utilis/catchAsync';
import sendResponse from '../../utilis/sendResponse';
import { ConsultantServices } from './consultant.service';
import { get } from 'http';

const getAllConsultants = catchAsync(async (req, res) => {
  const result = await ConsultantServices.getAllConsultantsFromDB(req.query);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Consultants are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

const getSingleConsultant = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ConsultantServices.getSingleConsultantFromDB(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Consultant is retrieved successfully',
    data: result,
  });
});

const updateConsultant = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { consultant } = req.body;
  const result = await ConsultantServices.updateConsultantFromDB(
    id,
    consultant,
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Consultant is updated successfully',
    data: result,
  });
});

export const ConsultantController = {
  getAllConsultants,
  getSingleConsultant,
  updateConsultant,
};
