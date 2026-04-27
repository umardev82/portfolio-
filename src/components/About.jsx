import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { HiCheckCircle } from 'react-icons/hi'

const highlights = [
  'Built and shipped a production RAG-based legal AI SaaS (BearisterAI) from zero to paying subscribers',
  'Maintained ~99.5% uptime across 3 cloud-deployed Django applications on AWS',
  'Reduced API response latency by ~40% through query optimization and Redis caching',
  'Cut deployment cycle time by 60% with GitHub Actions CI/CD and Docker',
  'BS Computer Science — The Islamia University of Bahawalpur (2020–2024)',
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">About</span>
            <h2 className="section-heading mb-6">
              Shipping AI systems that work{' '}
              <span className="gradient-text">in the real world</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a Python backend engineer with over two years of production experience building
                scalable REST APIs, LLM-integrated applications, and cloud-deployed services.
                My focus is on systems that are reliable under load — not just demos that work once.
              </p>
              <p>
                At <span className="text-slate-200">Innovative Tech Dev</span>, I architect and maintain
                API infrastructure supporting multiple concurrent products, and I shipped BearisterAI —
                a subscription-based legal AI assistant that indexes 10,000+ documents and answers
                legal queries with sub-2s response times using a RAG pipeline I designed end-to-end.
              </p>
              <p>
                My background spans the full backend lifecycle: database schema design, caching strategy,
                LLM pipeline integration, CI/CD automation, and cloud deployment. I write code that
                future engineers can maintain, and I measure my work by the outcomes it produces —
                latency numbers, uptime percentages, and business value delivered.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="glass-card p-8 space-y-4">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
                At a glance
              </h3>
              {highlights.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <HiCheckCircle size={18} className="text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 leading-relaxed">{point}</span>
                </motion.div>
              ))}

              <div className="mt-8 pt-6 border-t border-white/[0.06] grid grid-cols-3 gap-4 text-center">
                {[
                  { n: '2+',   l: 'Years exp.'     },
                  { n: '20+',  l: 'APIs shipped'   },
                  { n: '3',    l: 'SaaS products'  },
                ].map(({ n, l }) => (
                  <div key={l}>
                    <div className="text-2xl font-bold gradient-text">{n}</div>
                    <div className="text-xs text-slate-500 mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
