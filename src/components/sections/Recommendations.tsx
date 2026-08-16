import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { recommendations } from "@/content/recommendations";
import { useLocale } from "@/i18n/locale";
import { gsap, unlockGsap } from "@/lib/motion";
import { ChevronLeft, ChevronRight } from "@/components/ui/icons";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

const INTERVAL = 6500;
const COUNT = recommendations.length;

export function Recommendations() {
  const { locale, t } = useLocale();
  const stage = useRef<HTMLDivElement>(null);
  const startRef = useRef(0);
  const pageSizeRef = useRef(1);
  const busy = useRef(false);
  const paused = useRef(false);
  const [start, setStart] = useState(0);
  const [pageSize, setPageSize] = useState(1);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => {
      const next = mq.matches ? 2 : 1;
      pageSizeRef.current = next;
      setPageSize(next);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const visible = Array.from(
    { length: pageSize },
    (_, index) => recommendations[(start + index) % COUNT],
  );

  const animateTo = useCallback((nextStart: number) => {
    if (busy.current) return;
    const wrapped = ((nextStart % COUNT) + COUNT) % COUNT;
    if (wrapped === startRef.current) return;

    const root = stage.current;
    const cards = root?.querySelectorAll<HTMLElement>("[data-rec-card]");

    const commit = () => {
      startRef.current = wrapped;
      setStart(wrapped);
    };

    if (!cards || cards.length === 0) {
      commit();
      return;
    }

    busy.current = true;
    cards.forEach((card) => unlockGsap(card));
    gsap.to(cards, {
      opacity: 0,
      y: 28,
      duration: 0.42,
      stagger: 0.06,
      ease: "power2.in",
      overwrite: "auto",
      onComplete: commit,
    });
  }, []);

  useLayoutEffect(() => {
    const root = stage.current;
    if (!root) return;
    const cards = root.querySelectorAll<HTMLElement>("[data-rec-card]");
    if (cards.length === 0) {
      busy.current = false;
      return;
    }

    cards.forEach((card) => unlockGsap(card));
    gsap.fromTo(
      cards,
      { opacity: 0, y: -22 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: "power3.out",
        overwrite: "auto",
        onComplete: () => {
          busy.current = false;
        },
      },
    );
  }, [start, pageSize]);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (paused.current || busy.current) return;
      animateTo(startRef.current + pageSizeRef.current);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [animateTo]);

  return (
    <Section id="recommendations" index="06" kicker={t.recs.kicker} title={t.recs.title}>
      <div
        className="relative"
        onMouseEnter={() => {
          paused.current = true;
        }}
        onMouseLeave={() => {
          paused.current = false;
        }}
        onTouchStart={() => {
          paused.current = true;
        }}
        onTouchEnd={() => {
          window.setTimeout(() => {
            paused.current = false;
          }, 2400);
        }}
      >
        <div
          ref={stage}
          className="grid items-stretch gap-4 md:grid-cols-2"
          role="region"
          aria-roledescription="carousel"
          aria-label={t.recs.title}
        >
          {visible.map((item) => (
            <article
              key={item.id}
              data-rec-card
              className="flex min-h-[17rem] flex-col gap-6 rounded-2xl border border-border bg-surface p-5 md:min-h-[18.5rem] md:p-8"
            >
              <p className="text-[0.95rem] leading-relaxed text-text md:text-base">
                “{item.quote[locale]}”
              </p>
              <div className="mt-auto flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-text">{item.name}</p>
                  <p className="text-xs text-muted">{item.role[locale]}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5" aria-hidden>
            {recommendations.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`${index + 1}`}
                onClick={() => animateTo(index)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  index === start
                    ? "w-6 bg-accent"
                    : "w-1.5 bg-border hover:bg-secondary",
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => animateTo(startRef.current - pageSizeRef.current)}
              className="flex size-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent md:size-10"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Próximo"
              onClick={() => animateTo(startRef.current + pageSizeRef.current)}
              className="flex size-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-secondary hover:text-secondary md:size-10"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
