import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { SITE_CONFIG, SITE_CONTENT } from "@/config";

export default function Home() {
  return (
    <>
      <Header siteLogo={SITE_CONFIG.siteLogo} navLinks={SITE_CONFIG.navLinks} />
      <main className="mx-auto max-w-3xl px-5">
        <Hero {...SITE_CONTENT.hero} />
        <Experience experience={SITE_CONTENT.experience} />
        <Skills />
        {/* <Projects projects={SITE_CONTENT.projects} /> */}
        <About {...SITE_CONTENT.about} name={SITE_CONTENT.hero.name} />
      </main>
      <Footer author={SITE_CONFIG.author} socialLinks={SITE_CONFIG.socialLinks} />
    </>
  );
}
