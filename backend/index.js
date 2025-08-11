import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import regionRoutes from './routes/regionRoutes.js';
import placeRoutes from './routes/placeRoutes.js'; 
import userRoutes from './routes/userRoutes.js';

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
    res.json({ message: "Welcome to the Mathura Darshan API!" });
});

app.use('/api/regions', regionRoutes);
app.use('/api/places', placeRoutes);
app.use('/api/users', userRoutes);
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});