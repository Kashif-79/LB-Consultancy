import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import cookieParser from 'cookie-parser';
import globalErrorhandler from './app/middlewares/globalErrorHandler';

const app: Application = express();

app.use(express.json());
app.use(cookieParser());
// app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));

const allowedOrigins = [
  'http://localhost:5173', // local dev
  'https://lb-consultancy-frontend.vercel.app', // production frontend
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, // allow cookies
  }),
);

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});
app.use(globalErrorhandler);
export default app;
