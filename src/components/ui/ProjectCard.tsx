import { ArrowUpRight } from "@/components/ui/icons";
import { useLocale } from "@/i18n/locale";
import type { Project } from "@/content/projects";
import { Tag } from "./Tag";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { locale, t } = useLocale();
  const n = String(index + 1).padStart(2, "0");

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group grid items-center gap-5 md:grid-cols-[minmax(0,1fr)_minmax(12rem,17rem)] md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(14rem,20rem)]"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-elevated md:order-2">
        <img
          src={project.image}
          alt={project.title}
          className="project-shot h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="min-w-0 md:order-1">
        <p className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
          {n}
          <span className="mx-2 text-border" aria-hidden>
            /
          </span>
          {project.category}
          {project.live && (
            <>
              <span className="mx-2 text-border" aria-hidden>
                /
              </span>
              <span className="text-secondary">{t.common.live}</span>
            </>
          )}
        </p>
        <h3 className="font-display mt-2 flex items-start gap-3 text-2xl leading-tight font-semibold tracking-tight text-text md:text-3xl">
          <span>{project.title}</span>
          <ArrowUpRight
            size={18}
            className="mt-1.5 shrink-0 text-muted transition-colors group-hover:text-text"
          />
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          {project.description[locale]}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </a>
  );
}
