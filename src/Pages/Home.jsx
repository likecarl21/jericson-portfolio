import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Projects from "../sections/Projects/Projects";
import Experience from "../sections/Experience/Experience";
import Contact from "../sections/Contact/Contact";
import LearningTools from "../components/LearningTools";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <LearningTools />
      <Contact />
    </>
  );
}

export default Home;