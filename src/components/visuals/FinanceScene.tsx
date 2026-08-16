import { useEffect, useRef } from "react";
import { gsap, unlockGsap } from "@/lib/motion";
import { placeOnPath } from "@/lib/svg-path";
import { useLocale } from "@/i18n/locale";
import { useSpotlightId } from "@/lib/uid";

const FLOW_D = "M56 92 C 120 28, 160 156, 200 92 C 240 28, 280 156, 344 92";

export function FinanceScene() {
  const { t } = useLocale();
  const root = useRef<HTMLDivElement>(null);
  const uid = useSpotlightId("fidc");

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const path = el.querySelector<SVGPathElement>("[data-flow-path]");
    const packets = el.querySelectorAll<SVGGElement>("[data-packet]");
    const shield = el.querySelector<SVGGElement>("[data-shield]");
    const bars = el.querySelectorAll<SVGRectElement>("[data-bar]");
    const gates = el.querySelectorAll<SVGCircleElement>("[data-gate-ring]");

    if (!path) return;

    el.querySelectorAll("[data-gsap]").forEach((node) => unlockGsap(node));

    const ctx = gsap.context(() => {
      packets.forEach((packet, index) => {
        const flight = { t: index / packets.length };
        placeOnPath(packet, path, flight.t, 0);

        gsap.to(flight, {
          t: flight.t + 1,
          duration: 5.4,
          repeat: -1,
          ease: "none",
          onUpdate: () => placeOnPath(packet, path, flight.t, 0),
        });
      });

      gsap.to(path, {
        strokeDashoffset: -36,
        duration: 1.4,
        repeat: -1,
        ease: "none",
      });

      if (shield) {
        gsap.to(shield, {
          scale: 1.12,
          duration: 1.1,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          svgOrigin: "200 92",
        });
      }

      gates.forEach((gate, index) => {
        const r = Number(gate.getAttribute("r"));
        gsap.fromTo(
          gate,
          { attr: { r: r * 0.82 }, opacity: 0.8 },
          {
            attr: { r: r * 1.45 },
            opacity: 0,
            duration: 2.2,
            repeat: -1,
            delay: index * 0.65,
            ease: "power1.out",
          },
        );
      });

      bars.forEach((bar, index) => {
        const base = Number(bar.getAttribute("data-h"));
        gsap.fromTo(
          bar,
          { attr: { height: base * 0.45, y: 168 - base * 0.45 } },
          {
            attr: { height: base, y: 168 - base },
            duration: 1.6 + (index % 3) * 0.25,
            yoyo: true,
            repeat: -1,
            delay: index * 0.12,
            ease: "sine.inOut",
          },
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const labels = [
    { x: 56, key: "comercial" as const },
    { x: 200, key: "compliance" as const },
    { x: 344, key: "credit" as const },
  ];

  const heights = [28, 46, 34, 58, 40, 52, 36, 62, 44, 30, 54, 38];

  return (
    <div ref={root} className="relative h-full min-h-56">
      <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id={`${uid}-grad`} x1="56" y1="92" x2="344" y2="92">
            <stop offset="0%" stopColor="#A090D4" />
            <stop offset="50%" stopColor="#F3F1EB" />
            <stop offset="100%" stopColor="#7BC9A6" />
          </linearGradient>
          <filter id={`${uid}-glow`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          data-flow-path
          className="capital-flow"
          d={FLOW_D}
          stroke={`url(#${uid}-grad)`}
        />

        {[
          { x: 56, fill: "#A090D4" },
          { x: 200, fill: "#F3F1EB" },
          { x: 344, fill: "#7BC9A6" },
        ].map((node) => (
          <g key={node.x} transform={`translate(${node.x} 92)`}>
            <circle data-gate-ring className="ping-wave" r="16" />
            <circle r="7" fill={node.fill} filter={`url(#${uid}-glow)`} />
          </g>
        ))}

        <g data-shield data-gsap>
          <path
            d="M200 74 L214 80 V94 C214 102 200 110 200 110 C200 110 186 102 186 94 V80 Z"
            fill="rgb(10 10 11 / 0.85)"
            stroke="#A090D4"
            strokeWidth="1.4"
          />
          <path
            d="M196 93 L199 96 L206 87"
            fill="none"
            stroke="#7BC9A6"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {[0, 1, 2].map((index) => (
          <g key={index} data-packet filter={`url(#${uid}-glow)`}>
            <rect
              x="-5"
              y="-5"
              width="10"
              height="10"
              rx="2"
              fill="#F3F1EB"
              stroke="#A090D4"
              strokeWidth="1"
            />
          </g>
        ))}

        {heights.map((height, index) => (
          <rect
            key={index}
            data-bar
            data-h={height}
            className={index % 2 === 0 ? "fidc-bar" : "fidc-bar-alt"}
            x={48 + index * 26}
            y={168 - height}
            width="14"
            height={height}
            rx="2"
          />
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-x-4 top-4 flex justify-between text-[10px] tracking-[0.16em] text-muted uppercase md:inset-x-6">
        {labels.map((label) => (
          <span
            key={label.key}
            className={label.x === 344 ? "text-right" : undefined}
          >
            <span
              className={
                label.x === 200
                  ? "block font-display text-sm text-text"
                  : label.x === 344
                    ? "block font-display text-sm text-secondary"
                    : "block font-display text-sm text-accent"
              }
            >
              {t.highlights[label.key]}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
