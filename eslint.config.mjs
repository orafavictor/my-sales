import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  // 1. Pastas ignoradas (sempre no topo)
  {
    ignores: ["**/build/**", "**/node_modules/**", "**/dist/**"]
  },

  // 2. Configuração base do ESLint para JavaScript
  pluginJs.configs.recommended,

  // 3. Configuração para TypeScript
  ...tseslint.configs.recommended,

  // 4. Definição de ambientes (Browser e Node)
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
