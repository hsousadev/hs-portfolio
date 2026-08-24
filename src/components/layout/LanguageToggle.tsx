import { useLocale } from "@/i18n/locale";
import { cn } from "@/lib/cn";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-2 font-mono text-[11px] font-medium tracking-[0.14em]">
      {(["pt", "en"] as const).map((code, index) => (
        <span key={code} className="flex items-center gap-2">
          {index > 0 && (
            <span className="text-border" aria-hidden>
              /
            </span>
          )}
          <button
            type="button"
            onClick={() => setLocale(code)}
            className={cn(
              "uppercase transition-colors",
              locale === code ? "text-text" : "text-muted hover:text-text",
            )}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );
}
