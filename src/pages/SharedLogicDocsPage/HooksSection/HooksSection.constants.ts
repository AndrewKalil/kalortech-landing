import type { DocEntry } from "~types";

export const HOOKS_ENTRIES: DocEntry[] = [
  {
    name: "useFormik",
    description:
      "Project-wide Formik wrapper. Disables validateOnChange and validateOnBlur by default, auto-clears errors on onChange, and exposes an isDisabled flag.",
    signature:
      "useFormik<T extends FormikValues>(config: FormikConfig<T>): FormikReturn<T>",
    params: [
      {
        name: "config",
        type: "FormikConfig<T>",
        required: true,
        description:
          "Standard Formik config. validateOnChange and validateOnBlur default to false.",
      },
    ],
    returnType:
      "{ values, errors, onChange, onBlur, setValues, setErrors, handleSubmit, resetForm, isDisabled, dirty, ...rest }",
    returnDescription:
      "Renames handleChange → onChange and handleBlur → onBlur. Adds isDisabled = !dirty || !isEmpty(errors).",
    examples: [
      {
        title: "Basic usage",
        language: "typescript",
        code: `import { useFormik } from "@kalortech/shared-logic";

const { values, errors, onChange, onBlur, handleSubmit, isDisabled } = useFormik({
  initialValues: { name: "", email: "" },
  validationSchema: MY_SCHEMA,
  onSubmit: async (formValues) => {
    await createContact(formValues);
  },
});

const { name, email } = values;
const { name: nameError, email: emailError } = errors;`,
      },
      {
        title: "Edit page with server data",
        language: "typescript",
        code: `const { values, onChange, handleSubmit } = useFormik({
  initialValues: contact ?? CONTACT_INITIAL_VALUES,
  validationSchema: SCHEMA,
  enableReinitialize: true,
  onSubmit: async (formValues) => {
    await updateContact({ id, payload: formValues });
  },
});`,
      },
    ],
    notes: [
      "Always use this hook — never import useFormik directly from formik.",
      "Destructure the return value immediately — never use formik.values or formik.errors.",
      "Destructure values and errors before the return — never inline formik.values.fieldName in JSX.",
    ],
  },
  {
    name: "useArrayFieldEventHandlers",
    description:
      "Produces Formik-compatible add, update, remove, clear, and dangerouslyReplace handlers for an array field. Uses createChangeEvent internally.",
    signature:
      "useArrayFieldEventHandlers<T>(options: { name: string; value: T[]; onChange: FormikHandlers['handleChange'] })",
    params: [
      {
        name: "name",
        type: "string",
        required: true,
        description: "Formik field name for the array.",
      },
      {
        name: "value",
        type: "T[]",
        required: true,
        description: "Current array value from formik.",
      },
      {
        name: "onChange",
        type: "(e: React.ChangeEvent<unknown>) => void",
        required: true,
        description: "The onChange from useFormik.",
      },
    ],
    returnType: "{ onAdd, onUpdate, onRemove, onClear, dangerouslyReplace }",
    examples: [
      {
        title: "Basic array field",
        language: "typescript",
        code: `import { useArrayFieldEventHandlers } from "@kalortech/shared-logic";

const { onAdd, onRemove, onUpdate } = useArrayFieldEventHandlers<FilterRow>({
  name: "filters",
  value: values.filters,
  onChange,
});

// onAdd returns a curried fn — pass to a button's onClick
<AddItemButton onClick={onAdd({ key: "", value: "" })} />

// onUpdate takes index then partial update
onUpdate(0)({ key: "status" });

// onRemove takes index
<button onClick={onRemove(idx)}>Remove</button>`,
      },
    ],
    notes: [
      "onAdd and onRemove accept an optional MouseEvent — call stopPropagation automatically.",
      "dangerouslyReplace replaces the entire array — use for drag-drop reorder.",
    ],
  },
  {
    name: "useCollapsed",
    description:
      "Manages sidebar collapsed state, persisted to localStorage via LocalStorageKeys.SidebarCollapsed.",
    signature: "useCollapsed(): { isCollapsed: boolean; onToggleCollapsedHandler: () => void }",
    examples: [
      {
        language: "typescript",
        code: `import { useCollapsed } from "@kalortech/shared-logic";

const { isCollapsed, onToggleCollapsedHandler } = useCollapsed();

<Sidebar
  collapsed={isCollapsed}
  onToggle={onToggleCollapsedHandler}
/>`,
      },
    ],
    notes: [
      "Reads the initial value from localStorage on mount — no flicker.",
      "Degrades gracefully if localStorage is unavailable.",
    ],
  },
  {
    name: "useDebounce",
    description:
      "Returns a debounced version of a value. Default delay is 300 ms.",
    signature: "useDebounce<T>(value: T, delay?: number): T",
    params: [
      { name: "value", type: "T", required: true, description: "Value to debounce." },
      {
        name: "delay",
        type: "number",
        required: false,
        defaultValue: "300",
        description: "Debounce delay in milliseconds.",
      },
    ],
    returnType: "T",
    examples: [
      {
        language: "typescript",
        code: `import { useDebounce } from "@kalortech/shared-logic";

const debouncedSearch = useDebounce(searchValue, 400);

useEffect(() => {
  if (debouncedSearch) fetchResults(debouncedSearch);
}, [debouncedSearch]);`,
      },
    ],
  },
  {
    name: "useDisclosure",
    description:
      "Manages a boolean open/closed state for modals, drawers, and popovers.",
    signature:
      "useDisclosure(defaultOpen?: boolean): { isOpen, onOpenHandler, onCloseHandler, onToggleHandler }",
    params: [
      {
        name: "defaultOpen",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Initial open state.",
      },
    ],
    returnType: "{ isOpen: boolean; onOpenHandler: () => void; onCloseHandler: () => void; onToggleHandler: () => void }",
    examples: [
      {
        language: "typescript",
        code: `import { useDisclosure } from "@kalortech/shared-logic";

const { isOpen, onOpenHandler, onCloseHandler } = useDisclosure();

<Button onClick={onOpenHandler}>Open Modal</Button>
<Modal open={isOpen} onClose={onCloseHandler}>
  ...
</Modal>`,
      },
    ],
  },
  {
    name: "useDraftState",
    description:
      "Decouples UI mutations from DB persistence. Tracks pending adds, edits, and deletes locally, then flushes on explicit save.",
    signature:
      "useDraftState<T extends { id: string }>(serverItems: T[]): DraftStateReturn<T>",
    params: [
      {
        name: "serverItems",
        type: "T[]",
        required: true,
        description: "Items from the server (TanStack Query data).",
      },
    ],
    returnType:
      "{ draftItems, isDirty, addDraft, editDraft, deleteDraft, resetDraft, pendingAdds, pendingEdits, pendingDeletes }",
    examples: [
      {
        language: "typescript",
        code: `import { useDraftState } from "@kalortech/shared-logic";

const {
  draftItems,
  isDirty,
  addDraft,
  editDraft,
  deleteDraft,
  resetDraft,
} = useDraftState(serverItems);

// Add — returns a temp id prefixed with DRAFT_ID_PREFIX
const tempId = addDraft({ name: "New Item", order: 0 });

// Edit — works for both draft and persisted items
editDraft(id, { name: "Updated" });

// Delete — removes from draft list
deleteDraft(id);

// Save — iterate pendingAdds, pendingEdits, pendingDeletes
const onSaveHandler = useCallback(async () => {
  await flush({ pendingAdds, pendingEdits, pendingDeletes });
  resetDraft();
}, [pendingAdds, pendingEdits, pendingDeletes, resetDraft]);`,
      },
    ],
    notes: [
      "draftItems is a computed view: serverItems - deletes + edits + pendingAdds.",
      "Draft ids are prefixed with DRAFT_ID_PREFIX ('__draft__'). Check with id.startsWith(DRAFT_ID_PREFIX) before deciding insert vs update.",
      "resetDraft clears all pending state — call after a successful save.",
    ],
  },
  {
    name: "useIsMobile",
    description:
      "Detects whether the viewport is below MOBILE_BREAKPOINT (768px). Returns isMobile and an onResizeHandler to attach to a resize listener.",
    signature:
      "useIsMobile(): { isMobile: boolean; onResizeHandler: () => void }",
    examples: [
      {
        language: "typescript",
        code: `import { useIsMobile } from "@kalortech/shared-logic";
import { useEffect } from "react";

const { isMobile, onResizeHandler } = useIsMobile();

useEffect(() => {
  window.addEventListener("resize", onResizeHandler);
  return () => window.removeEventListener("resize", onResizeHandler);
}, [onResizeHandler]);

return isMobile ? <MobileLayout /> : <DesktopLayout />;`,
      },
    ],
    notes: [
      "You must wire the resize listener manually — the hook does not do it automatically.",
    ],
  },
  {
    name: "useNavigateWithScroll",
    description:
      "Navigates to a route and then smooth-scrolls to a section by element id. Handles delayed mounting via retry logic.",
    signature:
      "useNavigateWithScroll(options: { headerHeight: number; ready?: boolean }): { onNavigateWithScrollHandler }",
    params: [
      {
        name: "headerHeight",
        type: "number",
        required: true,
        description: "Fixed header height in px — subtracted from scroll offset.",
      },
      {
        name: "ready",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Set true when the page content is ready to be scrolled to.",
      },
    ],
    returnType: "{ onNavigateWithScrollHandler: (path: string, sectionKey?: string | null) => void }",
    examples: [
      {
        language: "typescript",
        code: `import { useNavigateWithScroll } from "@kalortech/shared-logic";

// In a nav component
const { onNavigateWithScrollHandler } = useNavigateWithScroll({
  headerHeight: NAV_HEIGHT,
  ready: true,
});

<button onClick={() => onNavigateWithScrollHandler("/", "services")}>
  Our Services
</button>`,
      },
    ],
    notes: [
      "Passes sectionKey via location.state.scrollTo — consumed by the target page.",
      "Retries scroll up to MAX_RETRIES times if the element is not yet in the DOM.",
      "Clears location.state after consuming — prevents re-scroll on refresh.",
    ],
  },
];
