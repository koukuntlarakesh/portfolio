import Navbar from "@/components/Navbar";
import ClientVideoIntro from "@/components/ClientVideoIntro";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div id="home">
          <ClientVideoIntro />
        </div>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
