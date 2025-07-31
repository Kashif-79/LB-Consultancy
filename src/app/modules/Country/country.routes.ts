import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CountryValidation } from './country.validation';
import { CountryController } from './country.controller';

const router = express.Router();

router.post(
  '/create-country',
  validateRequest(CountryValidation.createCountryValidationSchema),
  CountryController.createCountry,
);
router.get('/', CountryController.getAllCountries),
  router.get('/:countryId', CountryController.getSingleCountry);

export const CountryRoutes = router;
