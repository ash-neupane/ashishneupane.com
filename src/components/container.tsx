import type { ElementType, ReactNode } from "react";

/**
 * The one centered content column. Single source of truth for page width +
 * horizontal gutter, so the header, breadcrumb, pages, and the embedded report
 * all share identical left/right margins. Width = the `--container-content`
 * theme token (`max-w-content`); never hard-code the value at call sites.
 */
export function Container({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={`mx-auto w-full max-w-content px-6 ${className}`}>
      {children}
    </Tag>
  );
}
