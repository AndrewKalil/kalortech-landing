-- Seed kalortech tenant + projects data source
-- Run this in the Supabase SQL editor for the app-builder project.
-- After running, create an auth user via Dashboard → Auth → Users,
-- then set app_metadata: { "tenant_id": "<kalortech-uuid>", "role": "tenant_admin" }

-- 1. Insert tenant
INSERT INTO tenants (slug, business_name, config)
VALUES (
  'kalortech',
  'Kalortech',
  '{}'
)
ON CONFLICT (slug) DO NOTHING;

-- 2. Insert data source (run after tenant insert so we can reference the id)
INSERT INTO data_sources (tenant_id, name, slug, schema)
SELECT
  t.id,
  'Projects',
  'projects',
  '{
    "fields": [
      { "key": "title",       "type": "string",  "label": "Title" },
      { "key": "description", "type": "string",  "label": "Description" },
      { "key": "websiteUrl",  "type": "string",  "label": "Website URL" },
      { "key": "image",       "type": "image",   "label": "Image" },
      { "key": "tags",        "type": "string",  "label": "Tags" },
      { "key": "category",    "type": "string",  "label": "Category" },
      { "key": "isFeatured",  "type": "boolean", "label": "Featured" }
    ]
  }'::json
FROM tenants t
WHERE t.slug = 'kalortech'
ON CONFLICT DO NOTHING;

-- 3. Insert project entries
INSERT INTO data_source_entries (tenant_id, data_source_id, display_order, data)
SELECT
  t.id,
  ds.id,
  1,
  '{
    "title": "Shared Components",
    "description": "Open-source design system and component library. Extended form inputs, layout primitives, and providers built on Ant Design v6.",
    "websiteUrl": "https://shared-components.kalort.com/",
    "image": "",
    "tags": ["React", "TypeScript", "Ant Design", "SCSS Modules"],
    "category": "Library",
    "isFeatured": true
  }'::json
FROM tenants t
JOIN data_sources ds ON ds.tenant_id = t.id AND ds.slug = 'projects'
WHERE t.slug = 'kalortech';

INSERT INTO data_source_entries (tenant_id, data_source_id, display_order, data)
SELECT
  t.id,
  ds.id,
  2,
  '{
    "title": "BSE Drill",
    "description": "Operations management platform for a drilling company. Real-time tracking, reporting, and crew management.",
    "websiteUrl": "https://bse-drill.vercel.app/",
    "image": "",
    "tags": ["React", "TypeScript", "Supabase", "Ant Design"],
    "category": "Website",
    "isFeatured": true
  }'::json
FROM tenants t
JOIN data_sources ds ON ds.tenant_id = t.id AND ds.slug = 'projects'
WHERE t.slug = 'kalortech';

INSERT INTO data_source_entries (tenant_id, data_source_id, display_order, data)
SELECT
  t.id,
  ds.id,
  3,
  '{
    "title": "Letty'\''s Paradise School",
    "description": "Bilingual elementary school website with program details and enrollment information.",
    "websiteUrl": "https://www.lettysparadise.com/",
    "image": "",
    "tags": ["HTML", "CSS", "JavaScript"],
    "category": "Website",
    "isFeatured": false
  }'::json
FROM tenants t
JOIN data_sources ds ON ds.tenant_id = t.id AND ds.slug = 'projects'
WHERE t.slug = 'kalortech';

INSERT INTO data_source_entries (tenant_id, data_source_id, display_order, data)
SELECT
  t.id,
  ds.id,
  4,
  '{
    "title": "Rolands Upholstery",
    "description": "Portfolio and service site for a local upholstery and furniture restoration business.",
    "websiteUrl": "https://www.freeportupholstery.com/",
    "image": "",
    "tags": ["HTML", "CSS", "JavaScript"],
    "category": "Website",
    "isFeatured": false
  }'::json
FROM tenants t
JOIN data_sources ds ON ds.tenant_id = t.id AND ds.slug = 'projects'
WHERE t.slug = 'kalortech';

INSERT INTO data_source_entries (tenant_id, data_source_id, display_order, data)
SELECT
  t.id,
  ds.id,
  5,
  '{
    "title": "Control Chemicals",
    "description": "Corporate site for a chemical products distributor with product catalog and contact.",
    "websiteUrl": "https://control-chemicals.vercel.app/",
    "image": "",
    "tags": ["React", "TypeScript", "SCSS"],
    "category": "Website",
    "isFeatured": false
  }'::json
FROM tenants t
JOIN data_sources ds ON ds.tenant_id = t.id AND ds.slug = 'projects'
WHERE t.slug = 'kalortech';

INSERT INTO data_source_entries (tenant_id, data_source_id, display_order, data)
SELECT
  t.id,
  ds.id,
  6,
  '{
    "title": "Shared Logic",
    "description": "Private npm library of shared React hooks and utility functions used across all kalortech projects. Includes useFormik, useDisclosure, useDraftState, executeQuery, preparePayload, and more.",
    "websiteUrl": "https://kalort.com/docs/shared-logic",
    "image": "",
    "tags": ["TypeScript", "React", "npm"],
    "category": "Library",
    "isFeatured": true
  }'::json
FROM tenants t
JOIN data_sources ds ON ds.tenant_id = t.id AND ds.slug = 'projects'
WHERE t.slug = 'kalortech';

INSERT INTO data_source_entries (tenant_id, data_source_id, display_order, data)
SELECT
  t.id,
  ds.id,
  7,
  '{
    "title": "ESLint Config",
    "description": "Shared ESLint flat config for all kalortech projects. Enforces import order, named exports, naming conventions, restricted imports, and custom rules for React and TypeScript codebases.",
    "websiteUrl": "https://kalort.com/docs/eslint-config",
    "image": "",
    "tags": ["ESLint", "TypeScript", "React"],
    "category": "Library",
    "isFeatured": true
  }'::json
FROM tenants t
JOIN data_sources ds ON ds.tenant_id = t.id AND ds.slug = 'projects'
WHERE t.slug = 'kalortech';

INSERT INTO data_source_entries (tenant_id, data_source_id, display_order, data)
SELECT
  t.id,
  ds.id,
  8,
  '{
    "title": "Claude Auto-Sufficiency",
    "description": "Private knowledge center and context system for Claude Code. Single source of truth for React + Supabase project standards, coding conventions, hooks usage, and AI-assisted development workflows.",
    "websiteUrl": "https://kalort.com/docs/claude-auto-sufficiency",
    "image": "",
    "tags": ["Claude", "AI", "Developer Tools"],
    "category": "Library",
    "isFeatured": false
  }'::json
FROM tenants t
JOIN data_sources ds ON ds.tenant_id = t.id AND ds.slug = 'projects'
WHERE t.slug = 'kalortech';
