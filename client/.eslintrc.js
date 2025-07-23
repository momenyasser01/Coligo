module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: "detect" },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier", // disables conflicting rules
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // React 17+
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal"],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
