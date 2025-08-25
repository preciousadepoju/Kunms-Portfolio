import { useEffect, useState } from 'react'

function AboutSection() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => setVisible(true), 600)
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#000814" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-lg text-gray-200 leading-relaxed">
              I'm <span className="text-white font-semibold">Akinkunmi</span>, popularly known as <span className="text-gray-400 font-semibold">Kunms</span>,
              a dedicated business developer, marketer, and crypto trader passionate about expanding crypto adoption and creating impactful growth strategies.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              My journey in the blockchain and business space is fueled by a commitment to unlocking opportunities that
              decentralized finance and innovative marketing can bring to communities.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Through my work as a marketer and business developer, I've spearheaded dynamic campaigns and forged strategic
              partnerships that drive brand growth and community engagement.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              I believe in the transformative power of blockchain technology to reshape financial systems and empower
              individuals across Africa and beyond, building a future where access to opportunity is truly borderless.
            </p>
          </div>
          <div className="bg-gradient-to-br from-black/70 to-gray-900 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Languages</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-200">Yoruba</span>
                <span className="text-white font-semibold">Native</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-200">English</span>
                <span className="text-gray-400 font-semibold">Fluent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
