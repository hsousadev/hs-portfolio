import { site } from "@/content/site";
import { useLocale } from "@/i18n/locale";
import { Container } from "@/components/ui/Container";
import { FadeRule } from "@/components/ui/FadeRule";

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
        <div className="flex flex-wrap gap-5">
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
        </div>
      </Container>
    </footer>
  );
}
