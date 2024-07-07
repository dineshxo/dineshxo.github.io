import Contact from "@/components/contact";
import HeroSection from "@/components/hero_section";
import Grid from "@/components/highlight-grid/grid";
import Macbook from "@/components/macbook";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Grid />
      <Macbook />

      <Projects />
      <Contact />
    </main>
  );
}
