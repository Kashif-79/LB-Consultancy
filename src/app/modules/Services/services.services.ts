import { TService } from './Services.interface';
import { Service } from './services.model';

const createServiceIntoDb = async (payLoad: TService) => {
  const result = await Service.create(payLoad);
  return result;
};
const getAllServicesFromDB = async () => {
  const result = await Service.find();
  return result;
};
const getSingleServiceFromDB = async (id: string) => {
  const result = await Service.findById(id);
  return result;
};

export const ServicesService = {
  createServiceIntoDb,
  getAllServicesFromDB,
  getSingleServiceFromDB,
};
