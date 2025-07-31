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
  const result = await CountryService.getAllCountriesFromDB();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Countries is retrived successfully',
    data: result,
  });
});
const getSingleCountry = catchAsync(async (req, res) => {
  const { countryId } = req.params;
  const result = await CountryService.getSingleCountryFromDB(countryId);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Countries is retrived successfully',
    data: result,
  });
});

export const CountryController = {
  createCountry,
  getAllCountries,
  getSingleCountry,
};
