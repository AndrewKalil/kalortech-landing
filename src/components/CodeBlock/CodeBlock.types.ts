import type { CSSProperties } from "react";
import type { Token } from "prism-react-renderer";

export interface CodeBlockProps {
  code: string;
  language?: string;
}

export interface HighlightRenderProps {
  className: string;
  style: CSSProperties;
  tokens: Token[][];
  getLineProps: (options: { line: Token[] }) => Record<string, unknown>;
  getTokenProps: (options: { token: Token }) => Record<string, unknown>;
}
