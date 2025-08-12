import QueryBuilder from '../../../builder/QueryBuilder';
import { countrySearchableFields } from './country.constant';
import { TCountry } from './country.interface';
import { Country } from './country.model';

const createCountryIntoDB = async (payLoad: TCountry) => {
  const result = await Country.create(payLoad);
  return result;
};

const getAllCountriesFromDB = async (query: Record<string, unknown>) => {
  const countryQuery = new QueryBuilder(
    Country.find().populate('name').populate('continent'),
    query,
  )
    .search(countrySearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await countryQuery.countTotal();
  const result = await countryQuery.modelQuery;

  return {
    meta,
    result,
  };
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
