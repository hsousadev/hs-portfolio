import { useCallback, useEffect, useRef, useState } from "react";
import { portraits } from "@/content/portraits";
import { useLocale } from "@/i18n/locale";
import { cn } from "@/lib/cn";

const HOLD_MS = 5200;
const SLIDE_MS = 950;
const COUNT = portraits.length;

export function PortraitReel() {
  const { locale } = useLocale();
  const stage = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const busy = useRef(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [slot, setSlot] = useState<Record<number, string>>({ 0: "is-current" });
  const [progressKey, setProgressKey] = useState(0);

  const go = useCallback((next: number) => {
    if (busy.current) return;
    const wrapped = ((next % COUNT) + COUNT) % COUNT;
    const current = indexRef.current;
    if (wrapped === current) return;

    busy.current = true;
    const forward = wrapped === (current + 1) % COUNT;
    const wait = forward ? "is-wait-right" : "is-wait-left";
    const exit = forward ? "is-exit-left" : "is-exit-right";

    setSlot({
      [current]: "is-current",
      [wrapped]: wait,
    });

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setSlot({
          [current]: exit,
          [wrapped]: "is-enter",
        });
      });
    });

    window.setTimeout(() => {
      indexRef.current = wrapped;
      setActive(wrapped);
      setSlot({ [wrapped]: "is-current" });
      setProgressKey((value) => value + 1);
      busy.current = false;
    }, SLIDE_MS);
  }, []);

  useEffect(() => {
    const root = stage.current;
    if (!root) return;

    const syncPause = () => {
      const hidden = document.hidden;
      const rect = root.getBoundingClientRect();
      const inView =
        rect.bottom > 0 && rect.top < window.innerHeight;
      setPaused(hidden || !inView);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        setPaused(document.hidden || !entry.isIntersecting);
      },
      { threshold: 0.1 },
    );
    io.observe(root);
    document.addEventListener("visibilitychange", syncPause);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", syncPause);
    };
  }, []);

  return (
    <figure className="relative">
      <div
        ref={stage}
        role="img"
        aria-label={portraits[active].alt[locale]}
        className="relative aspect-4/5 cursor-pointer overflow-hidden rounded-3xl bg-elevated ring-1 ring-border"
        onClick={() => go(indexRef.current + 1)}
      >
        {portraits.map((shot, index) => (
          <div
            key={shot.id}
            className={cn("portrait-slide", slot[index])}
          >
            <img
              src={shot.src}
              alt=""
              className={cn("h-full w-full object-cover", shot.object)}
              draggable={false}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-bg/80 via-bg/25 to-transparent px-5 pt-16 pb-5">
          <p className="font-mono text-[10px] tracking-[0.22em] text-secondary uppercase">
            {String(active + 1).padStart(2, "0")} / {String(COUNT).padStart(2, "0")}
          </p>
          <p className="font-display mt-1 text-lg text-text">
            {portraits[active].label[locale]}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="h-px flex-1 overflow-hidden bg-border">
          <div
            key={progressKey}
            className={cn("portrait-progress h-full bg-linear-to-r from-accent to-secondary", paused && "is-paused")}
            style={{ animationDuration: `${HOLD_MS}ms` }}
            onAnimationEnd={() => go(indexRef.current + 1)}
          />
        </div>
        <div className="flex gap-1.5">
          {portraits.map((shot, index) => (
            <button
              key={shot.id}
              type="button"
              aria-label={shot.label[locale]}
              onClick={() => go(index)}
              className={cn(
                "size-2 rounded-full transition-colors",
                index === active ? "bg-accent" : "bg-border hover:bg-secondary",
              )}
            />
          ))}
        </div>
      </div>
    </figure>
  );
}
