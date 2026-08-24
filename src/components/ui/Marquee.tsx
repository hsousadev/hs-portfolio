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
    <ul className="m-0 flex list-none items-center gap-8 p-0 pr-8">
      {items.map((item) => (
        <li
          key={item}
          className="flex shrink-0 items-center gap-8 font-mono text-[11px] tracking-[0.18em] text-muted uppercase"
        >
          <span>{item}</span>
          <span className="size-1 rounded-full bg-muted/60" aria-hidden />
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <div className="marquee-viewport relative mt-auto overflow-hidden py-3 md:py-3.5">
      <div className="marquee-track">
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
}
