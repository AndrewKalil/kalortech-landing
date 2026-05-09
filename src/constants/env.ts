// No client-exposed env vars needed — Resend keys are server-side only

export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
export const TENANT_SLUG = import.meta.env.VITE_TENANT_SLUG as string;
