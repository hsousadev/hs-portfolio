import { useEffect, useRef } from "react";
import { gsap, unlockGsap } from "@/lib/motion";
import { useLocale } from "@/i18n/locale";

export function EducationScene() {
  const { t } = useLocale();
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const clones = el.querySelectorAll<SVGGElement>("[data-clone]");
    const master = el.querySelector<SVGGElement>("[data-master]");
    const play = el.querySelector<SVGGElement>("[data-play]");
    const modules = el.querySelectorAll<SVGRectElement>("[data-module]");
    const fill = el.querySelector<SVGRectElement>("[data-growth]");
    const cursor = el.querySelector<SVGGElement>("[data-cursor]");

    el.querySelectorAll("[data-gsap]").forEach((node) => unlockGsap(node));

    const ctx = gsap.context(() => {
      if (master) {
        gsap.to(master, {
          y: -4,
          duration: 2.4,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      }

      clones.forEach((clone, index) => {
        gsap.fromTo(
          clone,
          { opacity: 0.2, x: index === 0 ? 12 : -12 },
          {
            opacity: 1,
            x: 0,
            duration: 1.8,
            yoyo: true,
            repeat: -1,
            delay: 0.35 + index * 0.25,
            ease: "sine.inOut",
          },
        );
      });

      if (play) {
        gsap.to(play, {
          scale: 1.18,
          duration: 0.9,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          svgOrigin: "200 104",
        });
      }

      modules.forEach((mod, index) => {
        gsap.fromTo(
          mod,
          { opacity: 0.35, scale: 0.75 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            repeat: -1,
            repeatDelay: 2.1,
            delay: index * 0.45,
            yoyo: true,
            ease: "power1.inOut",
            transformOrigin: "center center",
          },
        );
      });

      if (fill) {
        gsap.fromTo(
          fill,
          { attr: { width: 24 } },
          {
            attr: { width: 248 },
            duration: 4.6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          },
        );
      }

      if (cursor) {
        gsap.fromTo(
          cursor,
          { x: 0 },
          { x: 224, duration: 4.6, repeat: -1, yoyo: true, ease: "sine.inOut" },
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="relative h-full min-h-56">
      <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden>
        <g data-clone data-gsap className="whitelabel-card">
          <rect x="28" y="42" width="92" height="78" rx="10" />
          <rect x="40" y="54" width="48" height="8" rx="2" fill="#9A8BC4" opacity="0.7" />
          <rect x="40" y="70" width="68" height="5" rx="1" fill="#EEEAE2" opacity="0.28" />
          <rect x="40" y="82" width="54" height="5" rx="1" fill="#EEEAE2" opacity="0.18" />
        </g>

        <g data-clone data-gsap className="whitelabel-card">
          <rect x="280" y="42" width="92" height="78" rx="10" />
          <rect x="292" y="54" width="48" height="8" rx="2" fill="#6EAF95" opacity="0.75" />
          <rect x="292" y="70" width="68" height="5" rx="1" fill="#EEEAE2" opacity="0.28" />
          <rect x="292" y="82" width="54" height="5" rx="1" fill="#EEEAE2" opacity="0.18" />
        </g>

        <g data-master data-gsap>
          <rect
            x="142"
            y="28"
            width="116"
            height="96"
            rx="12"
            fill="rgb(22 22 20 / 0.92)"
            stroke="#9A8BC4"
            strokeWidth="1.2"
          />
          <rect x="158" y="44" width="56" height="9" rx="2" fill="#9A8BC4" />
          <rect x="158" y="62" width="84" height="5" rx="1" fill="#EEEAE2" opacity="0.35" />
          <rect x="158" y="74" width="70" height="5" rx="1" fill="#EEEAE2" opacity="0.2" />
          <g data-play>
            <circle cx="200" cy="104" r="11" fill="#6EAF95" />
            <path d="M197 99 L207 104 L197 109 Z" fill="#10100E" />
          </g>
        </g>

        <path
          d="M74 148 L326 148"
          fill="none"
          stroke="rgb(154 139 196 / 0.28)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
        />

        {[74, 137, 200, 263, 326].map((x) => (
          <rect
            key={x}
            data-module
            x={x - 4}
            y="144"
            width="8"
            height="8"
            fill="#9A8BC4"
          />
        ))}

        <rect
          x="76"
          y="166"
          width="248"
          height="8"
          rx="4"
          fill="rgb(46 46 40 / 0.9)"
        />
        <rect
          data-growth
          x="76"
          y="166"
          width="24"
          height="8"
          rx="4"
          fill="#9A8BC4"
        />
        <g data-cursor data-gsap>
          <circle cx="100" cy="170" r="5" fill="#EEEAE2" />
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-x-4 top-4 flex justify-between text-[10px] tracking-[0.16em] text-muted uppercase md:inset-x-6">
        <span>
          <span className="block font-display text-sm text-accent">
            {t.highlights.template}
          </span>
          {t.highlights.whitelabel}
        </span>
        <span className="text-right">
          <span className="block font-display text-sm text-secondary">
            {t.highlights.junior}
            <span className="mx-1 text-muted">→</span>
            {t.highlights.mid}
          </span>
          {t.highlights.growth}
        </span>
      </div>
    </div>
  );
}
