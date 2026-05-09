export interface ContextTemplate {
  file: string;
  trigger: string;
  description: string;
}

export const CONTEXT_TEMPLATES: ContextTemplate[] = [
  {
    file: "session-startup.md",
    trigger: "Start of a new session",
    description: "Detects enforcement mode (eslint-config installed or not), checks project structure, loads CLAUDE.md, sets session context.",
  },
  {
    file: "session-end.md",
    trigger: "End of a session",
    description: "Updates memory files with new patterns discovered, removes stale entries, summarizes work done.",
  },
  {
    file: "review-checklist.md",
    trigger: "Auto-injected before any commit (via pre-commit hook)",
    description: "Code-level review: import order, named exports, handler naming, JSX rules, no magic values, TypeScript errors.",
  },
  {
    file: "CLAUDE-template.md",
    trigger: "Starting a new project",
    description: "Scaffolding template for new projects: folder structure, path aliases, tsconfig setup, ESLint config, initial files.",
  },
  {
    file: "feature-template.md",
    trigger: "Speccing a feature",
    description: "Feature specification template: what changes, new files, updated files, test plan, verification steps.",
  },
  {
    file: "backend-checklist.md",
    trigger: "Working on a migration, RLS policy, or backend-only task",
    description: "Supabase migration checklist: numbered SQL migration file, RLS policies, type regeneration, no direct dashboard changes.",
  },
];
