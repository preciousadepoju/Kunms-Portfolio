import { useEffect, useState } from 'react'
import kunmsImg from '../assets/kunms.jpeg'

function HeroSection() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => setVisible(true), 300)
  }, [])

  return (
    <section className="pt-32 pb-20 px-2 sm:px-4 lg:px-8 w-full max-w-full" style={{ backgroundColor: "#000814" }}>
      <div className="max-w-7xl mx-auto w-full">
        {/* Responsive layout: image and text side by side on large screens */}
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-16 text-center lg:text-left">
          {/* Kunms Image */}
          <div className="flex justify-center lg:justify-end mb-6 lg:mb-0 lg:order-2">
            <img
              src={kunmsImg}
              alt="Kunms"
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-96 lg:h-96 rounded-full border-4 lg:border-8 border-gray-800 lg:border-gray-900 shadow-lg lg:shadow-2xl object-cover"
            />
          </div>
          {/* Texts */}
          <div className={`transition-all duration-1000 flex-1 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Kunms
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-200 mb-8">
              Business Developer, Marketer & Crypto Trader
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto lg:mx-0">
              Passionate about expanding crypto adoption and creating impactful growth strategies in the Web3 space
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="https://x.com/IamKunms"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-gray-700 text-gray-400 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                Follow on X
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
