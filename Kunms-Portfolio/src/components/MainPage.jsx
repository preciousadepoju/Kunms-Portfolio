import { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

function MainPage() {
  useEffect(() => {
    // Optionally setup any global stuff here
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-950 text-slate-100 selection:bg-cyan-500/30">
      {/* Animated Background gradients/blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-900/20 blur-[120px]"></div>
        <div className="absolute top-[30%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-purple-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-blue-900/20 blur-[120px]"></div>
      </div>

      {/* Content wrapper with z-index to sit above background blobs */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
