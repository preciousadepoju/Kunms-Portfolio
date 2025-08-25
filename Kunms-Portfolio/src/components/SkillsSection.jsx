import { useEffect, useState } from 'react'
import StyledWrapper from './StyledWrapper'

function SkillsSection() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => setVisible(true), 1200)
  }, [])

  return (
    <section id="skills" className={`py-20 px-2 sm:px-4 lg:px-8 w-full max-w-full ${visible ? 'animate-rotateIn' : ''}`} style={{ backgroundColor: "#000814" }}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 animate-rotateIn" style={{ animationDelay: visible ? '1.2s' : '0s', animationFillMode: 'both', opacity: visible ? 1 : 0 }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"></div>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn`} style={{ animationDelay: visible ? '1.3s' : '0s', animationFillMode: 'both', opacity: visible ? 1 : 0 }}>
          {/* Marketing */}
          <div className="bg-gradient-to-br from-black/70 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-2xl font-bold text-white mb-4">Marketing</h3>
            <p className="text-gray-300">Strategic marketing campaigns and brand growth initiatives in the Web3 space.</p>
          </div>
          {/* Trading */}
          <div className="bg-gradient-to-br from-black/70 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">💹</div>
            <h3 className="text-2xl font-bold text-white mb-4">Trading</h3>
            <p className="text-gray-300">Expert crypto trading with technical and fundamental analysis expertise.</p>
          </div>
          {/* Community Building */}
          <div className="bg-gradient-to-br from-black/70 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-white mb-4">Community Building</h3>
            <p className="text-gray-300">Building and nurturing engaged communities around Web3 projects and brands.</p>
          </div>
          {/* Business Development */}
          <div className="bg-gradient-to-br from-black/70 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Business Development</h3>
            <p className="text-gray-300">Strategic partnerships and growth initiatives that drive business expansion.</p>
          </div>
          {/* Content Creation */}
          <div className="bg-gradient-to-br from-black/70 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">✍️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Content Creation</h3>
            <p className="text-gray-300">Engaging content that educates and inspires Web3 communities.</p>
          </div>
          {/* Public Speaking */}
          <div className="bg-gradient-to-br from-black/70 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🎤</div>
            <h3 className="text-2xl font-bold text-white mb-4">Public Speaking</h3>
            <p className="text-gray-300">Compelling presentations and thought leadership in blockchain and crypto.</p>
          </div>
        </div>
        {/* <StyledWrapper>
          <button className="animated-button">
            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
            </svg>
            <span className="text">Skills</span>
            <span className="circle" />
            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
            </svg>
          </button>
        </StyledWrapper> */}
      </div>
    </section>
  )
}

export default SkillsSection
