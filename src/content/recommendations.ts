import type { Locale } from "@/i18n/messages";

export type Recommendation = {
  id: string;
  quote: Record<Locale, string>;
  name: string;
  role: Record<Locale, string>;
  avatar: string;
};

export const recommendations: Recommendation[] = [
  {
    id: "silvio",
    quote: {
      pt: "Henrique é muito engajado, uma pessoa de coração enorme e um ótimo profissional. Alegra as pessoas ao seu redor e se comunica muito bem. Sugere e compartilha coisas com o time, e busca agregar valor. Foi muito legal trabalhar ao lado dele e acompanhar a evolução ao longo de 19 meses.",
      en: "Henrique is highly engaged, generous, and a great professional. He lifts the people around him and communicates clearly. He shares with the team and genuinely adds value. It was a pleasure working with him and watching him grow over 19 months.",
    },
    name: "Silvio Marques",
    role: {
      pt: "Tech Lead na Ensinio",
      en: "Tech Lead at Ensinio",
    },
    avatar: "https://avatars.githubusercontent.com/u/43392489?v=4",
  },
  {
    id: "romario",
    quote: {
      pt: "O Washington está sempre estudando e aprendendo, buscando aprimorar o que faz. Essa é sua melhor qualidade. Focado, organizado e, tecnicamente, no que se propõe a fazer, faz bem feito. Sempre.",
      en: "Washington is always studying and improving what he does. That is his best quality. Focused, organized, and technically solid — he does the work well. Always.",
    },
    name: "Romário Lima",
    role: {
      pt: "Engenheiro da Computação",
      en: "Computer Engineer",
    },
    avatar: "/people/romario-lima.jpeg",
  },
  {
    id: "marcelo",
    quote: {
      pt: "Criativo. Este é o Henrique que trabalhou na SuperGeeks. Estimado pelos alunos e autor de artes como o informativo semanal para os pais. A desenvoltura nas apresentações dos trabalhos finais merece destaque.",
      en: "Creative. That is Henrique at SuperGeeks. Respected by students and author of pieces like the weekly parent newsletter. His presence leading final presentations stood out.",
    },
    name: "Me. Marcelo Guido",
    role: {
      pt: "Educação, redes e segurança da informação",
      en: "Education, networks, and information security",
    },
    avatar: "/people/marcelo-guido.jpeg",
  },
  {
    id: "matheus",
    quote: {
      pt: "O Henrique é esforçado, dedicado e objetivo. Tem ciência das forças e fraquezas, e por isso está sempre em busca de melhorias. Tenho ele como inspiração para se tornar um ótimo profissional.",
      en: "Henrique is hardworking, dedicated, and focused. He knows his strengths and gaps, and that is why he keeps improving. I see him as inspiration to become a great professional.",
    },
    name: "Matheus Campos",
    role: {
      pt: "Front-end na Ensinio",
      en: "Front-end at Ensinio",
    },
    avatar: "https://avatars.githubusercontent.com/u/56457600?v=4",
  },
  {
    id: "anderson",
    quote: {
      pt: "Trabalhei com o Henrique no começo da carreira e a evolução é contínua. Depois fui seu cliente: confiei a ele o nascimento de uma marca, sem dúvida quanto à qualidade do trabalho.",
      en: "I worked with Henrique at the start of his career and the growth has been continuous. Later I became his client: I trusted him with a new brand, with no doubt about the quality of the work.",
    },
    name: "Anderson Brandão",
    role: {
      pt: "Head of Engineering na xCoreEng",
      en: "Head of Engineering at xCoreEng",
    },
    avatar: "https://avatars.githubusercontent.com/u/1855228?v=4",
  },
];
