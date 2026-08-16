import { site } from "@/content/site";
import { useLocale } from "@/i18n/locale";
import { Container } from "@/components/ui/Container";

const socials = [
  { label: "GitHub", href: site.socials.github },
  { label: "Figma", href: site.socials.figma },
  { label: "Behance", href: site.socials.behance },
];

export function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-border py-6 md:py-8">
      <Container className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center md:gap-6">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Henrique Sousa. {t.footer.rights}
        </p>
        <div className="flex flex-wrap gap-5">
          {socials.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={
                index % 2 === 0
                  ? "text-sm text-muted transition-colors hover:text-accent"
                  : "text-sm text-muted transition-colors hover:text-secondary"
              }
            >
              {item.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
