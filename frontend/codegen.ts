import { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";
import Config from "./public/config.json";
dotenv.config();

const config: CodegenConfig = {
  overwrite: true,
  schema: Config.REACT_APP_GRAPHQL_ENDPOINT,
  debug: true,
  verbose: true,
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        enumsAsTypes: true,
        useImplementingTypes: true,
        nonOptionalTypename: true,
      },
    },
  },
};

export default config;
