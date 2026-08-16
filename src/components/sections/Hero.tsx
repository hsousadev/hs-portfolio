import { useEffect, useRef } from "react";
import { MessageCircle } from "@/components/ui/icons";
import { site } from "@/content/site";
import { useLocale } from "@/i18n/locale";
import { gsap, reducedMotion, unlockGsap } from "@/lib/motion";
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
      <div
        className="grid-fade pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-32 right-[-8%] size-[46vw] rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-10 left-[-12%] size-[32vw] rounded-full bg-secondary/14 blur-3xl"
        aria-hidden
      />

      <Container className="relative flex w-full flex-1 flex-col justify-center pt-24 pb-8">
        <p
          data-hero
          className="mb-6 flex items-center gap-3 font-sans text-xs font-medium tracking-[0.16em] text-muted uppercase"
        >
          <span className="size-1.5 rounded-full bg-secondary" aria-hidden />
          {t.hero.based}
        </p>
        <h1 className="font-display text-5xl leading-[0.92] font-extrabold tracking-tight text-text sm:text-6xl md:text-8xl">
          <span className="block overflow-hidden">
            <span data-hero-line className="block">
              Henrique
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              data-hero-line
              className="block bg-linear-to-r from-accent via-text to-secondary bg-clip-text text-transparent"
            >
              Sousa
            </span>
          </span>
        </h1>
        <p
          data-hero
          className="mt-8 max-w-xl font-display text-2xl text-text md:text-3xl"
        >
          {t.hero.role}
        </p>
        <p data-hero className="mt-3 max-w-xl text-lg text-muted">
          {t.hero.line}
        </p>
        <div data-hero className="mt-10 flex flex-wrap items-center gap-3">
          <Magnetic>
            <Button href={site.resumes[locale]} download>
              {t.hero.cv}
            </Button>
          </Magnetic>
          <Magnetic strength={0.2}>
            <Button href="#contact" variant="ghost">
              {t.hero.contact}
              <MessageCircle size={16} />
            </Button>
          </Magnetic>
        </div>
      </Container>
      <Marquee />
    </section>
  );
}
