export interface ImportGroup {
  name: string;
  description: string;
}

export interface NamingConvention {
  artifact: string;
  convention: string;
  example: string;
}

export const IMPORT_GROUPS: ImportGroup[] = [
  {
    name: "Group 1 — External",
    description: "React, third-party packages (antd, lucide-react, @tanstack/react-query, @kalortech/shared-logic, etc.)",
  },
  {
    name: "Group 2 — Internal aliases",
    description: "Path-aliased imports: ~components, ~hooks, ~constants, ~pages, ~services, ~integrations, ~types",
  },
  {
    name: "Group 3 — Relative",
    description: "Sibling and child file imports: ./MyComponent, ../SharedLogicDocsPage.constants",
  },
];

export const NAMING_CONVENTIONS: NamingConvention[] = [
  { artifact: "Variables", convention: "camelCase", example: "contactList, isLoading" },
  { artifact: "Functions", convention: "camelCase", example: "getContacts, formatDate" },
  { artifact: "Constants", convention: "UPPER_SNAKE_CASE", example: "MAX_RETRIES, DEFAULT_PAGE_SIZE" },
  { artifact: "Types / Interfaces", convention: "PascalCase", example: "Contact, ApiResponse" },
  { artifact: "Enums", convention: "PascalCase name + PascalCase keys", example: "ContactStatus.Active" },
  { artifact: "Component files", convention: "PascalCase", example: "HeroHeader.tsx" },
  { artifact: "Non-component files", convention: "camelCase", example: "formatDate.ts, contacts.ts" },
  { artifact: "Custom hooks", convention: "use prefix", example: "useReports, usePagination" },
  { artifact: "Event handlers", convention: "on prefix + Handler suffix", example: "onCloseHandler, onSubmitHandler" },
];
