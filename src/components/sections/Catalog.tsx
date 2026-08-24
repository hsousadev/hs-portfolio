import { useEffect, useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/content/projects";
import { site } from "@/content/site";
import { useLocale } from "@/i18n/locale";
import { FadeDivider, FadeFrame } from "@/components/ui/FadeRule";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

const filters: Array<ProjectCategory | "all"> = ["all", "web", "design"];
const PAGE_SIZE = 4;

export function Catalog() {
  const { t } = useLocale();
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const [expanded, setExpanded] = useState(false);

  const items = useMemo(() => {
    const list =
      filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter);

    return [...list].sort(
      (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)),
    );
  }, [filter]);

  useEffect(() => {
    setExpanded(false);
  }, [filter]);

  const visible = expanded ? items : items.slice(0, PAGE_SIZE);
  const canExpand = items.length > PAGE_SIZE;

  const labels = {
    all: t.catalog.all,
    web: t.catalog.web,
    design: t.catalog.design,
  };

  return (
    <Section
      id="work"
      index="03"
      kicker={t.catalog.kicker}
      title={t.catalog.title}
      actions={
        <div className="flex flex-wrap gap-2 md:gap-3">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-[11px] tracking-[0.14em] text-muted uppercase transition-colors hover:border-text hover:text-text md:min-h-0"
          >
            {t.catalog.github}
            <span aria-hidden>→</span>
          </a>
          <a
            href={site.socials.behance}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-[11px] tracking-[0.14em] text-muted uppercase transition-colors hover:border-text hover:text-text md:min-h-0"
          >
            {t.catalog.behance}
            <span aria-hidden>→</span>
          </a>
        </div>
      }
    >
      <div className="-mx-5 mb-8 flex gap-2 overflow-x-auto px-5 pb-1 sm:-mx-6 sm:px-6 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
        {filters.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={cn(
              "shrink-0 rounded-full border px-3.5 py-2 font-mono text-[11px] tracking-[0.12em] uppercase transition-colors md:py-1.5",
              filter === value
                ? "border-text bg-text text-bg"
                : "border-border text-muted hover:border-text/50 hover:text-text",
            )}
          >
            {labels[value]}
          </button>
        ))}
      </div>

      <div className="relative py-8 md:py-10">
        <FadeFrame />
        {visible.map((project, index) => (
          <div key={`${filter}-${project.id}`}>
            {index > 0 && <FadeDivider className="py-6 md:py-8" />}
            <Reveal delay={Math.min(index, 5) * 0.04}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          </div>
        ))}
      </div>

      {canExpand && (
        <div className="mt-8 flex justify-center md:mt-10">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="rounded-full border border-border px-5 py-2.5 font-mono text-[11px] tracking-[0.14em] text-muted uppercase transition-colors hover:border-text hover:text-text"
          >
            {expanded ? t.catalog.less : t.catalog.more}
          </button>
        </div>
      )}
    </Section>
  );
}
