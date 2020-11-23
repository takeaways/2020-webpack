module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {},
  ignorePatterns: ["dist", "gulpfile.js", "gulp/**/*", "webpack.config.js"],
};
