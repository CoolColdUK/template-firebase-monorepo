import {ContextFunction} from '@apollo/server';
import {ExpressContextFunctionArgument} from '@apollo/server/dist/esm/express4';
import {GraphqlContext} from '../../interface/GraphqlContext';

export const gqlContext: ContextFunction<[ExpressContextFunctionArgument], GraphqlContext> = async () => ({});
