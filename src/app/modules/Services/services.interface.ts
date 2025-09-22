export type TServiceCategory = 'Admission' | 'Visa' | 'Counseling';

export type TService = {
  _id: string;
  name: TServiceCategory;
  definition: string;
  description: string;
  status: 'OPEN' | 'BOOKED';
  isActive?: boolean;
};
