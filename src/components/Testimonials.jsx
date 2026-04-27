import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { HiStar, HiChatAlt } from 'react-icons/hi'

const placeholders = [
  {
    name: 'Client Name',
    role: 'Founder, SaaS Startup',
    text: 'Your testimonial will appear here. If we\'ve worked together, I\'d love your feedback — reach out via email.',
  },
  {
    name: 'Client Name',
    role: 'CTO, Tech Company',
    text: 'Your testimonial will appear here. Clients and collaborators are welcome to share their experience.',
  },
  {
    name: 'Client Name',
    role: 'Product Manager',
    text: 'Your testimonial will appear here. Honest reviews help future clients understand what to expect.',
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView()

  return (
    <section className="py-24 px-4 sm:px-6 bg-dark-800/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-tag">Testimonials</span>
          <h2 className="section-heading mb-4">
            What clients{' '}
            <span className="gradient-text">say</span>
          </h2>
          <p className="section-sub mx-auto">
            Placeholder structure — testimonials from real clients will be added here.
            Have we worked together?{' '}
            <a href="mailto:umardev82@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors">
              Send a review.
            </a>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {placeholders.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 border border-dashed border-white/[0.06] relative overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                <HiChatAlt size={120} />
              </div>

              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <HiStar key={si} size={14} className="text-slate-600" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 italic leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-dark-500 to-dark-600 border border-white/[0.06]" />
                  <div>
                    <p className="text-sm font-medium text-slate-600">{t.name}</p>
                    <p className="text-xs text-slate-700">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
