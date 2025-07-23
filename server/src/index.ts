import express, { Express, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import config from './config/config';


import announcementRoutes from './routes/announcement.routes';
import quizRoutes from './routes/quiz.routes';


dotenv.config();


const app: Express = express();
const PORT = config.PORT;
const MONGODB_URI = config.MONGODB_URI;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));


app.use('/api/announcements', announcementRoutes);
app.use('/api/quizzes', quizRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send('Coligo API is running');
});


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

export default app; 