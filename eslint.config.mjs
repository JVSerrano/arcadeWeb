import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// Configuración flat de ESLint: reglas de Next.js (core-web-vitals) + TypeScript
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Sobrescribe los ignores por defecto de eslint-config-next.
  globalIgnores([
    // Ignores por defecto de eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
