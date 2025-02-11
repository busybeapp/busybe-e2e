import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        describe: "readonly",
        it: "readonly",
        cy: "readonly",
        Cypress: "readonly",
        expect: "readonly",
      },
    },
  },
  pluginJs.configs.recommended,
];
