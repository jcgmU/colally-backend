import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { setupContainer } from './infrastructure/container';
import { resolvers } from './presentation/graphql/resolvers';
import { typeDefs } from './presentation/graphql/schema';
dotenv.config();

export async function createApp() {
  setupContainer();
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
        console.log(`Server ready at http://localhost:${PORT}/graphql`);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}
