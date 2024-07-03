import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyProjects from "../MyProjects";
import MySkills from "../MySkills";
import Education from "../MyEducation";
import MyExperience from "../MyExperience";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Education />
      <MyExperience />
      <MyProjects />
      <MySkills />
      <ContactMe />
      <Footer />
    </>
  );
}
