import { useEffect, useState } from 'react'
import Navigation from './Navigation'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import ExperienceSection from './ExperienceSection'
import SkillsSection from './SkillsSection'
import ContactSection from './ContactSection'
import Footer from './Footer'

function MainPage() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 transition-opacity duration-1000 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default MainPage
