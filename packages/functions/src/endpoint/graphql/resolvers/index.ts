import {Resolvers} from '../../../__generated__/resolvers-types';
import {GraphqlContext} from '../../../interface/GraphqlContext';
import Query from './query';

const resolvers: Resolvers<GraphqlContext> = {
  Query,
};

export default resolvers;
