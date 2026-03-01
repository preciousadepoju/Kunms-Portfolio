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
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 70, 0], y: [0, -50, 0], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-900/30 blur-[120px]"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1, 1.4, 1], x: [0, -80, 0], y: [0, 80, 0], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-purple-900/30 blur-[120px]"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, 60, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-blue-900/30 blur-[120px]"
        ></motion.div>
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
