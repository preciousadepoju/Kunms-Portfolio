function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50 bg-slate-950/50 relative z-10 w-full max-w-full backdrop-blur-md">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 inline-block">
          Kunms
        </div>
        <p className="text-slate-400 mb-6 max-w-md mx-auto">
          Building the future of decentralized finance, one partnership at a time.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://x.com/IamKunms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 font-medium transition-colors"
          >
            Follow on X
          </a>
          <a
            href="mailto:akinkunmiakanmu40@gmail.com"
            className="text-slate-400 hover:text-cyan-400 font-medium transition-colors"
          >
            Email
          </a>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800/50">
          <p className="text-slate-500 text-sm">
            © 2025 Kunms. Building bridges in the Web3 ecosystem.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
