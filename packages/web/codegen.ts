import {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: '../functions/src/gql/*.ts',
  generates: {
    './src/__generated__/resolvers-types.ts': {
      config: {
        federation: true,
        useIndexSignature: true,
        // contextType: '../interface/GraphqlContext#GraphqlContext',
      },
      plugins: ['typescript'],
    },
  },
  config: {
    namingConvention: {
      // typeNames: 'change-case-all#pascalCase',
      enumValues: 'change-case-all#upperCase',
    },
  },
};

export default config;
