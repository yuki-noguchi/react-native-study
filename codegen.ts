import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "https://graphqlzero.almansi.me/api",
    documents: ["app/**/*.tsx"],
    generates: {
        "./__generated__/": {
          preset: "client",
          presetConfig: {
            gqlTagName: "gql",
          },
        }},
        ignoreNoDocuments: true,
};

export default config;