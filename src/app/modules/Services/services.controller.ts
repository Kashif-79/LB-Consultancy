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
  const result = await ServicesService.getAllServicesFromDB(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Services is retrived successfully',
    meta: result.meta,
    data: result.result,
  });
});
const getSingleService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ServicesService.getSingleServiceFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Services is created successfully',
    data: result,
  });
});
const updateService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { service } = req.body;
  const result = await ServicesService.updateServiceFromDB(id, service);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Service is updated successfully',
    data: result,
  });
});

export const ServicesController = {
  createServices,
  getAllServices,
  getSingleService,
  updateService,
};
