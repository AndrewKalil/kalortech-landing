export const ESLINT_CONFIG_EXAMPLE = `// eslint.config.js
import {
  baseConfig,
  importsConfig,
  typescriptConfig,
  reactConfig,
  generalConfig,
  customConfig,
} from "@kalortech/eslint-config";

export default [
  ...baseConfig,
  ...importsConfig,
  ...typescriptConfig,
  ...reactConfig,
  ...generalConfig,
  ...customConfig,
  {
    // Project-level overrides — allow default exports for router pages
    files: ["src/App.tsx", "src/pages/**/*.tsx"],
    rules: { "import/no-default-export": "off" },
  },
];`;
