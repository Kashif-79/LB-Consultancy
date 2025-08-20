export type TServiceCategory =
  | 'Admission'
  | 'Visa'
  | 'Counseling'
  | 'Test Preparation'
  | 'Document Review'
  | 'Interview Coaching';

export type TService = {
  name: TServiceCategory;
  definition: string;
  description: string;
  status: 'OPEN' | 'BOOKED';
  isActive?: boolean;
};
