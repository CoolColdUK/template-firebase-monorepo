import {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/gql/*.ts',
  generates: {
    './src/__generated__/resolvers-types.ts': {
      config: {
        federation: true,
        useIndexSignature: true,
        // contextType: '../interface/GraphqlContext#GraphqlContext',
      },
      plugins: ['typescript', 'typescript-resolvers'],
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
