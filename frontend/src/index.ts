import { env } from "./utils/env";

fetch("/config.json")
  .then((response) => response.json())
  .then(({ REMOTE_DOMAINS, ...config }) => {
    env.REACT_APP_GRAPHQL_ENDPOINT = config.REACT_APP_GRAPHQL_ENDPOINT;
  })
  .then(() => import("./bootstrap"));
