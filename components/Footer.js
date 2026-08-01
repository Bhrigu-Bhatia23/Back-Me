import React from 'react'

const Footer = () => {
  const CurrentYear = new Date().getFullYear();
  return (
    <footer className="mx-0 bg-[#030712]/60 backdrop-blur-xl border-t border-white/10 p-1 flex justify-between items-center gap-2">
      <span className="mx-2 text-gray-500 text-sm">© {CurrentYear} BackMe. All rights reserved.</span>
      <p className="text-gray-500 text-sm mx-2">
        made with ❤️ by <a href="https://github.com/Bhrigu-Bhatia23" className="text-blue-500 hover:underline">Bhrigu</a>
      </p>
    </footer>
  )
}

export default Footer
