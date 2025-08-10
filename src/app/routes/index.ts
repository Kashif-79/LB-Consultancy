import { Router } from 'express';
import { StudentsRoutes } from '../modules/Student/student.routes';
import { UsersRoutes } from '../modules/user/user.routes';
import { AdminRoutes } from '../modules/Admin/admin.routes';
import { ConsultantRoutes } from '../modules/Consultant/consultant.routes';
import { ServicesRoutes } from '../modules/Services/services.routes';
import { CountryRoutes } from '../modules/Country/country.routes';
import { UniversityRoutes } from '../modules/University/university.routes';
import { Authroutes } from '../modules/Auth/auth.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UsersRoutes,
  },
  {
    path: '/students',
    route: StudentsRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/consultants',
    route: ConsultantRoutes,
  },
  {
    path: '/services',
    route: ServicesRoutes,
  },
  {
    path: '/countries',
    route: CountryRoutes,
  },
  {
    path: '/universities',
    route: UniversityRoutes,
  },
  {
    path: '/auth',
    route: Authroutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
