import config from '../config';
import { USER_ROLE } from '../modules/user/user.constant';
import { User } from '../modules/user/user.model';

const superUser = {
  email: 'krreza200@gmail.com',
  password: config.super_admin_pass,
  role: USER_ROLE.admin,
  isDeleted: false,
};

const seedSuperAdmin = async () => {
  const isSuperAdminExists = await User.findOne({ email: superUser.email });
  if (!isSuperAdminExists) {
    await User.create(superUser);
  }
};
export default seedSuperAdmin;
