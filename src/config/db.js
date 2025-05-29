import mongoose from 'mongoose';

 const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://Ananddb:Anand2003@cluster0.hhg4k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;
