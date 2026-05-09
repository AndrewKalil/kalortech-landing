import { useCallback, useEffect, useRef, useState } from "react";
import { useFormik } from "@kalortech/shared-logic";
import type { FormikHelpers } from "formik";

import { TENANT_SLUG } from "~constants";
import { supabase } from "~integrations/supabase";
import { getProjects, getTenantAndDataSource, syncProjects, TENANTS_BUCKET } from "~services";

import { DRAFT_PREFIX, ENTRY_INITIAL_VALUES } from "./AdminPage.constants";
import type { AdminFormValues } from "./AdminPage.types";
import type { AdminEntry } from "./ProjectEditorCard";

const uploadImage = async (file: File, dataSourceId: string): Promise<string> => {
  const ext = file.name.split(".").pop() ?? "jpg";
  const filePath = `data-sources/${dataSourceId}/${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage
    .from(TENANTS_BUCKET)
    .upload(filePath, file, { upsert: true });
  if (error) throw new Error(error.message);
  return supabase.storage.from(TENANTS_BUCKET).getPublicUrl(filePath).data.publicUrl;
};

const projectsToEntries = (projects: Awaited<ReturnType<typeof getProjects>>): AdminEntry[] =>
  projects.map((p, i) => ({
    id: p.id,
    displayOrder: i + 1,
    data: {
      title: p.title,
      description: p.description,
      websiteUrl: p.websiteUrl,
      image: p.image,
      tags: p.tags,
      category: p.category,
      isFeatured: p.isFeatured,
    },
  }));

export const useAdminPage = () => {
  const [session, setSession] = useState<boolean | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [previewUrls, setPreviewUrls] = useState<Record<string, string>>({});
  const pendingFilesRef = useRef<Map<string, File>>(new Map());
  const dsRef = useRef<{ tenantId: string; dataSourceId: string } | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then((result) => {
      const { data } = result;
      setSession(!!data.session);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(!!s);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const onSubmitHandler = useCallback(
    async (formValues: AdminFormValues, helpers: FormikHelpers<AdminFormValues>) => {
      const { resetForm } = helpers;
      if (!dsRef.current) return;
      setSaveError(null);
      setIsSaving(true);
      try {
        const { tenantId, dataSourceId } = dsRef.current;
        const entries = [...formValues.entries];

        for (const entry of entries) {
          const file = pendingFilesRef.current.get(entry.id);
          if (file) {
            const url = await uploadImage(file, dataSourceId);
            entry.data = { ...entry.data, image: url };
          }
        }

        const syncEntries = entries.map((e) => ({
          ...e,
          id: e.id.startsWith(DRAFT_PREFIX) ? crypto.randomUUID() : e.id,
        }));

        await syncProjects({ dataSourceId, tenantId, entries: syncEntries });
        pendingFilesRef.current.clear();

        const fresh = await getProjects(TENANT_SLUG);
        resetForm({ values: { entries: projectsToEntries(fresh) } });
        setPreviewUrls({});
      } catch (err) {
        setSaveError(err instanceof Error ? err.message : "Save failed");
      } finally {
        setIsSaving(false);
      }
    },
    [],
  );

  const { values, onChange, handleSubmit, resetForm, setFieldValue } =
    useFormik<AdminFormValues>({
      initialValues: { entries: [] },
      onSubmit: onSubmitHandler,
    });

  useEffect(() => {
    if (!session) return;
    getTenantAndDataSource(TENANT_SLUG)
      .then(async (ds) => {
        dsRef.current = ds;
        const projects = await getProjects(TENANT_SLUG);
        resetForm({ values: { entries: projectsToEntries(projects) } });
      })
      .catch(() => {
        /* silently ignore if tenant not seeded yet */
      });
  }, [session, resetForm]);

  const onAddProjectHandler = useCallback(() => {
    const newEntry: AdminEntry = {
      ...ENTRY_INITIAL_VALUES,
      id: `${DRAFT_PREFIX}${Date.now()}`,
      displayOrder: values.entries.length + 1,
    };
    setFieldValue("entries", [...values.entries, newEntry]);
  }, [values.entries, setFieldValue]);

  const onDeleteEntryHandler = useCallback(
    (entryId: string) => {
      pendingFilesRef.current.delete(entryId);
      setPreviewUrls((prev) => {
        const next = { ...prev };
        delete next[entryId];
        return next;
      });
      setFieldValue(
        "entries",
        values.entries
          .filter((e) => e.id !== entryId)
          .map((e, i) => ({ ...e, displayOrder: i + 1 })),
      );
    },
    [values.entries, setFieldValue],
  );

  const onFileChangeHandler = useCallback((entryId: string, file: File) => {
    pendingFilesRef.current.set(entryId, file);
    const url = URL.createObjectURL(file);
    setPreviewUrls((prev) => ({ ...prev, [entryId]: url }));
  }, []);

  const onSignOutHandler = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  const onCancelHandler = useCallback(() => {
    pendingFilesRef.current.clear();
    setPreviewUrls({});
    resetForm();
  }, [resetForm]);

  return {
    session,
    values,
    onChange,
    handleSubmit,
    isSaving,
    saveError,
    previewUrls,
    onAddProjectHandler,
    onDeleteEntryHandler,
    onFileChangeHandler,
    onSignOutHandler,
    onCancelHandler,
  };
};
