import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'; 

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"] },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      eqeqeq: "off",
      "no-unused-vars": "error",
       "no-unused-expressions":"error",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "no-console":"warn",
      "no-undef":"error"
    },
  },
  {
    ignores: [".node_modules/*","dist/"]
 },
  eslintPluginPrettierRecommended,
  tseslint.configs.recommended,
]);