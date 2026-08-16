const items = [
  "React",
  "TypeScript",
  "UI Design",
  "Figma",
  "Next.js",
  "Design Systems",
  "Front-end",
  "Back-end",
  "Node.js",
  "Tailwind",
  "n8n",
  "PostgreSQL",
  "Docker",
  "Git",
  "CI/CD",
  "GitHub",
  "Jira",
  "Agile",
  "Scrum",
  "Bit Bucket",
  "Jest",
  "Unit Tests",
  "Integration Tests",
  "Storybook",
  "Vite",
  "RESTful APIs",
];

function Row() {
  return (
    <ul className="m-0 flex list-none items-center gap-10 p-0 pr-10">
      {items.map((item, index) => (
        <li
          key={item}
          className="flex shrink-0 items-center gap-10 font-display text-sm tracking-[0.18em] uppercase"
        >
          <span className={index % 2 === 0 ? "text-accent" : "text-secondary"}>
            {item}
          </span>
          <span className="size-1.5 rounded-full bg-muted/50" aria-hidden />
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <div className="marquee-viewport relative mt-auto overflow-hidden border-y border-border/70 py-3 md:py-4">
      <div className="marquee-track">
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
}
