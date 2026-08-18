import { useEffect, useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/content/projects";
import { site } from "@/content/site";
import { useLocale } from "@/i18n/locale";
import { Carousel } from "@/components/ui/Carousel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

const filters: Array<ProjectCategory | "all"> = ["all", "web", "design"];
const PAGE_SIZE = 8;

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
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-accent hover:text-accent-on md:min-h-0"
          >
            {t.catalog.github}
            <span aria-hidden>→</span>
          </a>
          <a
            href={site.socials.behance}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary transition-colors hover:border-secondary hover:bg-secondary hover:text-accent-on md:min-h-0"
          >
            {t.catalog.behance}
            <span aria-hidden>→</span>
          </a>
        </div>
      }
    >
      <div className="-mx-5 mb-6 flex gap-2 overflow-x-auto px-5 pb-1 sm:-mx-6 sm:px-6 md:mx-0 md:mb-8 md:flex-wrap md:overflow-visible md:px-0">
        {filters.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            className={cn(
              "shrink-0 rounded-full border px-3.5 py-2 text-sm transition-colors md:py-1.5",
              filter === value
                ? "border-accent bg-accent text-accent-on"
                : "border-border text-muted hover:border-secondary/50 hover:text-text",
            )}
          >
            {labels[value]}
          </button>
        ))}
      </div>

      <div className="md:hidden">
        <Carousel
          key={filter}
          label={t.catalog.title}
          itemClassName="w-[min(82vw,20.5rem)]"
        >
          {items.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              tint={index % 2 === 0 ? "accent" : "secondary"}
            />
          ))}
        </Carousel>
      </div>

      <div className="hidden md:grid md:auto-rows-fr md:gap-4 md:grid-cols-2 lg:grid-cols-4">
        {visible.map((project, index) => (
          <Reveal
            key={`${filter}-${project.id}`}
            className="h-full"
            delay={Math.min(index, 7) * 0.04}
          >
            <ProjectCard
              project={project}
              tint={index % 2 === 0 ? "accent" : "secondary"}
            />
          </Reveal>
        ))}
      </div>

      {canExpand && (
        <div className="mt-8 hidden justify-center md:mt-10 md:flex">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="rounded-full border border-border px-5 py-2.5 text-sm text-muted transition-colors hover:border-secondary hover:text-secondary"
          >
            {expanded ? t.catalog.less : t.catalog.more}
          </button>
        </div>
      )}
    </Section>
  );
}
