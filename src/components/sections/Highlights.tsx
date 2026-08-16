import { useEffect, useState } from "react";
import { professional } from "@/content/experience";
import { useLocale } from "@/i18n/locale";
import { AviationScene } from "@/components/visuals/AviationScene";
import { EducationScene } from "@/components/visuals/EducationScene";
import { FinanceScene } from "@/components/visuals/FinanceScene";
import { HudCell, SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const inform = professional.find((item) => item.id === "inform")!;
const intrabank = professional.find((item) => item.id === "intrabank")!;
const ensinio = professional.find((item) => item.id === "ensinio")!;

export function Highlights() {
  const { t } = useLocale();

  return (
    <Section
      id="highlights"
      index="02"
      kicker={t.highlights.kicker}
      title={t.highlights.title}
    >
      <Reveal>
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted md:-mt-6 md:mb-16 md:text-lg">
          {t.highlights.lead}
        </p>
      </Reveal>

      <div className="flex flex-col gap-8 md:gap-12">
        <Reveal>
          <InformCard />
        </Reveal>
        <Reveal delay={0.08}>
          <IntrabankCard />
        </Reveal>
        <Reveal delay={0.12}>
          <EnsinioCard />
        </Reveal>
      </div>
    </Section>
  );
}

function InformCard() {
  const { t } = useLocale();
  const [hud, setHud] = useState({ fl: 340, hdg: 318, tas: 462 });

  useEffect(() => {
    const id = window.setInterval(() => {
      setHud({
        fl: 330 + Math.round(Math.random() * 25),
        hdg: 300 + Math.round(Math.random() * 40),
        tas: 440 + Math.round(Math.random() * 50),
      });
    }, 900);
    return () => window.clearInterval(id);
  }, []);

  return (
    <SpotlightCard
      role={inform}
      badge={t.highlights.informBadge}
      chip={t.highlights.informChip}
      kicker={t.highlights.informKicker}
      tape={["GRU", "YYZ", "YVR", "ANC", "FAI", "YEG"]}
      visual={<AviationScene />}
      hud={
        <div className="grid grid-cols-3 gap-2 font-mono text-[10px] tracking-wider text-muted uppercase md:max-w-sm">
          <HudCell label="FL" value={String(hud.fl).padStart(3, "0")} />
          <HudCell label="HDG" value={`${hud.hdg}°`} />
          <HudCell label="TAS" value={`${hud.tas}kt`} />
        </div>
      }
    />
  );
}

function IntrabankCard() {
  const { t } = useLocale();
  const [hud, setHud] = useState({ nav: 101.4, apr: 15.6, ops: 164 });

  useEffect(() => {
    const id = window.setInterval(() => {
      setHud({
        nav: Number((98.8 + Math.random() * 4.2).toFixed(1)),
        apr: Number((14.1 + Math.random() * 2.6).toFixed(1)),
        ops: 148 + Math.round(Math.random() * 36),
      });
    }, 1100);
    return () => window.clearInterval(id);
  }, []);

  return (
    <SpotlightCard
      role={intrabank}
      badge={t.highlights.intrabankBadge}
      chip={t.highlights.intrabankChip}
      kicker={t.highlights.intrabankKicker}
      tape={["FIDC", "AUM", "COMPLIANCE", "CRÉDITO", "COMERCIAL"]}
      reverse
      visual={<FinanceScene />}
      hud={
        <div className="grid grid-cols-3 gap-2 font-mono text-[10px] tracking-wider text-muted uppercase md:max-w-sm">
          <HudCell label="NAV" value={hud.nav.toFixed(1)} />
          <HudCell label="APR" value={`${hud.apr.toFixed(1)}%`} />
          <HudCell label="OPS" value={String(hud.ops)} />
        </div>
      }
    />
  );
}

function EnsinioCard() {
  const { t } = useLocale();
  const [hud, setHud] = useState({ mod: 24, lps: 12, lvl: 0 });

  useEffect(() => {
    const id = window.setInterval(() => {
      setHud((prev) => ({
        mod: 18 + Math.round(Math.random() * 10),
        lps: 8 + Math.round(Math.random() * 8),
        lvl: prev.lvl ^ 1,
      }));
    }, 1400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <SpotlightCard
      role={ensinio}
      badge={t.highlights.ensinioBadge}
      chip={t.highlights.ensinioChip}
      kicker={t.highlights.ensinioKicker}
      tape={["LMS", "WHITE-LABEL", "MÓDULOS", "REACT", "NEXT"]}
      visual={<EducationScene />}
      hud={
        <div className="grid grid-cols-3 gap-2 font-mono text-[10px] tracking-wider text-muted uppercase md:max-w-sm">
          <HudCell label="MOD" value={String(hud.mod)} />
          <HudCell label="LPs" value={String(hud.lps)} />
          <HudCell
            label="LVL"
            value={hud.lvl ? t.highlights.mid : t.highlights.junior}
          />
        </div>
      }
    />
  );
}
