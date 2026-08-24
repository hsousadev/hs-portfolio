import { useLocale } from "@/i18n/locale";
import { PortraitReel } from "@/components/ui/PortraitReel";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function About() {
  const { t } = useLocale();

  return (
    <Section
      id="about"
      index="01"
      kicker={t.about.kicker}
      title={t.about.title}
    >
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] md:gap-12 lg:gap-16">
        <PortraitReel />
        <Reveal delay={0.12}>
          <div className="space-y-4 text-base leading-relaxed text-muted md:space-y-5 md:text-lg">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
            <p className="text-text">{t.about.drive}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
