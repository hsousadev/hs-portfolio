import { skillGroups } from "@/content/skills";
import { useLocale } from "@/i18n/locale";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Skills() {
  const { t } = useLocale();

  return (
    <Section id="skills" index="05" kicker={t.skills.kicker} title={t.skills.title}>
      <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
        {skillGroups.map((group, index) => (
          <Reveal key={group.id} delay={index * 0.05}>
            <h3 className="mb-4 font-display text-lg text-text">
              {t.skills[group.key]}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item, itemIndex) => (
                <li
                  key={item}
                  className={
                    itemIndex % 2 === 0
                      ? "rounded-full border border-accent/25 px-3 py-1 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                      : "rounded-full border border-secondary/25 px-3 py-1 text-sm text-muted transition-colors hover:border-secondary hover:text-secondary"
                  }
                >
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
