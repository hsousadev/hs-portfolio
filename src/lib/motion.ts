import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export { gsap, ScrollTrigger, MotionPathPlugin };

export const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Tailwind v4 applies independent `translate` / `rotate` / `scale`,
 * which override the `transform` GSAP writes. Clear them on targets.
 */
export function unlockGsap(el: Element | null | undefined) {
  if (!el || !("style" in el)) return el;
  const style = (el as HTMLElement | SVGElement).style;
  style.setProperty("translate", "none");
  style.setProperty("rotate", "none");
  style.setProperty("scale", "none");
  return el;
}
