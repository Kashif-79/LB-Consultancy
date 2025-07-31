export type TUser = {
  email: string;
  password: string;
  needsPasswordChange: boolean;
  passwordChangeAt?: Date;
  role: 'admin' | 'student' | 'consultant';
  isDeleted: boolean;
};
