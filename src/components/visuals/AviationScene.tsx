import { useEffect, useRef } from "react";
import { gsap, unlockGsap } from "@/lib/motion";
import { placeOnPath, pointOnPath } from "@/lib/svg-path";
import { useLocale } from "@/i18n/locale";

const PATH_D = "M48 168 C 110 40, 250 200, 352 52";

export function AviationScene() {
  const { t } = useLocale();
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const path = el.querySelector<SVGPathElement>("[data-flight-path]");
    const plane = el.querySelector<SVGGElement>("[data-plane]");
    const ghost = el.querySelector<SVGGElement>("[data-plane-ghost]");
    const orb = el.querySelector<SVGCircleElement>("[data-orb]");
    const sweep = el.querySelector<SVGGElement>("[data-sweep]");
    const rings = el.querySelectorAll<SVGCircleElement>("[data-ring]");
    const pings = el.querySelectorAll<SVGCircleElement>("[data-ping]");

    if (!path || !plane || !sweep) return;

    el.querySelectorAll("[data-gsap]").forEach((node) => unlockGsap(node));

    const ctx = gsap.context(() => {
      const flight = { t: 0 };
      placeOnPath(plane, path, 0);
      if (ghost) placeOnPath(ghost, path, -0.28);

      gsap.to(flight, {
        t: 1,
        duration: 7,
        repeat: -1,
        ease: "none",
        onUpdate: () => {
          placeOnPath(plane, path, flight.t);
          if (ghost) placeOnPath(ghost, path, flight.t - 0.28);
          if (orb) {
            const p = pointOnPath(path, flight.t);
            orb.setAttribute("cx", String(p.x));
            orb.setAttribute("cy", String(p.y));
          }
        },
      });

      const spin = { deg: 0 };
      gsap.to(spin, {
        deg: 360,
        duration: 5.5,
        repeat: -1,
        ease: "none",
        onUpdate: () => {
          sweep.setAttribute("transform", `rotate(${spin.deg} 200 110)`);
        },
      });

      rings.forEach((ring, index) => {
        const r = Number(ring.getAttribute("r"));
        gsap.fromTo(
          ring,
          { attr: { r: r * 0.78 }, opacity: 0.75 },
          {
            attr: { r: r * 1.32 },
            opacity: 0,
            duration: 2.8,
            repeat: -1,
            delay: index * 0.7,
            ease: "power1.out",
          },
        );
      });

      pings.forEach((ping, index) => {
        gsap.fromTo(
          ping,
          { attr: { r: 4 }, opacity: 0.85 },
          {
            attr: { r: 20 },
            opacity: 0,
            duration: 2.1,
            repeat: -1,
            delay: index * 0.55,
            ease: "power1.out",
          },
        );
      });

      gsap.to(path, {
        strokeDashoffset: -48,
        duration: 1.1,
        repeat: -1,
        ease: "none",
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="relative h-full min-h-56">
      <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden>
        <circle data-ring className="radar-ring radar-ring-a" cx="200" cy="110" r="36" />
        <circle data-ring className="radar-ring radar-ring-b" cx="200" cy="110" r="64" />
        <circle data-ring className="radar-ring radar-ring-c" cx="200" cy="110" r="94" />

        <g data-sweep className="radar-sweep">
          <path d="M200 110 L200 16 A94 94 0 0 1 286 48 Z" />
        </g>

        <path
          data-flight-path
          className="flight-route"
          d={PATH_D}
          stroke="#9A8BC4"
        />

        <g className="airport-ping" transform="translate(48 168)">
          <circle data-ping className="ping-wave" r="14" />
          <circle r="4.5" fill="#9A8BC4" />
        </g>
        <g className="airport-ping" transform="translate(230 128)">
          <circle data-ping className="ping-wave ping-wave-green" r="10" />
          <circle r="3" fill="#6EAF95" />
        </g>
        <g className="airport-ping" transform="translate(352 52)">
          <circle data-ping className="ping-wave ping-wave-green" r="14" />
          <circle r="4.5" fill="#6EAF95" />
        </g>

        <circle
          data-orb
          r="5"
          fill="#6EAF95"
        />

        <g data-plane-ghost opacity="0.45">
          <circle r="3.5" fill="#6EAF95" />
        </g>
        <g data-plane>
          <path
            d="M0 -14 L11 6 L2 3 L0 15 L-2 3 L-11 6 Z"
            fill="#EEEAE2"
            stroke="#9A8BC4"
            strokeWidth="1"
          />
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-x-4 top-4 flex justify-between text-[10px] tracking-[0.18em] text-muted uppercase md:inset-x-6">
        <span>
          <span className="block font-display text-sm text-accent">
            {t.experience.origin}
          </span>
          {t.experience.originCity}
        </span>
        <span className="text-right">
          <span className="block font-display text-sm text-secondary">
            {t.experience.dest}
            <span className="mx-1 text-muted">/</span>
            {t.experience.destAlt}
          </span>
          {t.experience.destCity} · {t.experience.destAltCity}
        </span>
      </div>
    </div>
  );
}
