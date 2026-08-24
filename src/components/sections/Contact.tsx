import { useState } from "react";
import { site } from "@/content/site";
import { useLocale } from "@/i18n/locale";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Contact() {
  const { t } = useLocale();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" index="07" kicker={t.contact.kicker} title={t.contact.title}>
      <Reveal>
        <p className="max-w-xl text-base text-muted md:text-lg">{t.contact.text}</p>
        <a
          href={`mailto:${site.email}`}
          className="mt-6 block font-display text-xl break-all text-text decoration-accent underline-offset-4 transition-colors hover:underline md:mt-8 md:text-4xl"
        >
          {site.email}
        </a>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:mt-8">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-border px-4 py-2.5 font-mono text-[11px] tracking-[0.14em] text-muted uppercase transition-colors hover:border-text hover:text-text"
          >
            {copied ? t.contact.copied : t.contact.email}
          </button>
          <Button href={site.whatsapp} variant="ghost" target="_blank" rel="noreferrer">
            {t.contact.whatsapp}
          </Button>
          <Button href={site.socials.linkedin} variant="ghost" target="_blank" rel="noreferrer">
            {t.contact.linkedin}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
