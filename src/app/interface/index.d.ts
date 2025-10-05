import { JwtPayload } from 'jsonwebtoken';
import { TUserRole } from './user';

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload & { role: TUserRole };
    }
  }
}
