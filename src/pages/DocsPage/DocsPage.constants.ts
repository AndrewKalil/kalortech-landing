import type { DocsConfig } from "./DocsPage.types";

export const DOCS_CONFIGS: Record<string, DocsConfig> = {
  "shared-logic": {
    packageName: "@kalortech/shared-logic",
    version: "1.6.0",
    github: "https://github.com/kalortech/shared-logic",
    navSections: [
      { id: "hero", label: "Overview" },
      { id: "install", label: "Installation" },
      { id: "hooks", label: "Hooks" },
      { id: "utils", label: "Utilities" },
      { id: "testing", label: "Testing" },
      { id: "api", label: "API Reference" },
    ],
  },
  "eslint-config": {
    packageName: "@kalortech/eslint-config",
    version: "1.5.0",
    github: "https://github.com/kalortech/eslint-config",
    navSections: [
      { id: "hero", label: "Overview" },
      { id: "install", label: "Installation" },
      { id: "configs", label: "Config Layers" },
      { id: "rules", label: "Custom Rules" },
      { id: "restricted", label: "Restricted Imports" },
      { id: "api", label: "API Reference" },
    ],
  },
  "claude-auto-sufficiency": {
    packageName: "claude-auto-sufficiency",
    version: "1.0.0",
    navSections: [
      { id: "hero", label: "Overview" },
      { id: "setup", label: "Setup" },
      { id: "knowledge", label: "Knowledge Center" },
      { id: "context", label: "Context System" },
      { id: "hooks", label: "Hooks" },
      { id: "settings", label: "Settings" },
    ],
  },
};
