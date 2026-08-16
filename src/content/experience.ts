import type { Locale } from "@/i18n/messages";

export type ExperienceItem = {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  period: Record<Locale, string>;
  tags?: string[];
  current?: boolean;
  url?: string;
};

export const professional: ExperienceItem[] = [
  {
    id: "inform",
    title: {
      pt: "Inform Brasil · Front-end Software Engineer | UI",
      en: "Inform Brasil · Front-end Software Engineer | UI",
    },
    description: {
      pt: "Empresa multinacional de tecnologia. Front-end de uma nova plataforma para o mercado de aviação no Alasca e Canadá, com times distribuídos globalmente — da definição de requisitos à interface escalável.",
      en: "Multinational tech company. Front-end of a new platform for the aviation market in Alaska and Canada, working with globally distributed teams from requirements to scalable interfaces.",
    },
    period: { pt: "Nov/2025 — Atual", en: "Nov 2025 — Present" },
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Figma"],
    current: true,
    url: "https://www.inform-software.com/br/sobre-nos/locais/inform-brasil",
  },
  {
    id: "better-tech",
    title: {
      pt: "Better Tech · Front-end Sênior",
      en: "Better Tech · Senior Front-end",
    },
    description: {
      pt: "Responsável pelo front-end de soluções educacionais, da prototipagem ao deploy. Telas, fluxos, integração com back-end, gestão de aulas e checkout.",
      en: "Owned front-end for education products, from prototype to deploy. Screens, flows, back-end integration, class management, and checkout.",
    },
    period: { pt: "Dez/2024 — Nov/2025", en: "Dec 2024 — Nov 2025" },
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "n8n", "Figma"],
  },
  {
    id: "intrabank",
    title: {
      pt: "Intra · Front-end Pleno/Sênior e UI Designer",
      en: "Intra · Mid/Senior Front-end & UI Designer",
    },
    description: {
      pt: "Principal responsável pelo front-end em FIDC/asset management. Liderança técnica, mentoria e sistemas internos para Comercial, Compliance e Crédito — do protótipo à entrega.",
      en: "Lead front-end in FIDC/asset management. Technical leadership, mentoring, and internal systems for Sales, Compliance, and Credit — from prototype to delivery.",
    },
    period: { pt: "Jul/2023 — Nov/2024", en: "Jul 2023 — Nov 2024" },
    tags: ["React", "TypeScript", "Tailwind", "Vite", "Next.js", "Figma"],
    url: "https://www.intra.com.br/",
  },
  {
    id: "freelance",
    title: {
      pt: "Freelancer · Full-stack Pleno e UI Designer",
      en: "Freelance · Mid-level Full-stack & UI Designer",
    },
    description: {
      pt: "Aplicações web completas para projetos terceirizados e pessoais. Design, implementação e deploy, com foco em performance e experiência.",
      en: "Complete web apps for client and personal projects. Design, implementation, and deploy, focused on performance and experience.",
    },
    period: { pt: "Mai/2023 — Jul/2023", en: "May 2023 — Jul 2023" },
    tags: ["React", "Next.js", "Node.js", "Tailwind", "Figma"],
  },
  {
    id: "softexpert",
    title: {
      pt: "SoftExpert · Front-end Pleno",
      en: "SoftExpert · Mid-level Front-end",
    },
    description: {
      pt: "Features e manutenção no Workspace do produto principal, presente em mais de 50 países. Jest, Storybook e squads Scrum.",
      en: "Features and maintenance in Workspace of the core product, used in 50+ countries. Jest, Storybook, and Scrum squads.",
    },
    period: { pt: "Nov/2022 — Mai/2023", en: "Nov 2022 — May 2023" },
    tags: ["React", "JavaScript", "Jest", "Storybook"],
  },
  {
    id: "ensinio",
    title: {
      pt: "Ensinio · Front-end Júnior/Pleno",
      en: "Ensinio · Junior/Mid Front-end",
    },
    description: {
      pt: "Plataforma white-label de conteúdos digitais, landing pages e módulos do sistema. Migração gradual para React e Next.js. Evolução de júnior para pleno.",
      en: "White-label digital content platform, landing pages, and core modules. Gradual migration to React and Next.js. Growth from junior to mid-level.",
    },
    period: { pt: "Abr/2021 — Nov/2022", en: "Apr 2021 — Nov 2022" },
    tags: ["React", "Next.js", "TypeScript", "Redux", "Figma"],
    url: "https://ensinio.com/",
  },
  {
    id: "viralizzi",
    title: { pt: "Viralizzi · Designer", en: "Viralizzi · Designer" },
    description: {
      pt: "Artes para redes, banners e materiais gráficos durante a transição de carreira.",
      en: "Social creatives, banners, and graphic materials during a career transition.",
    },
    period: { pt: "Jan/2021 — Abr/2021", en: "Jan 2021 — Apr 2021" },
    tags: ["Figma", "Photoshop"],
  },
  {
    id: "alorean",
    title: {
      pt: "Alorean · Designer, editor e suporte",
      en: "Alorean · Designer, editor & support",
    },
    description: {
      pt: "Identidades visuais, edição de vídeo institucional e manutenção de hardware para diferentes empresas.",
      en: "Visual identities, institutional video editing, and hardware maintenance for multiple companies.",
    },
    period: { pt: "Jan/2020 — Jan/2021", en: "Jan 2020 — Jan 2021" },
    tags: ["Figma", "Premiere", "Photoshop"],
  },
  {
    id: "supergeeks",
    title: {
      pt: "SuperGeeks · Instrutor de programação",
      en: "SuperGeeks · Programming instructor",
    },
    description: {
      pt: "Ensino de programação e robótica para crianças e adolescentes. Lógica, jogos, apps e oficinas práticas.",
      en: "Taught programming and robotics to kids and teens. Logic, games, apps, and practical workshops.",
    },
    period: { pt: "Jan/2019 — Jan/2021", en: "Jan 2019 — Jan 2021" },
    tags: ["Python", "JavaScript", "Arduino"],
  },
  {
    id: "iraci",
    title: {
      pt: "Instituto Iraci Veiga · Aprendiz",
      en: "Iraci Veiga Institute · Apprentice",
    },
    description: {
      pt: "Apoio ao marketing digital e suporte de TI. Materiais visuais e manutenção de equipamentos.",
      en: "Supported digital marketing and IT. Visual materials and equipment maintenance.",
    },
    period: { pt: "Out/2016 — Dez/2017", en: "Oct 2016 — Dec 2017" },
    tags: ["Photoshop", "Hardware"],
  },
];

