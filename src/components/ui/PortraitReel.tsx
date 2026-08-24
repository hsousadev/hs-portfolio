import { portraits } from "@/content/portraits";
import { useLocale } from "@/i18n/locale";
import { cn } from "@/lib/cn";
import { FadeFrame } from "@/components/ui/FadeRule";

const shot = portraits[0];

export function PortraitReel() {
  const { locale } = useLocale();

  return (
    <figure className="relative">
      <FadeFrame />
      <div className="relative aspect-4/5 overflow-hidden bg-elevated">
        <img
          src={shot.src}
          alt={shot.alt[locale]}
          className={cn("h-full w-full object-cover", shot.object)}
          draggable={false}
        />
      </div>
    </figure>
  );
}
