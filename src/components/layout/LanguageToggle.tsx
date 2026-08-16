import { useLocale } from "@/i18n/locale";
import { cn } from "@/lib/cn";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-1 text-xs font-medium tracking-wide">
      {(["pt", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors",
            locale === code
              ? "bg-accent text-accent-on"
              : "text-muted hover:text-text",
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
