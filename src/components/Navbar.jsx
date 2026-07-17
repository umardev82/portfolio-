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
          ? 'bg-dark-900/75 backdrop-blur-xl border-b border-white/[0.06] shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#hero" onClick={() => handleNav('#hero')} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center text-white font-display font-bold text-sm shadow-lift group-hover:scale-105 transition-transform">
            UL
          </div>
          <span className="font-display font-semibold text-white tracking-tight hidden sm:block">
            Umar Latif
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-0.5">
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
          <li className="ml-2">
            <button
              onClick={() => handleNav('#contact')}
              className="px-4 py-2 text-sm font-medium rounded-xl bg-primary-500/15 text-primary-300 border border-primary-500/25 hover:bg-primary-500/25 hover:text-white transition-all"
            >
              Hire me
            </button>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-dark-800/95 backdrop-blur-xl border-b border-white/[0.06] px-4 pb-5"
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
              <li className="pt-2 px-2">
                <button
                  onClick={() => handleNav('#contact')}
                  className="w-full btn-primary justify-center"
                >
                  Hire me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
