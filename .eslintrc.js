module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended",
    "./.eslintrc-base.js",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "no-use-before-define": ["error", { functions: false, classes: false }],
  },
}
