import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';
import {buildSubgraphSchema} from '@apollo/subgraph';
import {mergeTypeDefs} from '@graphql-tools/merge';
import cors from 'cors';
import express from 'express';
import {functions, region, runtimeOpts} from '../../config';
import {typeQuery} from '../../gql/query';
import {GraphqlContext} from '../../interface/GraphqlContext';
import {gqlContext} from './gqlContext';
import resolvers from './resolvers';

const dataArr = [typeQuery];

const typeDefs = mergeTypeDefs([dataArr]);

const app = express();

const combinedSchema = buildSubgraphSchema({typeDefs, resolvers});

const server = new ApolloServer<GraphqlContext>({
  schema: combinedSchema,
  plugins: [],
});
server.start().then(() => {
  app.use('/', cors(), expressMiddleware(server, {context: gqlContext}));
});

export const graphql = functions.runWith(runtimeOpts).region(region).https.onRequest(app);
