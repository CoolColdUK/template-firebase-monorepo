import {QueryResolvers} from '../../../../__generated__/resolvers-types';
import {GraphqlContext} from '../../../../interface/GraphqlContext';
import {getString} from './getString';

const Query: QueryResolvers<GraphqlContext> = {getString};

export default Query;
