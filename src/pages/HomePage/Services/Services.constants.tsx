import type { ServiceCardProps } from "./ServiceCard";

type ServiceData = Omit<ServiceCardProps, "revealDir" | "delay">;

export const SERVICES_DATA: ServiceData[] = [
  {
    num: "01",
    title: "Web Development",
    description: "React, TypeScript, Node. Marketing sites, dashboards, internal tools. Built clean, shipped on time.",
    icon: (
      <svg viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Workflow Automation",
    description: "Cut the manual work. Custom scripts, low code platforms, AI assisted pipelines that save real hours.",
    icon: (
      <svg viewBox="0 0 24 24">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Integrations & APIs",
    description: "REST, webhooks, third party platforms. The plumbing that turns separate tools into one system.",
    icon: (
      <svg viewBox="0 0 24 24">
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Workspace Setup",
    description: "Google Workspace, Microsoft 365. Domains, mail, identity. Set up properly the first time, no loose ends.",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Cloud & Hosting",
    description: "Deploy, monitor, maintain. Vercel, AWS, Cloudflare. Boring infrastructure, the way it should be.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Consulting & Technical Support",
    description: "A second opinion, a roadmap, or a hands on partner. Engineering judgment when you need it most.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];
