import QueryBuilder from '../../../builder/QueryBuilder';
import { universitySearchableFields } from './university.constant';
import { TUniversity } from './university.interface';
import { University } from './university.model';

const createUniversityIntoDB = async (payLoad: TUniversity) => {
  const result = await University.create(payLoad);
  return result;
};
const getAllUniversitiessFromDB = async (query: Record<string, unknown>) => {
  const universityQuery = new QueryBuilder(
    University.find().populate('country'),
    query,
  )
    .search(universitySearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await universityQuery.countTotal();
  const result = await universityQuery.modelQuery;

  return {
    meta,
    result,
  };
};
const getSingleUniversityFromDB = async (id: string) => {
  const result = await University.findById(id);
  return result;
};

const updateUniversityFromDB = async (
  id: string,
  payLoad: Partial<TUniversity>,
) => {
  const result = await University.findOneAndUpdate({ id }, payLoad, {
    new: true,
    runValidators: true,
  });

  return result;
};
const deleteUniversityFromDB = async (id: string) => {
  const result = await University.findOneAndUpdate({ id }, { isDeleted: true });
  return result;
};

export const UniversityServices = {
  createUniversityIntoDB,
  getAllUniversitiessFromDB,
  getSingleUniversityFromDB,
  updateUniversityFromDB,
  deleteUniversityFromDB,
};
