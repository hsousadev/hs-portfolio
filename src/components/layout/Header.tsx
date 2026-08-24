import { useEffect, useRef, useState } from "react";
import { Menu, X } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { useLocale } from "@/i18n/locale";
import { gsap, reducedMotion, unlockGsap } from "@/lib/motion";
import { scrollToId } from "@/lib/scroll";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { FadeRule } from "@/components/ui/FadeRule";
import { LanguageToggle } from "./LanguageToggle";

const links = [
  { id: "about", label: "about" as const },
  { id: "work", label: "work" as const },
  { id: "career", label: "career" as const },
  { id: "contact", label: "contact" as const },
];

export function Header() {
  const { t } = useLocale();
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const go = (id: string) => {
    scrollToId(id);
    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = root.current;
    if (!el || reducedMotion()) return;
    unlockGsap(el);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={root}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-bg" : "bg-transparent",
      )}
    >
      <div className="relative">
        {scrolled && <FadeRule position="bottom" />}
        <Container className="flex h-16 items-center justify-between">
        <button
          type="button"
          onClick={() => go("hero")}
          className="flex items-center gap-2"
          aria-label="Henrique Sousa"
        >
          <Logo className="text-text transition-opacity hover:opacity-70" />
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => go(link.id)}
              className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase transition-colors hover:text-text"
            >
              {t.nav[link.label]}
            </button>
          ))}
          <LanguageToggle />
        </nav>

        <button
          type="button"
          className="-mr-1 flex size-11 items-center justify-center text-text md:hidden"
          aria-label={open ? t.common.close : t.common.menu}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        </Container>
      </div>

      <div
        className={cn(
          "relative bg-bg md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <FadeRule position="top" />
        <Container className="flex flex-col py-2">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => go(link.id)}
              className="py-3.5 text-left font-mono text-sm tracking-[0.12em] text-text uppercase"
            >
              {t.nav[link.label]}
            </button>
          ))}
          <div className="py-4">
            <LanguageToggle />
          </div>
        </Container>
      </div>
    </header>
  );
}
