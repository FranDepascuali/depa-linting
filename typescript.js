module.exports = {
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "./.eslintrc-base.js",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "simple-import-sort"],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: false },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
  },
}
