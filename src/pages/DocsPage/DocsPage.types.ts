import type { NavSection } from "~types";

export interface DocsConfig {
  packageName: string;
  version: string;
  github?: string;
  navSections: NavSection[];
}
