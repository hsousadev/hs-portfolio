import type { Locale } from "@/i18n/messages";

export type ProjectCategory = "web" | "design" | "video";

export type Project = {
  id: string;
  title: string;
  description: Record<Locale, string>;
  tags: string[];
  category: ProjectCategory;
  href: string;
  image: string;
  featured?: boolean;
  live?: boolean;
  video?: boolean;
};

export const projects: Project[] = [
  {
    id: "nanoticia",
    title: "Nanotícia",
    description: {
      pt: "Reúne os principais portais de notícias em um só lugar. Mundo, esportes, tecnologia e negócios.",
      en: "Brings the main news portals into one place. World, sports, tech, and business.",
    },
    tags: ["Next.js", "React", "TypeScript"],
    category: "web",
    href: "https://nanoticia.vercel.app/",
    image:
      "https://user-images.githubusercontent.com/54003876/234693350-e9c7e550-f78b-484e-b67e-b92b02ff5d85.png",
    featured: true,
    live: true,
  },
  {
    id: "simbook",
    title: "Simbook",
    description: {
      pt: "Aplicação full-stack de gerenciamento de livros com usuários de diferentes cargos.",
      en: "Full-stack book management app with role-based users.",
    },
    tags: ["Next.js", "Node.js", "Fastify", "Tailwind"],
    category: "web",
    href: "https://github.com/hsousadev/simbook-web",
    image: "https://i.postimg.cc/ZqtCWTsm/simbook-cover.png",
    featured: true,
    live: true,
  },
  {
    id: "ensinio-redesign",
    title: "Ensinio",
    description: {
      pt: "Re-design da página principal do site da Ensinio.",
      en: "Redesign of Ensinio’s main website page.",
    },
    tags: ["UI Design", "Figma"],
    category: "design",
    href: "https://www.figma.com/community/file/1164776880594444677",
    image:
      "https://s3-alpha.figma.com/hub/file/2494220563/03033aaa-f74a-4478-bf73-9f18dae1e4cd-cover.png",
    featured: true,
  },
  {
    id: "visgeo",
    title: "VisGeo",
    description: {
      pt: "Pitch da aplicação de georreferenciamento e extração de dados.",
      en: "Pitch for a georeferencing and data extraction application.",
    },
    tags: ["Pitch", "Produto"],
    category: "video",
    href: "https://www.youtube.com/watch?v=hQMvhnpsWpU",
    image:
      "https://user-images.githubusercontent.com/56441371/93688444-5704dc80-fa9c-11ea-8bed-fdac35ce7337.png",
    featured: true,
    video: true,
  },
  {
    id: "leadster",
    title: "Leadster",
    description: {
      pt: "Galeria de vídeos com filtragem e modal.",
      en: "Video gallery with filtering and modal.",
    },
    tags: ["Next.js", "TypeScript", "Styled Components"],
    category: "web",
    href: "https://leadster-landing-page.vercel.app/",
    image:
      "https://user-images.githubusercontent.com/54003876/248530834-11d0e8a8-4a6b-49d7-a26c-1f852be8a5f5.png",
    featured: true,
    live: true,
  },
  {
    id: "rick-morty",
    title: "Rick and Morty Wiki",
    description: {
      pt: "Site com personagens, episódios e mais informações da série.",
      en: "A site with characters, episodes, and more from the series.",
    },
    tags: ["Next.js", "React", "TypeScript"],
    category: "web",
    href: "https://rickandmortysite.vercel.app/",
    image:
      "https://user-images.githubusercontent.com/54003876/245583973-6981008c-0103-4e96-9f81-d02ca218ddb1.png",
    live: true,
  },
  {
    id: "met-museum",
    title: "Metropolitan Museum of Art",
    description: {
      pt: "Site para encontrar obras de arte e artistas de diferentes períodos.",
      en: "A site to explore artworks and artists across periods.",
    },
    tags: ["Next.js", "TypeScript"],
    category: "web",
    href: "https://metropolitan-museum-of-art-web.vercel.app/",
    image:
      "https://user-images.githubusercontent.com/54003876/247148740-874ef4ae-ea39-402b-bff8-0c863b96084a.png",
    live: true,
  },
  {
    id: "radio",
    title: "Radio Web Browser",
    description: {
      pt: "Rádio no navegador com milhares de estações do mundo.",
      en: "In-browser radio with thousands of stations worldwide.",
    },
    tags: ["Next.js", "TypeScript"],
    category: "web",
    href: "https://radio-browser-web.vercel.app/",
    image:
      "https://user-images.githubusercontent.com/54003876/248300629-1fb0fc32-9ef0-4f88-bc72-0b1543781257.png",
    live: true,
  },
  {
    id: "moveit",
    title: "Move.it",
    description: {
      pt: "Plataforma Pomodoro com exercícios. NLW #04 Rocketseat.",
      en: "Pomodoro platform with exercises. NLW #04 Rocketseat.",
    },
    tags: ["React", "TypeScript"],
    category: "web",
    href: "https://moveit-beta-gold.vercel.app/",
    image:
      "https://user-images.githubusercontent.com/54003876/108790703-226de300-755c-11eb-9590-f958ff60c91d.png",
    live: true,
  },
  {
    id: "financeapp",
    title: "FinanceApp.js",
    description: {
      pt: "Lançamentos financeiros com várias contas em um só lugar.",
      en: "Finance tracker that brings multiple bank accounts together.",
    },
    tags: ["Next.js", "Node.js", "Prisma"],
    category: "web",
    href: "https://github.com/hsousadev/finapp-web-react",
    image:
      "https://s3-alpha.figma.com/hub/file/3650468509/38fd4283-8459-4fa9-8b5b-b057a26f9edc-cover.png",
  },
  {
    id: "ignite-ds",
    title: "Ignite Lab Design System",
    description: {
      pt: "Design system documentado com Storybook.",
      en: "Design system documented with Storybook.",
    },
    tags: ["React", "Storybook", "Design System"],
    category: "web",
    href: "https://github.com/hsousadev/ignite-lab-design-system",
    image:
      "https://user-images.githubusercontent.com/54003876/236646671-8b2e4383-cd70-4a14-8fec-bfe114d68e55.png",
  },
  {
    id: "spacetime",
    title: "Spacetime",
    description: {
      pt: "Cápsula do tempo de memórias. NLW Spacetime.",
      en: "A memories time-capsule app. NLW Spacetime.",
    },
    tags: ["Next.js", "Tailwind"],
    category: "web",
    href: "https://github.com/hsousadev/nlw-spacetime-web-react",
    image:
      "https://user-images.githubusercontent.com/54003876/239767355-8dc91004-9c47-4186-981d-e4556e99f569.png",
  },
  {
    id: "onecar",
    title: "OneCar",
    description: {
      pt: "App web e mobile para anúncios de venda de carros.",
      en: "Web and mobile app for car sales listings.",
    },
    tags: ["React", "React Native", "TypeScript"],
    category: "web",
    href: "https://github.com/OneCar-API",
    image:
      "https://user-images.githubusercontent.com/56441318/133950991-44ac40d3-c041-4c7a-b35b-bbf84abc9c37.png",
  },
  {
    id: "esports",
    title: "eSports",
    description: {
      pt: "Encontre o duo dos games. NLW eSports Rocketseat.",
      en: "Find your gaming duo. NLW eSports Rocketseat.",
    },
    tags: ["React", "React Native", "Node"],
    category: "web",
    href: "https://github.com/hsousadev/esports-nlw-rocketseat",
    image:
      "https://user-images.githubusercontent.com/54003876/192887123-c959a0c8-32b9-4715-b3fe-df670b74b642.png",
  },
  {
    id: "carson",
    title: "CarsOn",
    description: {
      pt: "App web para compra e venda de automóveis.",
      en: "Web app for buying and selling cars.",
    },
    tags: ["React", "TypeScript", "Node"],
    category: "web",
    href: "https://github.com/Cars-on",
    image:
      "https://user-images.githubusercontent.com/54003876/133915603-84a02ac8-f7a3-4c90-bca8-dca231fe6778.png",
  },
  {
    id: "letmeask",
    title: "LetMeAsk",
    description: {
      pt: "Perguntas e respostas em tempo real. NLW #05.",
      en: "Real-time Q&A platform. NLW #05.",
    },
    tags: ["React", "TypeScript", "SCSS"],
    category: "web",
    href: "https://github.com/hsousadev/esports-nlw-rocketseat",
    image:
      "https://user-images.githubusercontent.com/54003876/126014850-8c0dc36e-8aeb-4d1a-84c0-9a1c1e20c128.png",
  },
  {
    id: "typext",
    title: "Typext",
    description: {
      pt: "Criação e gerenciamento de atas digitais.",
      en: "Create and manage digital meeting minutes.",
    },
    tags: ["React", "TypeScript"],
    category: "web",
    href: "https://github.com/hsousadev/typext-frontend",
    image:
      "https://user-images.githubusercontent.com/56441371/112768034-52dbed80-8ff0-11eb-8a72-5190c56f1090.png",
  },
  {
    id: "proffy",
    title: "Proffy",
    description: {
      pt: "Plataforma online de estudos. NLW #02 Rocketseat.",
      en: "Online study platform. NLW #02 Rocketseat.",
    },
    tags: ["JavaScript", "HTML", "CSS"],
    category: "web",
    href: "https://github.com/hsousadev/proffy",
    image:
      "https://user-images.githubusercontent.com/54003876/107502115-07bc6700-6b77-11eb-8e13-58c757a4ec94.png",
  },
  {
    id: "biplan",
    title: "Biplan",
    description: {
      pt: "Plataforma de controle de produção e qualidade para pequenas empresas.",
      en: "Production and quality control platform for small businesses.",
    },
    tags: ["Design", "Identidade"],
    category: "design",
    href: "https://www.behance.net/gallery/115177581/Biplan",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/917280115177581.Y3JvcCwxMzgwLDEwODAsMjU2LDA.png",
  },
  {
    id: "carson-ui",
    title: "CarsOn UI",
    description: {
      pt: "Experiência e interfaces do app de compra e venda de automóveis.",
      en: "Experience and interfaces for a car sales web app.",
    },
    tags: ["UI Design"],
    category: "design",
    href: "https://www.figma.com/community/file/1162159871260028405",
    image:
      "https://s3-alpha.figma.com/hub/file/1925447461/b574f42b-f4dd-4b5f-8e3e-33218867b443-cover.png",
  },
  {
    id: "rubiti",
    title: "rubiti",
    description: {
      pt: "Marca especializada em soluções e tecnologias.",
      en: "Brand specialized in solutions and technology.",
    },
    tags: ["Design", "Logo"],
    category: "design",
    href: "https://www.behance.net/gallery/115181081/rubiti",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ec7093115181081.Y3JvcCwxNzg5LDE0MDAsMzI3LDA.png",
  },
  {
    id: "typext-ui",
    title: "Typext UI",
    description: {
      pt: "Interface do app de atas digitais.",
      en: "Interface for the digital minutes app.",
    },
    tags: ["UI Design"],
    category: "design",
    href: "https://www.figma.com/community/file/1162160606182370806",
    image:
      "https://s3-alpha.figma.com/hub/file/1683931930/e07eb0e5-54cb-48be-af3e-d796ee5eaf1b-cover.png",
  },
  {
    id: "matheus-portfolio",
    title: "Portfólio Matheus Campos",
    description: {
      pt: "Design criado para o desenvolvedor Matheus Campos.",
      en: "Design created for developer Matheus Campos.",
    },
    tags: ["UI Design"],
    category: "design",
    href: "https://www.figma.com/community/file/1162157859305054706",
    image:
      "https://s3-alpha.figma.com/hub/file/1878891985/cab9faa8-1376-4488-ab71-125e5832e138-cover.png",
  },
  {
    id: "rominfo",
    title: "Rominfo",
    description: {
      pt: "Identidade para serviços de infraestrutura e treinamentos em TI.",
      en: "Identity for IT infrastructure and training services.",
    },
    tags: ["Design", "Identidade"],
    category: "design",
    href: "https://www.behance.net/hsousadev",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f01cd8115183845.Y3JvcCwxMzgwLDEwODAsMzIxLDA.png",
  },
  {
    id: "instagram-dark",
    title: "Instagram Dark Mode",
    description: {
      pt: "Releitura do Instagram web com dark mode e novos elementos.",
      en: "Instagram web reimagined with dark mode and new elements.",
    },
    tags: ["UI Design", "Re-design"],
    category: "design",
    href: "https://www.figma.com/community/file/1162155986654328303",
    image:
      "https://s3-alpha.figma.com/hub/file/2424161642/ff58a337-4773-43ab-82d8-77b26214c837-cover.png",
  },
  {
    id: "nanoticia-ui",
    title: "Nanotícia UI",
    description: {
      pt: "Design system e paleta do agregador de notícias.",
      en: "Design system and palette for the news aggregator.",
    },
    tags: ["UI Design", "Palette"],
    category: "design",
    href: "https://www.figma.com/community/file/1225460016773089534",
    image:
      "https://user-images.githubusercontent.com/54003876/234693350-e9c7e550-f78b-484e-b67e-b92b02ff5d85.png",
  },
  {
    id: "financeapp-ui",
    title: "FinanceApp.js UI",
    description: {
      pt: "Interface e paleta do app de finanças.",
      en: "Interface and palette for the finance app.",
    },
    tags: ["UI Design", "Palette"],
    category: "design",
    href: "https://www.figma.com/community/file/1250517871747480571",
    image:
      "https://s3-alpha.figma.com/hub/file/3650468509/38fd4283-8459-4fa9-8b5b-b057a26f9edc-cover.png",
  },
  {
    id: "rick-morty-ui",
    title: "Rick and Morty UI",
    description: {
      pt: "Interface e paleta da wiki da série.",
      en: "Interface and palette for the series wiki.",
    },
    tags: ["UI Design", "Palette"],
    category: "design",
    href: "https://www.figma.com/community/file/1225458908057208058",
    image:
      "https://user-images.githubusercontent.com/54003876/245583973-6981008c-0103-4e96-9f81-d02ca218ddb1.png",
  },
  {
    id: "portfolio-ui",
    title: "Web Portfolio UI",
    description: {
      pt: "Design da versão anterior deste portfólio.",
      en: "Design of the previous version of this portfolio.",
    },
    tags: ["UI Design"],
    category: "design",
    href: "https://www.figma.com/community/file/1162385628597290713",
    image:
      "https://user-images.githubusercontent.com/54003876/245594812-c3f08d5a-638b-4f53-8877-f18c673a98d9.png",
  },
  {
    id: "uda-brasil",
    title: "UDA Brasil",
    description: {
      pt: "Pitch da aplicação.",
      en: "Application pitch.",
    },
    tags: ["Pitch"],
    category: "video",
    href: "https://www.youtube.com/watch?v=vIIeVExmZiM",
    image:
      "https://user-images.githubusercontent.com/54003876/84607266-b4c4cf80-ae82-11ea-9104-2166954a5197.png",
    video: true,
  },
  {
    id: "typext-video",
    title: "Typext",
    description: {
      pt: "Pitch da aplicação de atas digitais.",
      en: "Pitch for the digital minutes app.",
    },
    tags: ["Pitch"],
    category: "video",
    href: "https://www.youtube.com/watch?v=65Go1Nz3KBA",
    image:
      "https://user-images.githubusercontent.com/56441371/112768034-52dbed80-8ff0-11eb-8a72-5190c56f1090.png",
    video: true,
  },
  {
    id: "onecar-video",
    title: "OneCar",
    description: {
      pt: "Pitch do app de anúncios de carros.",
      en: "Pitch for the car listings app.",
    },
    tags: ["Pitch"],
    category: "video",
    href: "https://www.youtube.com/watch?v=LraPykzShIA",
    image:
      "https://user-images.githubusercontent.com/56441318/133950991-44ac40d3-c041-4c7a-b35b-bbf84abc9c37.png",
    video: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
