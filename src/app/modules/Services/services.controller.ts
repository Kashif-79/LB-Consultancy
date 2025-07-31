import status from 'http-status';
import catchAsync from '../../utilis/catchAsync';
import sendResponse from '../../utilis/sendResponse';
import { ServicesService } from './services.services';

const createServices = catchAsync(async (req, res) => {
  const { service: serviceData } = req.body;
  const result = await ServicesService.createServiceIntoDb(serviceData);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'service created successfully',
    data: result,
  });
});

const getAllServices = catchAsync(async (req, res) => {
  const result = await ServicesService.getAllServicesFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Services is retrived successfully',
    data: result,
  });
});
const getSingleService = catchAsync(async (req, res) => {
  const { serviceId } = req.params;
  const result = await ServicesService.getSingleServiceFromDB(serviceId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Services is created successfully',
    data: result,
  });
});

export const ServicesController = {
  createServices,
  getAllServices,
  getSingleService,
};
