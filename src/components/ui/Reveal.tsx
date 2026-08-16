import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap, reducedMotion, unlockGsap } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion()) {
      gsap.set(el, { clearProps: "all" });
      return;
    }

    unlockGsap(el);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
          onComplete: () => {
            gsap.set(el, { clearProps: "transform" });
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [delay, y]);

  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}
