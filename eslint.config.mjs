import globals from "globals";
import playwright from "eslint-plugin-playwright";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      parser: tsParser,
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": ts,
      playwright: playwright,
    },
    rules: {
      ...ts.configs.recommended.rules,
      ...playwright.configs["flat/recommended"].rules,
    },
  },
];
