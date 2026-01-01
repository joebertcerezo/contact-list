/*
  ESLint Stylistic
  Documentation: https://eslint.style/rules
*/

import stylistic from "@stylistic/eslint-plugin"
import { defineConfig } from "eslint/config"

export default defineConfig({
  name: "contact-list/eslint-stylistic",
  extends: [
    stylistic.configs.customize({
      arrowParens: true,
      braceStyle: "1tbs",
    }),
  ],
  // Some rules are causing issues for comments in YAML files
  ignores: ["**/*.{yaml,yml}"],
  plugins: {
    "@stylistic": stylistic,
  },
  rules: {
    "@stylistic/array-bracket-newline": ["error", "consistent"],
    "@stylistic/array-element-newline": ["error", "consistent"],
    "@stylistic/function-call-spacing": "error",
    "@stylistic/implicit-arrow-linebreak": "error",
    "@stylistic/line-comment-position": "error",
    "@stylistic/linebreak-style": "error",
    "@stylistic/no-confusing-arrow": "error",
    "@stylistic/no-extra-parens": [
      "error",
      "all",
      {
        nestedBinaryExpressions: false,
      },
    ],
    "@stylistic/no-extra-semi": "error",
    "@stylistic/nonblock-statement-body-position": "error",
    "@stylistic/object-curly-newline": "error",
    "@stylistic/padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        next: "multiline-block-like",
        prev: "*",
      },
      {
        blankLine: "always",
        next: "*",
        prev: "import",
      },
      {
        blankLine: "never",
        next: "import",
        prev: "import",
      },
    ],
    "@stylistic/quotes": [
      "error",
      "double",
      { allowTemplateLiterals: "avoidEscape", avoidEscape: true },
    ],
    "@stylistic/semi-style": "error",
    "@stylistic/switch-colon-spacing": "error",
  },
})
