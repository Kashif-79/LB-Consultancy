import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CountryValidation } from './country.validation';
import { CountryController } from './country.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/create-country',
  auth(USER_ROLE.admin),
  validateRequest(CountryValidation.createCountryValidationSchema),
  CountryController.createCountry,
);
router.get('/', CountryController.getAllCountries),
  router.get('/:id', CountryController.getSingleCountry);
router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(CountryValidation.updateCountryValidationSchema),
  CountryController.updateCountry,
);
router.delete('/:id', auth(USER_ROLE.admin), CountryController.deleteCountry);

export const CountryRoutes = router;
