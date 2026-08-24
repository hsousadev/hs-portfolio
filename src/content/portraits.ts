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
];
