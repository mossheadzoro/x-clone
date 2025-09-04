import mongoose from 'mongoose';
import env from './env.js';

export const connectDB = async () => {
  try {


    await mongoose.connect(env.MONGODB_URI, {
      // Note: with mongoose v7+, useNewUrlParser & useUnifiedTopology are not needed
    });

    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1);
  }
};

export default mongoose;
