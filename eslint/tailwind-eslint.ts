/*
  eslint-plugin-tailwindcss
  Documentation: https://github.com/francoismassart/eslint-plugin-tailwindcss#supported-rules
*/

// @ts-expect-error No types available
import tailwind from "eslint-plugin-tailwindcss"
import { defineConfig } from "eslint/config"

const callees = ["cn"]

export default defineConfig({
  name: "contact-list/eslint-plugin-tailwindcss",
  extends: [tailwind.configs["flat/recommended"]],
  rules: {
    "tailwindcss/classnames-order": ["error", { callees }],
    "tailwindcss/no-custom-classname": ["error"],
  },
  settings: {
    tailwindcss: {
      config: new URL("../app/globals.css", import.meta.url)
        .pathname,
    },
  },
})
