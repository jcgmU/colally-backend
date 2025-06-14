import 'reflect-metadata';
import express from 'express';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServer } from '@apollo/server';
import { typeDefs } from './presentation/graphql/schema';
import { resolvers } from './presentation/graphql/resolvers';
import cors from 'cors';
import bodyParser from 'body-parser';

export async function createApp() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use('/graphql', expressMiddleware(server));
  return app;
}

if (process.env.NODE_ENV !== 'test') {
  createApp()
    .then((app) => {
      const PORT = process.env.PORT || 4000;
      app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`Server ready at http://localhost:${PORT}/graphql`);
      });
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    });
}
