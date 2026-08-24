import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "@/components/ui/icons";
import { reducedMotion } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function Carousel({
  children,
  itemClassName,
  autoPlay = false,
  interval = 5500,
  label,
}: {
  children: ReactNode;
  itemClassName?: string;
  autoPlay?: boolean;
  interval?: number;
  label: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const paused = useRef(false);
  const [active, setActive] = useState(0);
  const slides = Children.toArray(children);
  const count = slides.length;

  const go = useCallback(
    (index: number) => {
      const root = scroller.current;
      if (!root || count === 0) return;
      const next = (index + count) % count;
      const card = root.children[next] as HTMLElement | undefined;
      if (!card) return;
      root.scrollTo({
        left: card.offsetLeft,
        behavior: reducedMotion() ? "auto" : "smooth",
      });
    },
    [count],
  );

  useEffect(() => {
    const root = scroller.current;
    if (!root) return;

    const onScroll = () => {
      const cards = [...root.children] as HTMLElement[];
      let best = 0;
      let dist = Infinity;
      cards.forEach((card, index) => {
        const delta = Math.abs(card.offsetLeft - root.scrollLeft);
        if (delta < dist) {
          dist = delta;
          best = index;
        }
      });
      activeRef.current = best;
      setActive(best);
    };

    root.addEventListener("scroll", onScroll, { passive: true });
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!autoPlay || count < 2 || reducedMotion()) return;

    const id = window.setInterval(() => {
      if (paused.current) return;
      go(activeRef.current + 1);
    }, interval);

    return () => window.clearInterval(id);
  }, [autoPlay, count, go, interval]);

  if (count === 0) return null;

  return (
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
        ref={scroller}
        className="carousel-scroll -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-1 sm:-mx-6 sm:px-6 md:mx-0 md:px-0"
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "h-auto shrink-0 snap-start self-stretch",
              itemClassName ?? "w-[min(82vw,22rem)] md:w-[calc(50%-0.5rem)]",
            )}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} / ${count}`}
          >
            <div className="h-full">{slide}</div>
          </div>
        ))}
      </div>

      {count > 1 && (
        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5" aria-hidden>
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`${index + 1}`}
                onClick={() => go(index)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  index === active
                    ? "w-6 bg-text"
                    : "w-1.5 bg-border hover:bg-muted",
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => go(active - 1)}
              className="flex size-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-text hover:text-text md:size-10"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Próximo"
              onClick={() => go(active + 1)}
              className="flex size-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-text hover:text-text md:size-10"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
