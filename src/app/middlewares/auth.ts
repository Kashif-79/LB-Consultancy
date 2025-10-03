import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utilis/catchAsync';
import AppError from '../errors/AppErrors';
import status from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../interface/user';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(status.UNAUTHORIZED, 'You are not authorized');
    }
    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload & { role: TUserRole };

    const { role, email, iat } = decoded;

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(status.UNAUTHORIZED, 'You are not authorized');
    }
    req.user = decoded;
    next();
  });
};
export default auth;
