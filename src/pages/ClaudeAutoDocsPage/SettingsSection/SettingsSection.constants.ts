export interface Plugin {
  name: string;
  description: string;
  trigger: string;
}

export const PLUGINS: Plugin[] = [
  {
    name: "caveman",
    description:
      "Ultra-compressed communication mode. Cuts token usage ~75% by responding like a caveman while maintaining full technical accuracy. Supports intensity levels: lite, full (default), ultra.",
    trigger: '"caveman mode", "talk like caveman", "/caveman", or "less tokens"',
  },
  {
    name: "postgres-best-practices",
    description:
      "Postgres performance optimization and best practices from Supabase. Auto-triggered when writing, reviewing, or optimizing Postgres queries, schema designs, or database configurations.",
    trigger: "Writing or reviewing Postgres queries, schema designs, or RLS policies",
  },
];
