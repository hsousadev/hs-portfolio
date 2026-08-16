import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-accent text-accent-on hover:bg-secondary",
  ghost:
    "border border-border text-text hover:border-secondary hover:text-secondary",
  link: "text-muted hover:text-accent px-0",
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ComponentProps<"a"> & { variant?: keyof typeof variants }) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 md:min-h-0",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
