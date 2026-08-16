import { useEffect, useRef, type ReactNode } from "react";
import { gsap, reducedMotion, unlockGsap } from "@/lib/motion";

export function Magnetic({
  children,
  strength = 0.28,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    unlockGsap(el);

    const onMove = (event: MouseEvent) => {
      const box = el.getBoundingClientRect();
      gsap.to(el, {
        x: (event.clientX - box.left - box.width / 2) * strength,
        y: (event.clientY - box.top - box.height / 2) * strength,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "power3.out" });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className="inline-block will-change-transform">
      {children}
    </div>
  );
}
