import { skillGroups } from "@/content/skills";
import { useLocale } from "@/i18n/locale";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Skills() {
  const { t } = useLocale();

  return (
    <Section id="skills" index="05" kicker={t.skills.kicker} title={t.skills.title}>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {skillGroups.map((group, index) => (
          <Reveal key={group.id} delay={index * 0.05}>
            <h3 className="mb-3 font-mono text-[11px] tracking-[0.16em] text-text uppercase">
              {t.skills[group.key]}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
