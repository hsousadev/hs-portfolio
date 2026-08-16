export const skillGroups = [
  {
    id: "frontend",
    key: "frontend" as const,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "React Native",
    ],
  },
  {
    id: "backend",
    key: "backend" as const,
    items: ["Node.js", "Fastify", "Prisma", "PostgreSQL", "REST APIs"],
  },
  {
    id: "design",
    key: "design" as const,
    items: ["Figma", "UI Design", "Design Systems", "Prototyping"],
  },
  {
    id: "tools",
    key: "tools" as const,
    items: ["Git", "GitHub", "Jest", "Storybook", "n8n"],
  },
];
