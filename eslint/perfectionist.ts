/*
  Perfectionist
  Documentation: https://eslint-plugin-perfectionist.azat.io/rules/
*/

import perfectionist from "eslint-plugin-perfectionist"
import { defineConfig } from "eslint/config"

const type = "natural"

// Identifiers to place at top when sorting
const topIdentifiers = ["id", "name"] as const

const groupConfig = {
  customGroups: [
    {
      elementNamePattern: `^(?:${topIdentifiers.join("|")})$`,
      groupName: "top",
      selector: "property",
    },
  ],
  groups: ["top", "unknown"],
}

export default defineConfig({
  name: "contact-list/perfectionist",
  extends: [perfectionist.configs[`recommended-${type}`]],
  rules: {
    "perfectionist/sort-imports": [
      "error",
      {
        groups: [
          // Values
          ["builtin", "external"],
          "internal",
          ["parent", "sibling", "index"],

          // Groups
          ["builtin-type", "external-type"],
          "internal-type",
          ["parent-type", "sibling-type", "index-type"],

          // Misc
          ["side-effect", "side-effect-style", "style"],
          "unknown",
        ],
        newlinesBetween: "never",
        sortSideEffects: true,
        type,
      },
    ],
    "perfectionist/sort-interfaces": [
      "error",
      {
        ...groupConfig,
        partitionByNewLine: true,
      },
    ],
    "perfectionist/sort-modules": [
      "error",
      {
        partitionByNewLine: true,
        type,
      },
    ],
    "perfectionist/sort-named-imports": [
      "error",
      {
        groupKind: "values-first",
        type,
      },
    ],
    "perfectionist/sort-objects": [
      "error",
      {
        ...groupConfig,
        partitionByNewLine: true,
      },
    ],
  },
})
