import { useEffect, useState } from 'react'

function ContactSection() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => setVisible(true), 1500)
  }, [])

  return (
    <section id="contact" className="py-20 px-2 sm:px-4 lg:px-8 w-full max-w-full" style={{ backgroundColor: "#000814" }}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-to-br from-black/80 to-gray-900 p-12 rounded-3xl border border-gray-700 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Let's Build the Future Together</h3>
              <p className="text-xl text-gray-200">
                Ready to explore opportunities in Web3, crypto trading, or business development? Let's connect!
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Email */}
              <a
                href="mailto:akinkunmiakanmu40@gmail.com"
                className="flex flex-col sm:flex-row items-center p-6 bg-gradient-to-r from-black/70 to-gray-800 rounded-2xl border border-gray-700 hover:border-white transition-all duration-300 transform hover:scale-105 w-full"
              >
                <div className="text-4xl sm:mr-6 mb-4 sm:mb-0">📧</div>
                <div className="text-center sm:text-left">
                  <h4 className="text-xl font-bold text-white mb-2">Email</h4>
                  <p className="text-gray-300 break-all">akinkunmiakanmu40@gmail.com</p>
                </div>
              </a>
              {/* Twitter/X */}
              <a
                href="https://x.com/IamKunms"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-center p-6 bg-gradient-to-r from-gray-900 to-black rounded-2xl border border-gray-700 hover:border-white transition-all duration-300 transform hover:scale-105 w-full"
              >
                <div className="text-4xl sm:mr-6 mb-4 sm:mb-0">🐦</div>
                <div className="text-center sm:text-left">
                  <h4 className="text-xl font-bold text-white mb-2">Follow on X</h4>
                  <p className="text-gray-300 break-all">@IamKunms</p>
                </div>
              </a>
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-300 text-lg">
                Open to partnerships, collaborations, and exciting Web3 opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
