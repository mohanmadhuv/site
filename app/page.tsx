import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Work from "./components/Work";
import About from "./components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-[120px] pb-[120px] flex flex-col gap-[120px]">
      <Hero />
      <Projects />
      <Work />
      <About />
    </main>
  );
}
