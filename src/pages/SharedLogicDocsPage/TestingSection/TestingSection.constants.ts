import type { DocEntry } from "~types";

export const TESTING_ENTRIES: DocEntry[] = [
  {
    name: "mockLocalStorage",
    description:
      "Sets up an in-memory localStorage mock for tests. Call setup() in beforeEach and teardown() in afterEach.",
    signature: "mockLocalStorage: { setup: () => void; teardown: () => void }",
    examples: [
      {
        language: "typescript",
        code: `import { mockLocalStorage } from "@kalortech/shared-logic/testing";

describe("useCollapsed", () => {
  beforeEach(() => mockLocalStorage.setup());
  afterEach(() => mockLocalStorage.teardown());

  it("reads initial state from localStorage", () => {
    localStorage.setItem("sidebar_collapsed", "true");
    const { result } = renderHook(() => useCollapsed());
    expect(result.current.isCollapsed).toBe(true);
  });
});`,
      },
    ],
  },
  {
    name: "createQueryClient",
    description:
      "Creates a QueryClient with test-friendly defaults: retry: false, gcTime: 0.",
    signature: "createQueryClient(options?: QueryClientConfig): QueryClient",
    examples: [
      {
        language: "typescript",
        code: `import { createQueryClient } from "@kalortech/shared-logic/testing";

const queryClient = createQueryClient();
// retry: false, gcTime: 0 — no flakiness in tests`,
      },
    ],
  },
  {
    name: "createQueryClientWrapper",
    description:
      "Returns a React wrapper component that provides a QueryClient context. Pass to renderHook's wrapper option.",
    signature: "createQueryClientWrapper(queryClient?: QueryClient): React.ComponentType",
    examples: [
      {
        language: "typescript",
        code: `import { renderHook } from "@testing-library/react";
import { createQueryClientWrapper } from "@kalortech/shared-logic/testing";

const wrapper = createQueryClientWrapper();
const { result } = renderHook(() => useMyApiHook(), { wrapper });`,
      },
    ],
  },
  {
    name: "renderHookWithQueryClient",
    description:
      "Convenience wrapper around renderHook that automatically injects a QueryClient provider.",
    signature:
      "renderHookWithQueryClient<T>(renderCallback: () => T, options?: RenderHookOptions & { queryClient?: QueryClient }): RenderHookResult<T, unknown>",
    examples: [
      {
        language: "typescript",
        code: `import { renderHookWithQueryClient } from "@kalortech/shared-logic/testing";

const { result } = renderHookWithQueryClient(() => useReportsApi({ page: 1 }));

// Share a client across multiple hooks
const queryClient = createQueryClient();
const { result: a } = renderHookWithQueryClient(() => useContacts(), { queryClient });
const { result: b } = renderHookWithQueryClient(() => useContactsCount(), { queryClient });`,
      },
    ],
  },
];
