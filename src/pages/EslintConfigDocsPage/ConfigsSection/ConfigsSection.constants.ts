import type { DocEntry } from "~types";

export const CONFIGS_ENTRIES: DocEntry[] = [
  {
    name: "baseConfig",
    description:
      "Core JavaScript rules applicable to all file types. Disables console usage and enforces consistent code style via @typescript-eslint base rules.",
    examples: [
      {
        title: "Rules included",
        language: "javascript",
        code: `// Enforced by baseConfig
"no-console": "error",
"@typescript-eslint/no-unused-vars": "error",
"@typescript-eslint/no-explicit-any": "error"`,
      },
    ],
  },
  {
    name: "importsConfig",
    description:
      "Import order enforcement via perfectionist/sort-imports. Organizes imports into 3 groups: external packages, internal aliases (~), and relative imports. Also enforces import/no-extraneous-dependencies.",
    examples: [
      {
        title: "Import group order",
        language: "typescript",
        code: `// Group 1 — External packages
import { useState } from "react";
import { Button } from "antd";
import { useFormik } from "@kalortech/shared-logic";

// Group 2 — Internal aliases
import { Footer } from "~components";
import { ROUTES } from "~constants";

// Group 3 — Relative imports
import { MyHelper } from "./MyHelper";`,
      },
    ],
    notes: [
      "Run npx eslint --fix to auto-sort imports — never reorder manually.",
      "import/no-extraneous-dependencies blocks packages not listed in package.json.",
    ],
  },
  {
    name: "typescriptConfig",
    description:
      "TypeScript-specific strict rules. Enforces consistent type import syntax, no explicit any, and verbatim module syntax.",
    examples: [
      {
        title: "Rules included",
        language: "javascript",
        code: `// Enforced by typescriptConfig
"@typescript-eslint/no-explicit-any": "error",
"@typescript-eslint/consistent-type-imports": "error",
// Requires: import type { Foo } from "..."`,
      },
    ],
    notes: [
      "Always use import type { ... } for type-only imports — enforced automatically.",
    ],
  },
  {
    name: "reactConfig",
    description:
      "React hooks rules. Enforces rules-of-hooks and exhaustive-deps to prevent common hook mistakes.",
    examples: [
      {
        title: "Rules included",
        language: "javascript",
        code: `// Enforced by reactConfig
"react-hooks/rules-of-hooks": "error",
"react-hooks/exhaustive-deps": "warn"`,
      },
    ],
    notes: [
      "exhaustive-deps warns when useEffect, useCallback, or useMemo deps are missing.",
    ],
  },
  {
    name: "generalConfig",
    description:
      "Named exports only. Enforces import/no-default-export across the entire codebase. Add a project-level override for App.tsx and page files that the router requires as default exports.",
    examples: [
      {
        title: "Override for router pages",
        language: "javascript",
        code: `// eslint.config.js
{
  files: ["src/App.tsx", "src/pages/**/*.tsx"],
  rules: { "import/no-default-export": "off" },
}`,
      },
    ],
    notes: [
      "All component files must use named exports: export const MyComponent = ...",
      "Never use export default.",
    ],
  },
  {
    name: "customConfig",
    description:
      "Six kalortech-specific ESLint rules that enforce project architecture patterns. See the Custom Rules section for full documentation of each rule.",
    examples: [
      {
        title: "Rules included",
        language: "javascript",
        code: `// Enforced by customConfig
"kalortech/no-destructured-params": "error",
"kalortech/file-separation": "error",
"kalortech/no-inline-function-props": "error",
"kalortech/no-jsx-outside-return": "error",
"kalortech/jsx-return-max-lines": "warn",
"kalortech/no-unpacked-form-props": "warn"`,
      },
    ],
  },
];
