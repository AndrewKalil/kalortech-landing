import type { ConstantDocEntry, TypeDocEntry } from "~types";

export const CONSTANTS_ENTRIES: ConstantDocEntry[] = [
  {
    name: "DRAFT_ID_PREFIX",
    type: "string",
    value: '"__draft__"',
    description: "Prefix applied to temporary item ids created by useDraftState.",
  },
  {
    name: "MOBILE_BREAKPOINT",
    type: "number",
    value: "768",
    description: "Viewport width threshold (px) for mobile detection in useIsMobile.",
  },
  {
    name: "LocalStorageKeys.SidebarCollapsed",
    type: "string",
    value: '"sidebar_collapsed"',
    description: "localStorage key used by useCollapsed to persist sidebar state.",
  },
  {
    name: "DARK_THEME",
    type: "string",
    value: '"dark"',
    description: "ThemeMode constant for dark theme.",
  },
  {
    name: "LIGHT_THEME",
    type: "string",
    value: '"light"',
    description: "ThemeMode constant for light theme.",
  },
  {
    name: "NAV_HEIGHT",
    type: "number",
    value: "60",
    description: "Deprecated — moved to @kalortech/shared-components/layout.",
  },
  {
    name: "SIDEBAR_WIDTH_COLLAPSED",
    type: "number",
    value: "64",
    description: "Deprecated — moved to @kalortech/shared-components/layout.",
  },
  {
    name: "SIDEBAR_WIDTH_EXPANDED",
    type: "number",
    value: "260",
    description: "Deprecated — moved to @kalortech/shared-components/layout.",
  },
];

export const TYPES_ENTRIES: TypeDocEntry[] = [
  {
    name: "FieldProps",
    description:
      "Standard prop interface for all form field components. Ensures every field fires Formik-compatible change events.",
    definition: `interface FieldProps {
  error?: string;
  onBlur: (event: SyntheticEvent) => void;
  onChange: (event: SyntheticEvent) => void;
  onFocus?: (event: SyntheticEvent) => void;
  value?: unknown;
}`,
  },
  {
    name: "GenericTargetEmitter<T>",
    description: "Extends HTMLInputElement with a typed value. Used to type synthetic events for non-input form components.",
    definition: `type GenericTargetEmitter<T> = Omit<HTMLInputElement, "value"> & { value: T };`,
  },
  {
    name: "ThemeMode",
    description: "Union type for theme mode.",
    definition: `type ThemeMode = "light" | "dark";`,
  },
  {
    name: "DraftStateReturn<T>",
    description: "Return type of useDraftState.",
    definition: `interface DraftStateReturn<T> {
  draftItems: T[];
  isDirty: boolean;
  addDraft: (item: Omit<T, "id">) => string;
  editDraft: (id: string, changes: Partial<T>) => void;
  deleteDraft: (id: string) => void;
  resetDraft: () => void;
  pendingAdds: T[];
  pendingEdits: Map<string, Partial<T>>;
  pendingDeletes: Set<string>;
}`,
  },
  {
    name: "PageSaveContextValue",
    description: "Value shape of the PageSaveContext.",
    definition: `interface PageSaveContextValue {
  isDirty: boolean;
  isSaving: boolean;
  onSaveHandler: () => void;
  onResetHandler: () => void;
  registerSave: (fn: () => Promise<void>) => void;
}`,
  },
];
