import QueryBuilder from '../../../builder/QueryBuilder';
import { adminSearchableFields } from './admin.constant';
import { TAdmin } from './admin.interface';
import { Admin } from './admin.model';

const getAllAdminsFromDB = async (query: Record<string, unknown>) => {
  const adminQuery = new QueryBuilder(Admin.find().populate('user'), query)
    .search(adminSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await adminQuery.countTotal();
  const result = await adminQuery.modelQuery;

  return {
    meta,
    result,
  };
};
const getSingleAdminFromDB = async (id: string) => {
  const result = await Admin.findById(id);
  return result;
};

const updateAdminFromDB = async (id: string, payLoad: Partial<TAdmin>) => {
  const { name, ...remainingAdminData } = payLoad;
  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingAdminData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  const result = await Admin.findOneAndUpdate({ id }, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });

  return result;
};

export const AdminServices = {
  getAllAdminsFromDB,
  getSingleAdminFromDB,
  updateAdminFromDB,
};
