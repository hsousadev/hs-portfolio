import { useEffect, useRef } from "react";
import { gsap, unlockGsap } from "@/lib/motion";
import { placeOnPath } from "@/lib/svg-path";
import { useLocale } from "@/i18n/locale";

const FLOW_D = "M56 92 C 120 28, 160 156, 200 92 C 240 28, 280 156, 344 92";

export function FinanceScene() {
  const { t } = useLocale();
  const root = useRef<HTMLDivElement>(null);

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
        <path
          data-flow-path
          className="capital-flow"
          d={FLOW_D}
          stroke="#9A8BC4"
        />

        {[
          { x: 56, fill: "#9A8BC4" },
          { x: 200, fill: "#EEEAE2" },
          { x: 344, fill: "#6EAF95" },
        ].map((node) => (
          <g key={node.x} transform={`translate(${node.x} 92)`}>
            <circle data-gate-ring className="ping-wave" r="16" />
            <circle r="6" fill={node.fill} />
          </g>
        ))}

        <g data-shield data-gsap>
          <path
            d="M200 74 L214 80 V94 C214 102 200 110 200 110 C200 110 186 102 186 94 V80 Z"
            fill="rgb(16 16 14 / 0.9)"
            stroke="#9A8BC4"
            strokeWidth="1.2"
          />
          <path
            d="M196 93 L199 96 L206 87"
            fill="none"
            stroke="#6EAF95"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {[0, 1, 2].map((index) => (
          <g key={index} data-packet>
            <rect
              x="-4"
              y="-4"
              width="8"
              height="8"
              rx="2"
              fill="#EEEAE2"
              stroke="#9A8BC4"
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
