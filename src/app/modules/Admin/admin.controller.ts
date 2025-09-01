import status from 'http-status';
import catchAsync from '../../utilis/catchAsync';
import sendResponse from '../../utilis/sendResponse';
import { AdminServices } from './admin.service';

const getAllAdmins = catchAsync(async (req, res) => {
  console.log(req.cookies);
  const result = await AdminServices.getAllAdminsFromDB(req.query);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Admin is retrived successfully',
    meta: result.meta,
    data: result.result,
  });
});

const getSingleAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AdminServices.getSingleAdminFromDB(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Admin is retrived successfully',
    data: result,
  });
});

const updateAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { admin } = req.body;
  const result = await AdminServices.updateAdminFromDB(id, admin);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Admin is updated successfully',
    data: result,
  });
});

export const AdminController = {
  getAllAdmins,
  getSingleAdmin,
  updateAdmin,
};
