import { useEffect, useRef } from "react";
import { site } from "@/content/site";
import { useLocale } from "@/i18n/locale";
import { gsap, reducedMotion, unlockGsap } from "@/lib/motion";
import { scrollToId } from "@/lib/scroll";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/ui/Magnetic";
import { Marquee } from "@/components/ui/Marquee";

export function Hero() {
  const { locale, t } = useLocale();
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || reducedMotion()) return;

    const ctx = gsap.context(() => {
      const lines = el.querySelectorAll("[data-hero-line]");
      const rest = el.querySelectorAll("[data-hero]");
      lines.forEach((node) => unlockGsap(node));
      rest.forEach((node) => unlockGsap(node));

      gsap.fromTo(
        lines,
        { y: "110%" },
        {
          y: "0%",
          duration: 1.05,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.12,
        },
      );

      gsap.fromTo(
        rest,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.42,
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={root}
      className="relative flex min-h-svh flex-col overflow-x-hidden"
    >
      <div className="frame-marks hidden md:block" aria-hidden>
        <span />
        <span />
        <span />
        <span />
      </div>

      <Container className="relative flex w-full flex-1 flex-col justify-center pt-24 pb-8">
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
          <p
            data-hero
            className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase"
          >
            {t.hero.based}
          </p>
          <p
            data-hero
            className="hidden font-mono text-[11px] tracking-[0.18em] text-muted uppercase sm:block"
          >
            {t.hero.folio}
          </p>
        </div>

        <div className="grid items-end gap-8 lg:grid-cols-[auto_minmax(12rem,1fr)] lg:gap-12">
          <h1 className="w-max max-w-full font-display text-5xl leading-[0.86] font-extrabold tracking-tight text-text sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block overflow-hidden">
              <span data-hero-line className="block pr-[0.14em]">
                Henrique
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero-line className="mt-1 block w-fit bg-accent px-2 pr-[0.35em] text-accent-on sm:px-3">
                Sousa
              </span>
            </span>
          </h1>

          <div className="md:pb-2">
            <p
              data-hero
              className="max-w-md font-display text-2xl leading-tight text-text md:text-3xl"
            >
              {t.hero.role}
            </p>
            <p
              data-hero
              className="mt-3 font-mono text-[11px] tracking-[0.16em] text-muted uppercase"
            >
              {t.hero.line}
            </p>
            <div data-hero className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <Button href={site.resumes[locale]} download>
                  {t.hero.cv}
                </Button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Button href="#contact" variant="ghost">
                  {t.hero.contact}
                </Button>
              </Magnetic>
            </div>
          </div>
        </div>
      </Container>

      <div
        data-hero
        className="absolute inset-x-0 bottom-16 z-10 flex justify-center"
      >
        <Magnetic strength={0.16}>
          <button
            type="button"
            onClick={() => scrollToId("about")}
            aria-label={t.hero.scroll}
            className="group flex flex-col items-center gap-2.5"
          >
            <span className="cue-mark">
              <span />
              <span />
              <span />
              <span />
              <svg
                viewBox="0 0 24 32"
                width="18"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cue-glyph text-muted transition-colors duration-200 group-hover:text-text"
                aria-hidden
              >
                <line className="cue-stem" x1="12" y1="3" x2="12" y2="21" />
                <line className="cue-pulse" x1="12" y1="3" x2="12" y2="21" />
                <path className="cue-head" d="m7 18 5 6 5-6" />
              </svg>
            </span>
            <span className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase transition-colors duration-200 group-hover:text-text">
              {t.hero.scroll}
            </span>
          </button>
        </Magnetic>
      </div>

      <Marquee />
    </section>
  );
}
