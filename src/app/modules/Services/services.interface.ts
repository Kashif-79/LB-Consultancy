export type TServiceCategory =
  | 'Admission'
  | 'Visa'
  | 'Counseling'
  | 'Test Preparation'
  | 'Document Review'
  | 'Interview Coaching';

export type TService = {
  name: string;
  description: string;
  category: TServiceCategory;
  price?: number;
  duration?: string; // e.g., "1 hour", "30 mins"
  consultants?: string[]; // Array of Consultant IDs
  isActive?: boolean;
};
