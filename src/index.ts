import express from 'express';
import swaggerUi from 'swagger-ui-express';
import logger from './config/logger/winston';
import router from './routes/index';
import swaggerConfig from './config/docs/swagger';
import error from './middlewares/error';
import resolvers from './config/graphql/resolvers';
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql';

const port = process.env.PORT || 3000;
const app = express();

swaggerConfig.then((config) =>
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(config))
);

app.use(cors())
app.use(express.json());
app.use('/', router);
app.use(error);

// graphqlHttp is deprecated, should be using graphql-http;
// was unable to make graphql-http work properly in time though.
app.all("/graphql", graphqlHTTP({
  schema: resolvers.schema,
  rootValue: resolvers.root,
  graphiql: true
}));

app.listen(port, async () => {
  logger.info('Listening on port ' + port);
  logger.info('Running a GraphQL Server at /graphql');
  logger.info('Check api docs at /api-docs');
});
