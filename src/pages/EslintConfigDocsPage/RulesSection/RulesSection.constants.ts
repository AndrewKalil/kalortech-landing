import type { DocEntry } from "~types";

export const RULES_ENTRIES: DocEntry[] = [
  {
    name: "kalortech/no-destructured-params",
    description:
      "Requires component props to be destructured inside the function body, not in the parameter list. Keeps the component signature clean and makes the prop shape explicit.",
    examples: [
      {
        title: "Bad",
        language: "typescript",
        code: `// error — props destructured in parameter list
const MyComponent = ({ name, onClick }: Props) => {
  return <button onClick={onClick}>{name}</button>;
};`,
      },
      {
        title: "Good",
        language: "typescript",
        code: `// correct — destructure inside the body
const MyComponent = (props: Props) => {
  const { name, onClick } = props;
  return <button onClick={onClick}>{name}</button>;
};`,
      },
    ],
    notes: [
      "Applies to all function components and hook files.",
      "Event handler params (e.g., (event: Event) => {}) are exempt.",
    ],
  },
  {
    name: "kalortech/file-separation",
    description:
      "Enforces correct file organization. Types must live in .types.ts files, constants in .constants.ts, and utility functions in .utils.ts. Prevents mixing concerns in the same file.",
    examples: [
      {
        title: "Bad — type declared inside component file",
        language: "typescript",
        code: `// ContactsPage.tsx — error: type declared here
interface ContactRow {
  id: string;
  name: string;
}

export const ContactsPage = () => { ... };`,
      },
      {
        title: "Good — type in sibling .types.ts",
        language: "typescript",
        code: `// ContactsPage.types.ts
export interface ContactRow {
  id: string;
  name: string;
}

// ContactsPage.tsx
import type { ContactRow } from "./ContactsPage.types";`,
      },
    ],
  },
  {
    name: "kalortech/no-inline-function-props",
    description:
      "Bans inline arrow functions as JSX props. All handlers must be extracted as named useCallback hooks declared before the return block.",
    examples: [
      {
        title: "Bad",
        language: "typescript",
        code: `// error — inline function as prop
return <Button onClick={() => deleteItem(id)} />;`,
      },
      {
        title: "Good",
        language: "typescript",
        code: `// correct — named handler with useCallback
const onDeleteHandler = useCallback(() => deleteItem(id), [id]);
return <Button onClick={onDeleteHandler} />;`,
      },
    ],
    notes: [
      "All event handlers must follow the on[Action]Handler naming convention.",
      "Always memoize with useCallback.",
    ],
  },
  {
    name: "kalortech/no-jsx-outside-return",
    description:
      "Bans JSX variable assignments outside the return statement. JSX should only appear inside the return block or in dedicated component files.",
    examples: [
      {
        title: "Bad",
        language: "typescript",
        code: `// error — JSX assigned to a variable before return
const content = <div className={styles.wrapper}>...</div>;
return content;`,
      },
      {
        title: "Good",
        language: "typescript",
        code: `// correct — JSX only in return
return (
  <div className={styles.wrapper}>
    ...
  </div>
);`,
      },
    ],
    notes: [
      "If a JSX fragment is reusable, extract it as a sibling component instead.",
    ],
  },
  {
    name: "kalortech/jsx-return-max-lines",
    description:
      "Warns when the JSX return block in a component exceeds 100 lines. Long return blocks indicate the component needs subcomponent extraction.",
    examples: [
      {
        title: "Action on warning",
        language: "typescript",
        code: `// When this rule warns, extract sections into sibling components:
// ContactsPage.tsx (before): 180-line return block
// ContactsPage.tsx (after): 40-line return composing subcomponents
import { ContactsFilters } from "./ContactsFilters";
import { ContactsTable } from "./ContactsTable";
import { ContactsEmptyState } from "./ContactsEmptyState";

return (
  <>
    <ContactsFilters ... />
    <ContactsTable ... />
    {isEmpty && <ContactsEmptyState />}
  </>
);`,
      },
    ],
    notes: [
      "This rule is a warning (not an error) — it flags components that likely need refactoring.",
    ],
  },
  {
    name: "kalortech/no-unpacked-form-props",
    description:
      "Enforces passing form values and errors as grouped objects, not as individual props spread across a component's prop list. Prevents ISP violations in form components.",
    examples: [
      {
        title: "Bad",
        language: "typescript",
        code: `// error — individual fields passed as props
<SenderFields
  senderName={values.senderName}
  senderNameError={errors.senderName}
  recipientEmail={values.recipientEmail}
  recipientEmailError={errors.recipientEmail}
  onChange={onChange}
/>`,
      },
      {
        title: "Good",
        language: "typescript",
        code: `// correct — grouped values and errors objects
const senderValues = { senderName, recipientEmail };
const senderErrors = {
  senderName: errors.senderName,
  recipientEmail: errors.recipientEmail,
};

<SenderFields
  values={senderValues}
  errors={senderErrors}
  onChange={onChange}
/>`,
      },
    ],
  },
];
