import globals from "globals";
import tseslint from "typescript-eslint";
import js from "@eslint/js";

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      "prettier"
    ],
    languageOptions: {
      files: ['**/*.{ts,tsx}'],
      ecmaVersion: 12,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: [
      "prettier"
    ],
    rules: {
      "prettier/prettier": "error",
      "no-console": "warn",
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "comma-dangle": ["error", "only-multiline"],
      "arrow-parens": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off"
    }
  }
);