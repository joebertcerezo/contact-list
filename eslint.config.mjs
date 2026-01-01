import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import { defineConfig, globalIgnores } from "eslint/config"
import eslintBaseConfig from "./eslint/eslint.ts"
import perfectionistConfig from "./eslint/perfectionist.ts"
import stylistic from "./eslint/stylistic.ts"
import tailwindConfig from "./eslint/tailwind-eslint.ts"
import eslintTsConfig from "./eslint/typescript-eslint.ts"

const eslintConfig = defineConfig([
  ...eslintBaseConfig,
  ...perfectionistConfig,
  ...stylistic,
  ...tailwindConfig,
  ...eslintTsConfig,
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
])

export default eslintConfig
