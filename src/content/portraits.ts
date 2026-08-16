import type { Locale } from "@/i18n/messages";

export type Portrait = {
  id: string;
  src: string;
  object: string;
  label: Record<Locale, string>;
  alt: Record<Locale, string>;
};

export const portraits: Portrait[] = [
  {
    id: "studio",
    src: "/people/henrique-picture-1.jpg",
    object: "object-[center_12%]",
    label: { pt: "Retrato", en: "Portrait" },
    alt: {
      pt: "Retrato em preto e branco de Henrique Sousa",
      en: "Black and white portrait of Henrique Sousa",
    },
  },
  {
    id: "pace",
    src: "/people/henrique-picture-2.png",
    object: "object-[center_18%]",
    label: { pt: "Ritmo", en: "Pace" },
    alt: {
      pt: "Henrique Sousa correndo em uma prova",
      en: "Henrique Sousa running a race",
    },
  },
  {
    id: "horizon",
    src: "/people/henrique-picture-3.jpg",
    object: "object-[center_40%]",
    label: { pt: "Horizonte", en: "Horizon" },
    alt: {
      pt: "Henrique Sousa no Rio de Janeiro ao pôr do sol",
      en: "Henrique Sousa in Rio de Janeiro at sunset",
    },
  },
];
