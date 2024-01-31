import {QueryResolvers} from '../../../../__generated__/resolvers-types';
import {GraphqlContext} from '../../../../interface/GraphqlContext';

export const getString: QueryResolvers<GraphqlContext>['getString'] = () => 'test';
