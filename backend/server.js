import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import hospitalRoutes from './routes/hospitalRoutes.js';
import patientRoutes from './routes/patientRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/hospitals', hospitalRoutes);
app.use('/api/patients', patientRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
