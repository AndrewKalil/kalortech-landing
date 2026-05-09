import type { AdminEntry } from "./ProjectEditorCard";

export const DRAFT_PREFIX = "draft-";

export const ENTRY_INITIAL_VALUES: AdminEntry = {
  id: "",
  displayOrder: 0,
  data: {
    title: "",
    description: "",
    websiteUrl: "",
    image: "",
    tags: [],
    category: "Website",
    isFeatured: false,
  },
};
