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
        "rounded-full border border-border px-2 py-0.5 text-[11px] text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
