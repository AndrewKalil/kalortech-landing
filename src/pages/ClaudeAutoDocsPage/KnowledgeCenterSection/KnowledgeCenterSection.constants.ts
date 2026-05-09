export interface KnowledgeFile {
  file: string;
  description: string;
}

export interface KnowledgeGroup {
  name: string;
  path: string;
  files: KnowledgeFile[];
}

export const KNOWLEDGE_GROUPS: KnowledgeGroup[] = [
  {
    name: "general",
    path: "~/.claude/knowledge_center/general/",
    files: [
      { file: "02-file-separation.md", description: "File organization, module structure, barrel files" },
      { file: "03-naming.md", description: "Naming conventions for all artifacts" },
      { file: "04-typescript.md", description: "TypeScript standards, strict mode rules" },
      { file: "05-code-quality.md", description: "Error handling, multiline formatting, ESLint" },
      { file: "06-testing.md", description: "Vitest setup, hook tests, coverage targets" },
    ],
  },
  {
    name: "frontend",
    path: "~/.claude/knowledge_center/frontend/",
    files: [
      { file: "01-stack.md", description: "Tech stack and library choices" },
      { file: "02-folder-structure.md", description: "src/ organization, component architecture" },
      { file: "03-components.md", description: "Named exports, event handlers, JSX rules" },
      { file: "04-state-management.md", description: "TanStack Query, React Context, query keys" },
      { file: "05-forms.md", description: "Formik, Yup, field component signature" },
      { file: "06-services.md", description: "Data layer, executeQuery, preparePayload" },
      { file: "07-typescript.md", description: "Frontend-specific TypeScript patterns" },
      { file: "08-styling.md", description: "SCSS Modules, Tailwind, classnames" },
      { file: "09-hooks-and-performance.md", description: "Custom hooks, memoization, Ramda" },
      { file: "11-advanced-patterns.md", description: "Draft state, page save, card CRUD" },
      { file: "12-providers.md", description: "Context providers, ThemeProvider" },
      { file: "13-data-fetching.md", description: "Multi-tenant data fetching architecture" },
    ],
  },
  {
    name: "backend",
    path: "~/.claude/knowledge_center/backend/",
    files: [
      { file: "01-supabase.md", description: "Supabase client setup, RLS, type generation" },
    ],
  },
  {
    name: "git",
    path: "~/.claude/knowledge_center/git/",
    files: [
      { file: "01-git-conventions.md", description: "Commit format, branch naming, pre-commit checks" },
    ],
  },
  {
    name: "shared-packages",
    path: "~/.claude/knowledge_center/shared-packages/",
    files: [
      { file: "01-shared-logic.md", description: "@kalortech/shared-logic hooks and utils" },
      { file: "02-shared-components.md", description: "@kalortech/shared-components UI library" },
    ],
  },
];
