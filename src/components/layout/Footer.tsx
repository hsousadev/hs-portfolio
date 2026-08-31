import { site } from "@/content/site";
import { useLocale } from "@/i18n/locale";
import { scrollToId } from "@/lib/scroll";
import { Container } from "@/components/ui/Container";
import { FadeRule } from "@/components/ui/FadeRule";
import { Magnetic } from "@/components/ui/Magnetic";
import { ArrowUp } from "@/components/ui/icons";

const socials = [
  { label: "GitHub", href: site.socials.github },
  { label: "Figma", href: site.socials.figma },
  { label: "Behance", href: site.socials.behance },
];

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="relative py-6 md:py-8">
      <FadeRule position="top" />
      <Container className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center md:gap-6">
        <p className="font-mono text-[11px] tracking-[0.08em] text-muted">
          © {new Date().getFullYear()} Henrique Sousa. {t.footer.rights}
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase transition-colors hover:text-text"
            >
              {item.label}
            </a>
          ))}
          <Magnetic strength={0.16}>
            <button
              type="button"
              onClick={() => scrollToId("hero")}
              className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-3.5 py-2 font-mono text-[11px] tracking-[0.14em] text-muted uppercase transition-colors hover:border-text hover:text-text md:min-h-0"
            >
              <ArrowUp
                size={13}
                className="cue-rise transition-colors group-hover:text-text"
              />
              {t.footer.top}
            </button>
          </Magnetic>
        </div>
      </Container>
    </footer>
  );
}
