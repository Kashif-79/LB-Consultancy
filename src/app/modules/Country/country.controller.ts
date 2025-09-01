import status from 'http-status';
import catchAsync from '../../utilis/catchAsync';
import sendResponse from '../../utilis/sendResponse';
import { CountryService } from './country.service';

const createCountry = catchAsync(async (req, res) => {
  const { country: countryData } = req.body;
  const result = await CountryService.createCountryIntoDB(countryData);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Country Created Successfully',
    data: result,
  });
});

const getAllCountries = catchAsync(async (req, res) => {
  const result = await CountryService.getAllCountriesFromDB(req.query);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Countries is retrived successfully',
    meta: result.meta,
    data: result.result,
  });
});
const getSingleCountry = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CountryService.getSingleCountryFromDB(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Countries is retrived successfully',
    data: result,
  });
});
const updateCountry = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { country } = req.body;
  const result = await CountryService.updateCountryFromDB(id, country);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Country is updated successfully',
    data: result,
  });
});

const deleteCountry = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CountryService.deleteCountryFromDB(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Country is deleted successfully',
    data: result,
  });
});

export const CountryController = {
  createCountry,
  getAllCountries,
  getSingleCountry,
  updateCountry,
  deleteCountry,
};
