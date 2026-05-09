import { executeQuery } from "@kalortech/shared-logic";

import { supabase } from "~integrations/supabase";
import type { Json } from "~integrations/supabase";

import { PROJECTS_DATA_SOURCE_SLUG } from "./projects.constants";
import type { Project, ProjectData } from "./projects.types";

export const getProjects = async (tenantSlug: string): Promise<Project[]> => {
  const tenant = await executeQuery<{ id: string }>(
    supabase.from("tenants").select("id").eq("slug", tenantSlug).is("deleted_at", null).single(),
  );

  const dataSource = await executeQuery<{ id: string }>(
    supabase
      .from("data_sources")
      .select("id")
      .eq("tenant_id", tenant.id)
      .eq("slug", PROJECTS_DATA_SOURCE_SLUG)
      .is("deleted_at", null)
      .single(),
  );

  const entries = await executeQuery<{ id: string; data: ProjectData; displayOrder: number }[]>(
    supabase
      .from("data_source_entries")
      .select("id, data, display_order")
      .eq("data_source_id", dataSource.id)
      .is("deleted_at", null)
      .order("display_order", { ascending: true }),
  );

  return entries.map((entry) => ({
    id: entry.id,
    title: entry.data.title,
    description: entry.data.description,
    category: entry.data.category,
    websiteUrl: entry.data.websiteUrl,
    image: entry.data.image ?? "",
    tags: Array.isArray(entry.data.tags) ? entry.data.tags : [],
    isFeatured: entry.data.isFeatured ?? false,
  }));
};

export const syncProjects = async (options: {
  dataSourceId: string;
  tenantId: string;
  entries: { id: string; displayOrder: number; data: ProjectData }[];
}): Promise<void> => {
  const { dataSourceId, tenantId, entries } = options;
  const payload = entries.map((e) => ({
    id: e.id,
    display_order: e.displayOrder,
    data: e.data,
  }));
  await executeQuery<void>(
    supabase.rpc("sync_data_source_entries", {
      p_data_source_id: dataSourceId,
      p_entries: payload as unknown as Json,
      p_tenant_id: tenantId,
    }),
  );
};

export const getTenantAndDataSource = async (
  tenantSlug: string,
): Promise<{ tenantId: string; dataSourceId: string }> => {
  const tenant = await executeQuery<{ id: string }>(
    supabase.from("tenants").select("id").eq("slug", tenantSlug).is("deleted_at", null).single(),
  );
  const dataSource = await executeQuery<{ id: string }>(
    supabase
      .from("data_sources")
      .select("id")
      .eq("tenant_id", tenant.id)
      .eq("slug", PROJECTS_DATA_SOURCE_SLUG)
      .is("deleted_at", null)
      .single(),
  );
  return { tenantId: tenant.id, dataSourceId: dataSource.id };
};
