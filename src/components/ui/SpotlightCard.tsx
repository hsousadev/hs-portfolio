import { useEffect, useRef, type ReactNode } from "react";
import type { ExperienceItem } from "@/content/experience";
import { gsap, unlockGsap } from "@/lib/motion";
import { useLocale } from "@/i18n/locale";
import { ArrowUpRight } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/cn";

export function SpotlightCard({
  role,
  badge,
  chip,
  kicker,
  tape,
  hud,
  visual,
  reverse = false,
}: {
  role: ExperienceItem;
  badge: string;
  chip: string;
  kicker: string;
  tape: string[];
  hud: ReactNode;
  visual: ReactNode;
  reverse?: boolean;
}) {
  const { locale, t } = useLocale();
  const root = useRef<HTMLElement>(null);
  const [company, title] = role.title[locale].split(" · ");

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    el.querySelectorAll("[data-gsap]").forEach((node) => unlockGsap(node));

    const tapeEl = el.querySelector<HTMLElement>("[data-tape]");
    const glow = el.querySelector<HTMLElement>("[data-glow]");
    const scan = el.querySelector<HTMLElement>("[data-scan]");
    const chipEl = el.querySelector<HTMLElement>("[data-chip]");
    const dot = el.querySelector<HTMLElement>("[data-dot]");

    const ctx = gsap.context(() => {
      if (tapeEl) {
        gsap.fromTo(
          tapeEl,
          { xPercent: 0 },
          { xPercent: -50, duration: 16, repeat: -1, ease: "none" },
        );
      }

      if (glow) {
        gsap.to(glow, {
          opacity: 1,
          scale: 1.14,
          duration: 3.2,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      }

      if (scan) {
        gsap.fromTo(
          scan,
          { backgroundPosition: "0% -80%" },
          { backgroundPosition: "0% 180%", duration: 4.5, repeat: -1, ease: "none" },
        );
      }

      if (chipEl) {
        gsap.to(chipEl, {
          boxShadow: "0 0 22px rgb(160 144 212 / 0.35)",
          borderColor: "rgb(160 144 212 / 0.95)",
          duration: 1.2,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      }

      if (dot) {
        gsap.to(dot, {
          opacity: 0.25,
          scale: 1.6,
          duration: 0.55,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <article
      ref={root}
      className="spotlight relative overflow-hidden rounded-3xl border border-accent/35 bg-surface"
    >
      <div data-glow data-gsap className="spotlight-glow" aria-hidden />
      <div data-scan data-gsap className="spotlight-scan" aria-hidden />

      <div className="relative grid items-stretch lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div
          className={cn(
            "flex flex-col gap-5 p-6 md:gap-6 md:p-10",
            reverse && "lg:order-2",
          )}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 text-[11px] font-medium tracking-[0.16em] text-secondary uppercase">
              <span
                data-dot
                data-gsap
                className="spotlight-dot size-1.5 rounded-full bg-secondary"
              />
              {badge}
            </span>
            <span
              data-chip
              data-gsap
              className="spotlight-chip rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] tracking-[0.14em] text-accent uppercase"
            >
              {chip}
            </span>
          </div>

          <div>
            <p className="mb-2 text-xs tracking-[0.16em] text-muted uppercase">
              {role.period[locale]}
            </p>
            <h3 className="font-display text-3xl leading-tight font-semibold tracking-tight text-text md:text-5xl">
              {company}
            </h3>
            <p className="mt-2 font-display text-lg text-accent md:text-2xl">
              {title}
            </p>
            <p className="mt-1 text-sm text-secondary">{kicker}</p>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
            {role.description[locale]}
          </p>

          {hud}

          <div className="mt-auto flex flex-col items-start gap-4 pt-2">
            {role.tags && (
              <div className="flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}
            {role.url && (
              <Button
                href={role.url}
                variant="ghost"
                target="_blank"
                rel="noreferrer"
                className="px-4"
              >
                {t.highlights.company}
                <ArrowUpRight size={16} />
              </Button>
            )}
          </div>
        </div>

        <div
          className={cn(
            "relative min-h-64 overflow-hidden border-t border-accent/15 p-4 pb-12 md:min-h-80 md:p-6 md:pb-14 lg:border-t-0",
            reverse ? "lg:order-1 lg:border-r lg:border-l-0" : "lg:border-l",
          )}
        >
          {visual}
          <div className="spotlight-tape" aria-hidden>
            <div data-tape data-gsap className="spotlight-tape-track">
              {[...tape, ...tape].map((code, index) => (
                <span key={`${code}-${index}`}>{code}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function HudCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border/80 bg-bg/50 px-2 py-2">
      <p className="text-[9px] text-muted">{label}</p>
      <p className="mt-0.5 font-display text-sm tracking-normal text-text normal-case">
        {value}
      </p>
    </div>
  );
}
