import { useEffect, useState } from 'react'

function ExperienceSection() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => setVisible(true), 900)
  }, [])

  return (
    <section id="experience" className="py-20 px-2 sm:px-4 lg:px-8 w-full max-w-full" style={{ backgroundColor: "#000814" }}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"></div>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Victus Global */}
          <div className="bg-gradient-to-r from-black/70 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Business Developer</h3>
                <h4 className="text-xl text-gray-400 font-semibold">Victus Global</h4>
              </div>
              <div className="text-gray-400 font-semibold text-lg">2024 - Present</div>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Leading business development initiatives and strategic partnerships to drive growth and expansion in the Web3 space.
            </p>
          </div>
          {/* BingX Exchange */}
          <div className="bg-gradient-to-r from-black/70 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Partner</h3>
                <h4 className="text-xl text-gray-400 font-semibold">BingX Exchange</h4>
              </div>
              <div className="text-gray-400 font-semibold text-lg">2025 - Present</div>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Strategic partnership focused on expanding crypto trading opportunities and community engagement across African markets.
            </p>
          </div>
          {/* MEXC Exchange */}
          <div className="bg-gradient-to-r from-black/70 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Affiliate</h3>
                <h4 class="text-xl text-gray-400 font-semibold">MEXC Exchange</h4>
              </div>
              <div className="text-gray-400 font-semibold text-lg">2024 - Present</div>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Driving user acquisition and community growth through strategic marketing campaigns and educational content.
            </p>
          </div>
          {/* Puff verse */}
          <div className="bg-gradient-to-r from-black/70 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Ambassador</h3>
                <h4 className="text-xl text-gray-400 font-semibold">Puff verse</h4>
              </div>
              <div className="text-gray-400 font-semibold text-lg">2024 - 2025</div>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Represented the brand and built community engagement through strategic outreach and content creation initiatives.
            </p>
          </div>
          {/* TokenRacer */}
          <div className="bg-gradient-to-r from-black/70 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">KOL</h3>
                <h4 className="text-xl text-gray-400 font-semibold">TokenRacer</h4>
              </div>
              <div className="text-gray-400 font-semibold text-lg">2025</div>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Driving community engagement and building awareness for TokenRacer through content, strategy, and direct user activation.
            </p>
          </div>
          {/* Odyssey of Fate */}
          <div className="bg-gradient-to-r from-black/70 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">KOL</h3>
                <h4 className="text-xl text-gray-400 font-semibold">Odyssey of Fate</h4>
              </div>
              <div className="text-gray-400 font-semibold text-lg">2025</div>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Promoting Odyssey of Fate by amplifying project updates, engaging the Web3 community, and boosting visibility across social platforms.
            </p>
          </div>
          {/* Prodigy.FI */}
          <div className="bg-gradient-to-r from-black/70 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">KOL</h3>
                <h4 className="text-xl text-gray-400 font-semibold">Prodigy.FI</h4>
              </div>
              <div className="text-gray-400 font-semibold text-lg">2025</div>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Supporting Prodigy.FI as a Key Opinion Leader by creating educational content, onboarding users, and highlighting project utilities.
            </p>
          </div>
          {/* Kolab Network */}
          <div className="bg-gradient-to-r from-black/70 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">KOL</h3>
                <h4 className="text-xl text-gray-400 font-semibold">Kolab Network</h4>
              </div>
              <div className="text-gray-400 font-semibold text-lg">2025</div>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Shaping conversations around Kolab Network by connecting with audiences, sharing insights, and enhancing brand presence.
            </p>
          </div>
          {/* BitMart Exchange */}
          <div className="bg-gradient-to-r from-black/70 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Listing Partner</h3>
                <h4 className="text-xl text-gray-400 font-semibold">BitMart Exchange</h4>
              </div>
              <div className="text-gray-400 font-semibold text-lg">2025</div>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Working with BitMart Exchange to support listings, drive exposure for new tokens, and expand their global reach in crypto markets.
            </p>
          </div>
          {/* Metadawgs */}
          <div className="bg-gradient-to-r from-black/70 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-400 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">KOL</h3>
                <h4 className="text-xl text-gray-400 font-semibold">Metadawgs</h4>
              </div>
              <div className="text-gray-400 font-semibold text-lg">2025 - Present</div>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Building visibility for Metadawgs by creating engaging content, driving community participation, and amplifying the project’s presence across the crypto space.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
