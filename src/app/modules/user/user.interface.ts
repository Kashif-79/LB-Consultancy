export type TUser = {
  email: string;
  password: string;
  role: 'admin' | 'student' | 'consultant';
  isDeleted: boolean;
};
