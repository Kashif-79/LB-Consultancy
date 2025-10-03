import status from 'http-status';
import AppError from '../../errors/AppErrors';
import bcrypt from 'bcrypt';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../../config';

const loginUser = async (payLoad: TLoginUser) => {
  const user = await User.findOne({ email: payLoad?.email }).select(
    '+password',
  );
  //   console.log(user);
  if (!user) {
    throw new AppError(status.NOT_FOUND, 'User Not Found');
  }
  const isDeleted = user?.isDeleted;
  if (isDeleted) {
    throw new AppError(status.FORBIDDEN, 'User is deleted');
  }
  const isPasswordMatch = await bcrypt.compare(
    payLoad?.password,
    user?.password,
  );
  if (isPasswordMatch === false) {
    throw new AppError(status.FORBIDDEN, 'Password is not matched');
  }

  const jwtPayload = {
    email: user?.email,
    role: user?.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '1d',
  });
  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt_refresh_secret as string,
    {
      expiresIn: '365d',
    },
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token: string) => {
  const decoded = jwt.verify(
    token,
    config.jwt_refresh_secret as string,
  ) as JwtPayload;
  // console.log(decoded);
  const { email, iat } = decoded;

  // check if the user exists
  const user = await User.findOne({ email: email }).select('+password');
  // console.log(user);
  if (!user) {
    throw new AppError(status.NOT_FOUND, 'User Not Found');
  }
  const isDeleted = user?.isDeleted;

  if (isDeleted) {
    throw new AppError(status.FORBIDDEN, 'User is already deleted');
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '1d',
  });

  return {
    accessToken,
  };
};

export const AuthServices = {
  loginUser,
  refreshToken,
};
