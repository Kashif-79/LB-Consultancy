import { TConsultant } from './consultant.interface';
import { Consultant } from './consultant.model';

const getAllConsultantsFromDB = async () => {
  const result = await Consultant.find();
  return result;
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
    { _id: id },
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
