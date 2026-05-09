import type { DocEntry } from "~types";

export const UTILS_ENTRIES: DocEntry[] = [
  {
    name: "executeQuery",
    description:
      "Awaits a Supabase query builder, throws on error, and auto-camelizes keys. You provide the return type T.",
    signature:
      "executeQuery<T>(query: PromiseLike<{ data: unknown; error: unknown }>, options?: { camelize?: boolean }): Promise<T>",
    params: [
      { name: "query", type: "PromiseLike<{ data; error }>", required: true, description: "Supabase query builder." },
      {
        name: "options.camelize",
        type: "boolean",
        required: false,
        defaultValue: "true",
        description: "Set false to skip camelizeKeys.",
      },
    ],
    returnType: "Promise<T>",
    examples: [
      {
        title: "Read",
        language: "typescript",
        code: `import { executeQuery } from "@kalortech/shared-logic";

const contacts = await executeQuery<Contact[]>(
  supabase.from("contacts").select("*")
);`,
      },
      {
        title: "Write",
        language: "typescript",
        code: `const contact = await executeQuery<Contact>(
  supabase
    .from("contacts")
    .insert(preparePayload(payload))
    .select()
    .single()
);`,
      },
    ],
    notes: ["Throws Error with the Supabase error message — never returns { data, error }."],
  },
  {
    name: "preparePayload",
    description:
      "Decamelizes an object's keys for writing to the DB. Use before every Supabase insert/update.",
    signature: "preparePayload(payload: object, options?: { camelize?: boolean }): object",
    params: [
      { name: "payload", type: "object", required: true, description: "camelCase object from the app." },
      {
        name: "options.camelize",
        type: "boolean",
        required: false,
        defaultValue: "true",
        description: "Set false to skip decamelization.",
      },
    ],
    returnType: "object",
    examples: [
      {
        language: "typescript",
        code: `import { preparePayload } from "@kalortech/shared-logic";

// { firstName: "John" } → { first_name: "John" }
const row = preparePayload({ firstName: "John", lastName: "Doe" });`,
      },
    ],
  },
  {
    name: "generatePath",
    description:
      "Typed wrapper around react-router-dom's generatePath, with an optional third argument for query string params.",
    signature:
      "generatePath(pattern: string, params?: Record<string, string | number>, query?: Record<string, string | number | boolean | undefined>): string",
    params: [
      { name: "pattern", type: "string", required: true, description: "Route pattern with :param segments." },
      { name: "params", type: "Record<string, string | number>", required: false, description: "Path parameters." },
      { name: "query", type: "Record<string, string | number | boolean | undefined>", required: false, description: "Query string parameters. undefined values are omitted." },
    ],
    returnType: "string",
    examples: [
      {
        language: "typescript",
        code: `import { generatePath } from "@kalortech/shared-logic";

generatePath("/contacts/:id", { id: "123" });
// → "/contacts/123"

generatePath("/reports", undefined, { status: "active", page: 1 });
// → "/reports?status=active&page=1"`,
      },
    ],
  },
  {
    name: "formatDate",
    description: 'Formats a date string or Date object to "Mon DD, YYYY" (e.g., "Mar 21, 2024").',
    signature: "formatDate(value: string | Date): string",
    returnType: "string",
    examples: [
      {
        language: "typescript",
        code: `import { formatDate } from "@kalortech/shared-logic";

formatDate("2024-03-21T14:00:00Z");  // → "Mar 21, 2024"
formatDate(new Date());              // → current date formatted`,
      },
    ],
  },
  {
    name: "formatDateTime",
    description: 'Formats a date string or Date object to "Mon DD, YYYY, H:MM AM/PM" (e.g., "Mar 21, 2024, 2:00 PM").',
    signature: "formatDateTime(value: string | Date): string",
    returnType: "string",
    examples: [
      {
        language: "typescript",
        code: `import { formatDateTime } from "@kalortech/shared-logic";

formatDateTime("2024-03-21T14:00:00Z");  // → "Mar 21, 2024, 2:00 PM"`,
      },
    ],
  },
  {
    name: "nowISOString",
    description: "Returns the current time as an ISO 8601 string.",
    signature: "nowISOString(): string",
    returnType: "string",
    examples: [
      {
        language: "typescript",
        code: `import { nowISOString } from "@kalortech/shared-logic";

const timestamp = nowISOString(); // → "2024-03-21T14:00:00.000Z"`,
      },
    ],
  },
  {
    name: "computeContentHash",
    description:
      "Computes a SHA-256 hash of a string using the Web Crypto API. Useful for change detection and cache busting.",
    signature: "computeContentHash(input: string): Promise<string>",
    returnType: "Promise<string> — 64-character hex string",
    examples: [
      {
        language: "typescript",
        code: `import { computeContentHash } from "@kalortech/shared-logic";

const hash = await computeContentHash(JSON.stringify(data));
// → "a3f1c2..." (64-char hex)`,
      },
    ],
  },
  {
    name: "formatBytes",
    description: "Converts a byte count to a human-readable string (e.g., '1.2 MB').",
    signature: "formatBytes(bytes: number, decimals?: number): string",
    params: [
      { name: "bytes", type: "number", required: true, description: "File size in bytes." },
      { name: "decimals", type: "number", required: false, defaultValue: "2", description: "Decimal places." },
    ],
    returnType: "string",
    examples: [
      {
        language: "typescript",
        code: `import { formatBytes } from "@kalortech/shared-logic";

formatBytes(1024);         // → "1 KB"
formatBytes(1572864, 1);   // → "1.5 MB"`,
      },
    ],
  },
  {
    name: "createChangeEvent",
    description:
      "Creates a Formik-compatible ChangeEvent from a plain { name, value } target. Used internally by useArrayFieldEventHandlers.",
    signature: "createChangeEvent<T>(target: Partial<T>): ChangeEvent<Element>",
    examples: [
      {
        language: "typescript",
        code: `import { createChangeEvent } from "@kalortech/shared-logic";

// Construct a synthetic change event for a custom input
const event = createChangeEvent({ name: "color", value: "#FF0000" });
onChange(event);`,
      },
    ],
  },
  {
    name: "createSyntheticEvent",
    description:
      "Wraps a native DOM Event in a React SyntheticEvent-compatible object. Foundation for the other create* helpers.",
    signature:
      "createSyntheticEvent<T extends Element, E extends Event>(event: E): SyntheticEvent<T, E>",
    examples: [
      {
        language: "typescript",
        code: `import { createSyntheticEvent } from "@kalortech/shared-logic";

const nativeEvent = new Event("change");
const syntheticEvent = createSyntheticEvent(nativeEvent);`,
      },
    ],
  },
  {
    name: "createFocusEvent",
    description: "Creates a React FocusEvent from a { target } options object. Used for custom inputs that need to trigger onFocus.",
    signature: "createFocusEvent<T>(options: { target: Partial<T> }): FocusEvent<Element>",
    examples: [
      {
        language: "typescript",
        code: `import { createFocusEvent } from "@kalortech/shared-logic";

const event = createFocusEvent({ target: { name: "email" } });
onFocus?.(event);`,
      },
    ],
  },
  {
    name: "createBlurEvent",
    description: "Creates a React FocusEvent (blur) from a { target } options object. Used for custom inputs that need to trigger onBlur.",
    signature: "createBlurEvent<T>(options: { target: Partial<T> }): FocusEvent<Element>",
    examples: [
      {
        language: "typescript",
        code: `import { createBlurEvent } from "@kalortech/shared-logic";

const event = createBlurEvent({ target: { name: "email" } });
onBlur(event);`,
      },
    ],
  },
  {
    name: "refHandler",
    description:
      "Assigns a ref value to a React ForwardedRef — handles both callback refs and object refs.",
    signature: "refHandler<T>(element: T | null, forwardRef: ForwardedRef<T>): void",
    params: [
      { name: "element", type: "T | null", required: true, description: "The DOM element or component instance." },
      { name: "forwardRef", type: "ForwardedRef<T>", required: true, description: "The forwarded ref from forwardRef()." },
    ],
    examples: [
      {
        language: "typescript",
        code: `import { forwardRef } from "react";
import { refHandler } from "@kalortech/shared-logic";

export const MyInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      ref={(el) => refHandler(el, ref)}
      {...props}
    />
  );
});`,
      },
    ],
  },
];
