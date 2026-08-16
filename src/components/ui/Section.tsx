import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function Section({
  id,
  kicker,
  title,
  index,
  actions,
  children,
  className,
}: {
  id: string;
  kicker?: string;
  title?: string;
  index?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 md:py-32", className)}>
      <Container>
        {(kicker || title || actions) && (
          <Reveal className="mb-8 md:mb-16">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
              <div>
                {kicker && (
                  <p className="mb-3 flex items-center gap-3 font-sans text-xs font-medium tracking-[0.16em] uppercase">
                    {index && <span className="text-secondary">{index}</span>}
                    <span className="h-px w-8 bg-linear-to-r from-accent to-secondary" />
                    <span className="text-accent">{kicker}</span>
                  </p>
                )}
                {title && (
                  <h2 className="font-display text-[2rem] leading-tight font-semibold tracking-tight text-text md:text-5xl">
                    {title}
                  </h2>
                )}
              </div>
              {actions}
            </div>
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
