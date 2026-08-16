import {
  academic,
  professional,
  type ExperienceItem,
} from "@/content/experience";
import { useLocale } from "@/i18n/locale";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

function Timeline({ items }: { items: ExperienceItem[] }) {
  const { locale, t } = useLocale();

  return (
    <ol className="space-y-8">
      {items.map((item, index) => (
        <Reveal
          key={item.id}
          as="li"
          delay={index * 0.05}
          y={18}
          className="border-t border-border pt-6"
        >
          <p className="mb-2 text-xs tracking-[0.12em] text-muted uppercase">
            {item.period[locale]}
          </p>
          <h4 className="font-display text-xl font-semibold text-text">
            {item.title[locale]}
            {item.current && (
              <span className="ml-3 align-middle font-sans text-[10px] font-medium tracking-[0.16em] text-secondary uppercase">
                {t.experience.present}
              </span>
            )}
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {item.description[locale]}
          </p>
          {item.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}
        </Reveal>
      ))}
    </ol>
  );
}

export function Experience() {
  const { t } = useLocale();

  return (
    <Section id="career" index="04" kicker={t.experience.kicker} title={t.experience.title}>
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal>
            <h3 className="mb-5 font-display text-xl text-text md:mb-8 md:text-2xl">
              {t.experience.professional}
            </h3>
          </Reveal>
          <Timeline items={professional} />
        </div>
        <div>
          <Reveal delay={0.08}>
            <h3 className="mb-5 font-display text-xl text-text md:mb-8 md:text-2xl">
              {t.experience.academic}
            </h3>
          </Reveal>
          <Timeline items={academic} />
        </div>
      </div>
    </Section>
  );
}
