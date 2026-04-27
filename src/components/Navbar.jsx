import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Services',   href: '#services'   },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" onClick={() => handleNav('#hero')} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary-900/50 group-hover:scale-110 transition-transform">
            UL
          </div>
          <span className="font-semibold text-white tracking-tight hidden sm:block">Umar Latif</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                className="px-3.5 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all duration-200"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-dark-800/95 backdrop-blur-xl border-b border-white/[0.06] px-4 pb-4"
          >
            <ul className="flex flex-col gap-1 pt-2">
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
