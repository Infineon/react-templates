require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:react/recommended",
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect" // Automatically detect the version of React to use
    }
  }
};
