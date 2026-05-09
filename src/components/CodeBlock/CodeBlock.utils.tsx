import cn from "classnames";

import styles from "./CodeBlock.module.scss";
import type { HighlightRenderProps } from "./CodeBlock.types";

export const renderHighlight = (renderProps: HighlightRenderProps) => {
  const { className, style, tokens, getLineProps, getTokenProps } = renderProps;
  return (
    <pre
      className={cn(className, styles.pre)}
      style={{ ...style, background: "transparent" }}
    >
      {tokens.map((line, lineIndex) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={lineIndex} {...(getLineProps({ line }) as Record<string, string>)}>
          {line.map((token, tokenIndex) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={tokenIndex} {...(getTokenProps({ token }) as Record<string, string>)} />
          ))}
        </div>
      ))}
    </pre>
  );
};
