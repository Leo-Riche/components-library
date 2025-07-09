import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    extends: [
    "airbnb",
    "prettier"
  ],
    languageOptions: {
      files: ['**/*.{ts,tsx}'],
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: [
      "prettier"
    ],
    rules: {
      "prettier/prettier": "error"
    }
  }
);