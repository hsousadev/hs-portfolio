import { useEffect, useRef } from "react";
import { gsap, reducedMotion, unlockGsap } from "@/lib/motion";

export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bar.current;
    if (!el || reducedMotion()) return;
    unlockGsap(el);

    const ctx = gsap.context(() => {
      gsap.set(el, { scaleX: 0, transformOrigin: "left center" });
      gsap.to(el, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]"
      aria-hidden
    >
      <div ref={bar} className="h-full origin-left bg-accent" />
    </div>
  );
}
