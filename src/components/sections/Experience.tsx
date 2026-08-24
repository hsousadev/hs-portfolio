import { useState } from "react";
import {
  academic,
  professional,
  type ExperienceItem,
} from "@/content/experience";
import { useLocale } from "@/i18n/locale";
import { Tag } from "@/components/ui/Tag";
import { FadeFrame } from "@/components/ui/FadeRule";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const PAGE_SIZE = 3;

function Timeline({ items }: { items: ExperienceItem[] }) {
  const { locale, t } = useLocale();
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? items : items.slice(0, PAGE_SIZE);
  const canExpand = items.length > PAGE_SIZE;

  return (
    <div>
      <div className="relative py-8 md:py-10">
        <FadeFrame />
        <ol className="space-y-8">
          {visible.map((item, index) => (
            <Reveal
              key={item.id}
              as="li"
              delay={Math.min(index, PAGE_SIZE - 1) * 0.05}
              y={18}
            >
            <p className="mb-2 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
              {item.period[locale]}
            </p>
            <h4 className="font-display text-xl font-semibold text-text">
              {item.title[locale]}
              {item.current && (
                <span className="ml-3 inline-flex align-middle rounded-full border border-secondary/40 px-2 py-0.5 font-mono text-[10px] font-medium tracking-[0.16em] text-secondary uppercase">
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
      </div>

      {canExpand && (
        <div className="mt-8 flex justify-center md:mt-10">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="rounded-full border border-border px-5 py-2.5 font-mono text-[11px] tracking-[0.14em] text-muted uppercase transition-colors hover:border-text hover:text-text"
          >
            {expanded ? t.experience.less : t.experience.more}
          </button>
        </div>
      )}
    </div>
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
