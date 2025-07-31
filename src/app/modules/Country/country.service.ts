import { TCountry } from './country.interface';
import { Country } from './country.model';

const createCountryIntoDB = async (payLoad: TCountry) => {
  const result = await Country.create(payLoad);
  return result;
};

const getAllCountriesFromDB = async () => {
  const result = await Country.find();
  return result;
};
const getSingleCountryFromDB = async (id: string) => {
  const result = await Country.findById(id);
  return result;
};

export const CountryService = {
  createCountryIntoDB,
  getAllCountriesFromDB,
  getSingleCountryFromDB,
};
