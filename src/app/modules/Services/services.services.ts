import QueryBuilder from '../../../builder/QueryBuilder';
import { serviceSearchableFields } from './services.constant';
import { TService } from './services.interface';
import { Service } from './services.model';

const createServiceIntoDb = async (payLoad: TService) => {
  const result = await Service.create(payLoad);
  return result;
};
const getAllServicesFromDB = async (query: Record<string, unknown>) => {
  const serviceQuery = new QueryBuilder(Service.find().populate('name'), query)
    .search(serviceSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await serviceQuery.countTotal();
  const result = await serviceQuery.modelQuery;

  return {
    meta,
    result,
  };
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