export const academic: ExperienceItem[] = [
  {
    id: "mba",
    title: {
      pt: "MBA em Desenvolvimento Full-stack · Rocketseat / Sirius",
      en: "MBA in Full-stack Development · Rocketseat / Sirius",
    },
    description: {
      pt: "Pós-graduação em full-stack com tecnologias e práticas de mercado.",
      en: "Graduate program in full-stack with modern market practices.",
    },
    period: { pt: "Out/2024 — Fev/2025", en: "Oct 2024 — Feb 2025" },
  },
  {
    id: "fatec",
    title: {
      pt: "Análise e Desenvolvimento de Sistemas · Fatec SJC",
      en: "Systems Analysis and Development · Fatec SJC",
    },
    description: {
      pt: "Graduação pela Fatec de São José dos Campos.",
      en: "Bachelor’s degree from Fatec São José dos Campos.",
    },
    period: { pt: "Ago/2019 — Ago/2022", en: "Aug 2019 — Aug 2022" },
  },
  {
    id: "etec",
    title: {
      pt: "Técnico em Redes de Computadores · ETEC Jacareí",
      en: "Computer Networks Technician · ETEC Jacareí",
    },
    description: {
      pt: "Formação técnica na ETEC Cônego José Bento.",
      en: "Technical degree at ETEC Cônego José Bento.",
    },
    period: { pt: "Fev/2018 — Jun/2019", en: "Feb 2018 — Jun 2019" },
  },
  {
    id: "ifsp",
    title: {
      pt: "Inglês · Conversação avançada · IFSP Jacareí",
      en: "English · Advanced conversation · IFSP Jacareí",
    },
    description: {
      pt: "Seis meses de conversação avançada no Instituto Federal de Jacareí.",
      en: "Six months of advanced conversation at Instituto Federal de Jacareí.",
    },
    period: { pt: "Jul/2018 — Dez/2018", en: "Jul 2018 — Dec 2018" },
  },
  {
    id: "high-school",
    title: {
      pt: "Ensino médio · Amância Dias Sampaio",
      en: "High school · Amância Dias Sampaio",
    },
    description: {
      pt: "Conclusão do ensino médio em Jacareí.",
      en: "Completed high school in Jacareí.",
    },
    period: { pt: "Jan/2015 — Dez/2017", en: "Jan 2015 — Dec 2017" },
  },
  {
    id: "informatics-adv",
    title: {
      pt: "Informática avançada · Instituto Iraci Veiga",
      en: "Advanced computing · Iraci Veiga Institute",
    },
    description: {
      pt: "Certificação em informática avançada.",
      en: "Advanced computing certificate.",
    },
    period: { pt: "Fev/2017 — Nov/2017", en: "Feb 2017 — Nov 2017" },
  },
  {
    id: "informatics-basic",
    title: {
      pt: "Informática profissionalizante · Instituto Iraci Veiga",
      en: "Professional computing · Iraci Veiga Institute",
    },
    description: {
      pt: "Certificação em informática básica profissionalizante.",
      en: "Professional basic computing certificate.",
    },
    period: { pt: "Out/2015 — Dez/2016", en: "Oct 2015 — Dec 2016" },
  },
];
