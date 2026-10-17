import { MotionConfig } from "framer-motion";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import Marquee from "./Marquee";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

function MainPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain min-h-screen w-full overflow-x-clip bg-ink text-cream">
        <Navigation />
        <main>
          <HeroSection />
          <Marquee />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default MainPage;
