export const IMPORT_EXAMPLE = `// Hooks
import {
  useFormik,
  useDisclosure,
  useDraftState,
  useArrayFieldEventHandlers,
  useCollapsed,
  useDebounce,
  useIsMobile,
  useNavigateWithScroll,
} from "@kalortech/shared-logic";

// Utils
import {
  executeQuery,
  preparePayload,
  generatePath,
  formatDate,
  formatDateTime,
  nowISOString,
  computeContentHash,
  createChangeEvent,
  refHandler,
} from "@kalortech/shared-logic";

// Testing utilities (import path: @kalortech/shared-logic/testing)
import {
  mockLocalStorage,
  createQueryClient,
  renderHookWithQueryClient,
} from "@kalortech/shared-logic/testing";`;
