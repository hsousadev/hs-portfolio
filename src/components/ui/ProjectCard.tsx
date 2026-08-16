import { ArrowUpRight, Play } from "@/components/ui/icons";
import { useLocale } from "@/i18n/locale";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/cn";
import { Tag } from "./Tag";

export function ProjectCard({
  project,
  tint = "accent",
}: {
  project: Project;
  tint?: "accent" | "secondary";
}) {
  const { locale, t } = useLocale();
  const green = tint === "secondary";

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-[transform,border-color,box-shadow] duration-500 ease-out-expo [@media(hover:hover)]:hover:-translate-y-1.5",
        green
          ? "hover:border-secondary/50 [@media(hover:hover)]:hover:shadow-[0_20px_48px_-24px_rgba(123,201,166,0.55)]"
          : "hover:border-accent/50 [@media(hover:hover)]:hover:shadow-[0_20px_48px_-24px_rgba(160,144,212,0.55)]",
      )}
    >
      <div className="relative aspect-16/10 shrink-0 overflow-hidden bg-elevated">
        <img
          src={project.image}
          alt={project.title}
          className="project-shot h-full w-full object-cover"
          loading="lazy"
        />
        <div
          className={cn(
            "project-shot-wash pointer-events-none absolute inset-0",
            green ? "bg-secondary" : "bg-accent",
          )}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-bg/55 via-transparent to-transparent opacity-70 transition-opacity duration-500 [@media(hover:hover)]:group-hover:opacity-30" />
        {project.video && (
          <span className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-full bg-bg/80 text-secondary backdrop-blur-sm">
            <Play size={14} />
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <div className="flex items-center gap-2 text-[11px] tracking-[0.14em] text-muted uppercase">
          <span>{project.category}</span>
          {project.live && (
            <>
              <span aria-hidden>·</span>
              <span className="text-secondary">{t.common.live}</span>
            </>
          )}
        </div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display line-clamp-1 text-base leading-snug font-semibold tracking-tight text-text md:text-lg">
            {project.title}
          </h3>
          <ArrowUpRight
            size={16}
            className={cn(
              "mt-0.5 shrink-0 text-muted transition-colors",
              green ? "group-hover:text-secondary" : "group-hover:text-accent",
            )}
          />
        </div>
        <p className="line-clamp-2 min-h-10 text-xs leading-relaxed text-muted md:min-h-11 md:text-sm">
          {project.description[locale]}
        </p>
        <div className="mt-auto flex min-h-6 flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </a>
  );
}
