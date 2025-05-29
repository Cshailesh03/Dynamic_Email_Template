import express from 'express';
import  connectDB  from './config/db.js';
import templateRoutes from '../backend/src/routes/template.routes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

const testapi = async (req, res) => {
  res.json({ message: 'API is working' });
}
app.use('/api', templateRoutes);

connectDB();



// Allow requests from your frontend origin
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
