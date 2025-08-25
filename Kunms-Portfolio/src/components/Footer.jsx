import { useEffect, useState } from 'react'

function Footer() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => setVisible(true), 1800)
  }, [])

  return (
    <footer
      className={`py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundColor: "#000814" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
          Kunms
        </div>
        <p className="text-gray-300 mb-6">
          Building the future of decentralized finance, one partnership at a time.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://x.com/IamKunms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Follow on X
          </a>
          <a
            href="mailto:akinkunmiakanmu40@gmail.com"
            className="text-gray-300 hover:text-gray-400 transition-colors"
          >
            Email
          </a>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © 2025 Kunms. Building bridges in the Web3 ecosystem.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
