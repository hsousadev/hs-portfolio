import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-accent text-accent-on hover:bg-text hover:text-bg",
  ghost: "border border-text/80 text-text hover:bg-text hover:text-bg",
  link: "text-muted hover:text-text px-0",
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ComponentProps<"a"> & { variant?: keyof typeof variants }) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-2.5 font-mono text-[11px] font-medium tracking-[0.16em] uppercase transition-colors duration-200 md:min-h-0",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
