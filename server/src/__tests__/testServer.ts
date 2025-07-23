import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import announcementRoutes from '../routes/announcement.routes';
import quizRoutes from '../routes/quiz.routes';

const createTestApp = (): Express => {
  const app: Express = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(helmet());
  app.use(morgan('dev', { skip: () => true }));

  app.use('/api/announcements', announcementRoutes);
  app.use('/api/quizzes', quizRoutes);

  app.get('/', (req, res) => {
    res.send('Coligo API Test Server');
  });

  app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

  return app;
};

export default createTestApp; 