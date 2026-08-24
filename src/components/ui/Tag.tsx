import { cn } from "@/lib/cn";

export function Tag({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "rounded-md border border-border px-2 py-0.5 font-mono text-[10px] tracking-[0.08em] text-muted uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
