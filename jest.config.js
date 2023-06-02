export default {
  verbose: true,
  transform: {
    "^.+.ts?$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!react-markdown/)"],
};
