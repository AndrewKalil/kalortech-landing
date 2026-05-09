import { useCallback, useState } from "react";
import cn from "classnames";
import { Check, Copy } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";

import styles from "./CodeBlock.module.scss";
import { renderHighlight } from "./CodeBlock.utils";
import type { CodeBlockProps } from "./CodeBlock.types";

export const CodeBlock = (props: CodeBlockProps) => {
  const { code, language = "typescript" } = props;
  const [copied, setCopied] = useState(false);

  const onCopyHandler = useCallback(async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  return (
    <div className={styles.root}>
      <button
        className={cn(styles.copyBtn, copied && styles.copied)}
        onClick={onCopyHandler}
        aria-label="Copy code"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? "Copied" : "Copy"}
      </button>
      <Highlight theme={themes.vsDark} code={code.trim()} language={language}>
        {renderHighlight}
      </Highlight>
    </div>
  );
};
