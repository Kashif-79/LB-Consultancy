import { TUniversity } from './university.interface';
import { University } from './university.model';

const createUniversityIntoDB = async (payLoad: TUniversity) => {
  const result = await University.create(payLoad);
  return result;
};
const getAllUniversitiessFromDB = async () => {
  const result = await University.find();
  return result;
};
const getSingleUniversityFromDB = async (id: string) => {
  const result = await University.findById(id);
  return result;
};
export const UniversityServices = {
  createUniversityIntoDB,
  getAllUniversitiessFromDB,
  getSingleUniversityFromDB,
};
