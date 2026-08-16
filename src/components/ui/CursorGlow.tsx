import { useEffect, useRef } from "react";
import { gsap, reducedMotion } from "@/lib/motion";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion() || window.matchMedia("(pointer: coarse)").matches) {
      if (el) el.style.display = "none";
      return;
    }

    const move = (event: MouseEvent) => {
      gsap.to(el, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.7,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-30 hidden size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl md:block"
      style={{
        background:
          "radial-gradient(circle, rgb(160 144 212 / 0.28) 0%, rgb(123 201 166 / 0.12) 42%, transparent 70%)",
      }}
    />
  );
}
