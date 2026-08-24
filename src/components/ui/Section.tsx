import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { FadeRule } from "./FadeRule";
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
    <section id={id} className={cn("scroll-mt-24 py-16 md:py-28", className)}>
      <Container>
        {(kicker || title || actions) && (
          <Reveal className="relative mb-8 pb-6 md:mb-14 md:pb-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
              <div>
                {kicker && (
                  <p className="mb-3 flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                    {index && <span className="text-text">{index}</span>}
                    <span>{kicker}</span>
                  </p>
                )}
                {title && (
                  <h2 className="font-display text-[2rem] leading-[1.05] font-semibold tracking-tight text-text md:text-5xl">
                    {title}
                  </h2>
                )}
              </div>
              {actions}
            </div>
            <FadeRule position="bottom" />
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
