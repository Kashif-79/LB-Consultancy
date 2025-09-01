import QueryBuilder from '../../../builder/QueryBuilder';
import { consultantSearchableFields } from './consulatant.constant';
import { TConsultant } from './consultant.interface';
import { Consultant } from './consultant.model';

const getAllConsultantsFromDB = async (query: Record<string, unknown>) => {
  const consultantQuery = new QueryBuilder(
    Consultant.find().populate('user'),
    query,
  )
    .search(consultantSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await consultantQuery.countTotal();
  const result = await consultantQuery.modelQuery;

  return {
    meta,
    result,
  };
};
const getSingleConsultantFromDB = async (id: string) => {
  const result = await Consultant.findById(id);
  return result;
};

const updateConsultantFromDB = async (
  id: string,
  payLoad: Partial<TConsultant>,
) => {
  const { name, ...remainingConsultantData } = payLoad;
  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingConsultantData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  const result = await Consultant.findOneAndUpdate(
    { id },
    modifiedUpdatedData,
    {
      new: true,
      runValidators: true,
    },
  );

  return result;
};

export const ConsultantServices = {
  getAllConsultantsFromDB,
  getSingleConsultantFromDB,
  updateConsultantFromDB,
};
