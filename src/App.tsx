import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Highlights } from "@/components/sections/Highlights";
import { Catalog } from "@/components/sections/Catalog";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Recommendations } from "@/components/sections/Recommendations";
import { Contact } from "@/components/sections/Contact";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function App() {
  return (
    <div className="relative min-h-svh bg-bg text-text">
      <div className="grain" aria-hidden />
      <CursorGlow />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Catalog />
        <Experience />
        <Skills />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
