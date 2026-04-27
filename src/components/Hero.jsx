import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiOpenai, SiLangchain, SiPython, SiDjango, SiReact, SiFastapi } from 'react-icons/si'

const techBadges = [
  { icon: SiPython,   label: 'Python',   color: 'text-yellow-400'  },
  { icon: SiFastapi,  label: 'FastAPI',  color: 'text-green-400'   },
  { icon: SiDjango,   label: 'Django',   color: 'text-emerald-400' },
  { icon: SiOpenai,   label: 'OpenAI',   color: 'text-white'       },
  { icon: SiReact,    label: 'React',    color: 'text-cyan-400'    },
]

const stats = [
  { value: '2+',   label: 'Years in Production' },
  { value: '20+',  label: 'APIs Shipped'         },
  { value: '10K+', label: 'Docs in RAG System'   },
  { value: '99.5%',label: 'Uptime Maintained'    },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div>
            {/* Profile photo + name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="relative flex-shrink-0">
                {/* Gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 via-accent-cyan to-accent-purple p-[2.5px] blur-[1px]" />
                <div className="relative w-16 h-16 rounded-full p-[2.5px] bg-gradient-to-br from-primary-500 via-accent-cyan to-accent-purple">
                  <img
                    src="/my profile.png"
                    alt="Umar Latif"
                    className="w-full h-full rounded-full object-cover object-top border-2 border-dark-900"
                  />
                </div>
                {/* Online dot */}
                <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-dark-900 animate-pulse" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight">Umar Latif</p>
                <p className="text-slate-400 text-sm">Full Stack &amp; AI Engineer</p>
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance &amp; full-time roles
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-4"
            >
              I build{' '}
              <span className="gradient-text">AI-powered</span>
              <br />
              backends that{' '}
              <span className="gradient-text">scale</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg"
            >
              Python backend engineer specializing in{' '}
              <span className="text-slate-200">LangChain RAG pipelines</span>,{' '}
              <span className="text-slate-200">FastAPI</span>, and{' '}
              <span className="text-slate-200">Django</span>. I've shipped a production
              legal AI SaaS from zero to paying users — and I bring that same
              delivery mindset to every engagement.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View Projects <HiArrowRight size={16} />
              </button>
              <a
                href="https://wa.me/923430823408"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                Hire Me
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/umardev82"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/umar-latif-b29b77257"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right — visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="glass-card p-8 relative overflow-hidden glow-primary">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-accent-cyan/5" />

                {/* Code snippet decoration */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    <span className="ml-2 text-xs text-slate-500 font-mono">rag_pipeline.py</span>
                  </div>

                  <div className="font-mono text-sm space-y-1.5 text-slate-400">
                    <p><span className="text-primary-400">from</span> <span className="text-accent-cyan">langchain</span> <span className="text-primary-400">import</span> RetrievalQA</p>
                    <p><span className="text-primary-400">from</span> <span className="text-accent-cyan">qdrant_client</span> <span className="text-primary-400">import</span> QdrantClient</p>
                    <p className="pt-2"><span className="text-accent-purple">class</span> <span className="text-yellow-300">LegalRAGPipeline</span>:</p>
                    <p className="pl-4"><span className="text-accent-purple">def</span> <span className="text-green-400">__init__</span><span className="text-white">(self):</span></p>
                    <p className="pl-8 text-slate-500"># 10,000+ legal docs indexed</p>
                    <p className="pl-8"><span className="text-slate-300">self.vectordb</span> = <span className="text-yellow-300">QdrantClient</span>(...)</p>
                    <p className="pl-8"><span className="text-slate-300">self.llm</span> = <span className="text-yellow-300">ChatOpenAI</span>(</p>
                    <p className="pl-12"><span className="text-accent-cyan">model</span>=<span className="text-orange-300">"gpt-4"</span></p>
                    <p className="pl-8">)</p>
                    <p className="pl-4 pt-1"><span className="text-accent-purple">def</span> <span className="text-green-400">query</span><span className="text-white">(self, question):</span></p>
                    <p className="pl-8 text-slate-500"># sub-2s response time</p>
                    <p className="pl-8"><span className="text-primary-400">return</span> <span className="text-slate-300">self.chain</span>.<span className="text-green-400">run</span>(question)</p>
                  </div>

                  {/* Stats row */}
                  <div className="mt-8 pt-6 border-t border-white/[0.06] grid grid-cols-2 gap-4">
                    {stats.slice(0, 4).map((s) => (
                      <div key={s.label}>
                        <div className="text-2xl font-bold gradient-text">{s.value}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass-card px-3 py-2 flex items-center gap-2"
              >
                <SiOpenai size={14} className="text-white" />
                <span className="text-xs font-medium text-slate-300">GPT-4 Powered</span>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-card px-3 py-2 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-slate-300">Live on AWS</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tech badge strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/[0.06]"
        >
          <p className="text-xs text-slate-600 uppercase tracking-widest mb-4">Core stack</p>
          <div className="flex flex-wrap gap-3">
            {techBadges.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-sm text-slate-400 hover:border-white/10 transition-all"
              >
                <Icon size={15} className={color} />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
