import express from 'express';
import swaggerUi from 'swagger-ui-express';
import logger from './config/logger/winston';
import router from './routes/index';
import swaggerConfig from './config/docs/swagger';
import error from './middlewares/error';

const port = process.env.PORT || 3000;
const app = express();

swaggerConfig.then((config) =>
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(config))
);

app.use(express.json());
app.use('/', router);
app.use(error);

app.listen(port, async () => {
  logger.info('Listening on port ' + port);
});
