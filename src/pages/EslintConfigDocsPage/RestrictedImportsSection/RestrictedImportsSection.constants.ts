export interface RestrictedImport {
  library: string;
  replacement: string;
}

export const RESTRICTED_IMPORTS: RestrictedImport[] = [
  { library: "zustand", replacement: "React Context + Provider pattern" },
  { library: "@shadcn/ui", replacement: "antd + @kalortech/shared-components" },
  { library: "react-hook-form", replacement: "formik via @kalortech/shared-logic" },
  { library: "clsx", replacement: 'classnames (import cn from "classnames")' },
  { library: "tailwind-merge", replacement: 'classnames (import cn from "classnames")' },
  { library: "@mui/material", replacement: "antd" },
  { library: "sonner", replacement: "antd message API" },
  { library: "cmdk", replacement: "antd AutoComplete or Select" },
];
