import mongoose from 'mongoose';
import app from '../src/app';

let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: 'lb-consultancy',
    });
    isConnected = true;
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}

export default async function handler(req: any, res: any) {
  await connectDB();
  return app(req, res);
}
