import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center text-white font-bold text-xs">
            UL
          </div>
          <span className="text-sm text-slate-500">
            Umar Latif · Python AI Backend Engineer
          </span>
        </div>

        <div className="flex items-center gap-1">
          {[
            { icon: FiMail,     href: 'mailto:umardev82@gmail.com',                  label: 'Email'    },
            { icon: FiGithub,   href: 'https://github.com/umardev82',                label: 'GitHub'   },
            { icon: FiLinkedin, href: 'https://linkedin.com/in/umar-latif-b29b77257',label: 'LinkedIn' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="p-2.5 text-slate-600 hover:text-slate-300 transition-colors rounded-lg hover:bg-white/[0.04]"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-xs text-slate-700">
          © {year} Umar Latif. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
