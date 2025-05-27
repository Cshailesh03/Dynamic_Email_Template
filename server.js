import express from 'express';
import { connectDB } from './config/db.js';
import templateRoutes from '../backend/routes/template.routes.js';

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use('/api', templateRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
