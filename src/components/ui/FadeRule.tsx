import { cn } from "@/lib/cn";

export function FadeRule({
  position = "top",
  className,
}: {
  position?: "top" | "bottom";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "line-fade-x",
        position === "top" ? "top-0" : "bottom-0",
        className,
      )}
      aria-hidden
    />
  );
}

export function FadeFrame({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden
    >
      <span className="line-fade-x top-0" />
      <span className="line-fade-x bottom-0" />
    </div>
  );
}

export function FadeDivider({ className }: { className?: string }) {
  return (
    <div className={cn("relative py-8 md:py-12", className)} aria-hidden>
      <span className="line-fade-x top-1/2 -translate-y-1/2" />
    </div>
  );
}
