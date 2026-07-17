import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import {
  HiChatAlt2, HiCode, HiLink, HiServer, HiCube,
} from 'react-icons/hi'

const services = [
  {
    icon: HiChatAlt2,
    title: 'AI Chatbot Development',
    sub: 'RAG · LangChain · OpenAI APIs',
    desc: 'End-to-end intelligent chatbots and conversational agents with memory, tool-calling, and retrieval-augmented generation — grounded in your actual documents and data.',
    tech: ['LangChain', 'OpenAI GPT-4', 'Qdrant', 'RAG Pipelines', 'FastAPI', 'Prompt Engineering'],
    value: 'Automate expert-level Q&A, reduce support overhead, and unlock your knowledge base for instant semantic search.',
    accent: 'from-primary-600/25 to-accent-cyan/10',
    border: 'group-hover:border-primary-400/40',
  },
  {
    icon: HiServer,
    title: 'Scalable Backend Systems',
    sub: 'FastAPI · Django · PostgreSQL',
    desc: 'Production-grade REST APIs and backend services engineered for performance — with query optimization, caching layers, and authentication baked in from day one.',
    tech: ['FastAPI', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Celery', 'JWT Auth'],
    value: 'APIs that handle real traffic, stay fast under load, and give your frontend team clean, documented contracts.',
    accent: 'from-accent-cyan/20 to-primary-600/10',
    border: 'group-hover:border-accent-cyan/40',
  },
  {
    icon: HiCode,
    title: 'Full Stack Web Development',
    sub: 'React · Django · PostgreSQL',
    desc: 'Complete web applications — from database schema to React UI — with role-based auth, automated business logic, and clean API-to-frontend integration.',
    tech: ['React.js', 'Django', 'DRF', 'PostgreSQL', 'Tailwind CSS', 'Swagger / OpenAPI'],
    value: 'Ship a full product without stitching together a fragmented team — one engineer who owns the whole stack.',
    accent: 'from-accent-coral/15 to-primary-600/10',
    border: 'group-hover:border-accent-coral/35',
  },
  {
    icon: HiLink,
    title: 'API Development & Integration',
    sub: 'REST · Webhooks · Third-party APIs',
    desc: 'Reliable API design following REST best practices, plus seamless integration with payment gateways (Stripe), external services, and legacy systems.',
    tech: ['FastAPI', 'Django DRF', 'Stripe', 'Postman', 'OpenAPI', 'Webhook Handlers'],
    value: 'Connect your systems cleanly — with proper error handling, idempotency, and documentation your team will thank you for.',
    accent: 'from-emerald-500/15 to-accent-cyan/10',
    border: 'group-hover:border-emerald-500/40',
  },
  {
    icon: HiCube,
    title: 'AI-Powered SaaS Applications',
    sub: 'LLM Pipelines · Subscriptions · AWS',
    desc: 'Full-stack SaaS products combining LLM capabilities with subscription billing, user management, and cloud deployment — ready for paying customers from launch.',
    tech: ['FastAPI', 'LangChain', 'Stripe', 'AWS EC2/S3/RDS', 'Docker', 'GitHub Actions'],
    value: 'Go from idea to a monetizable, cloud-deployed AI product without accumulating tech debt along the way.',
    accent: 'from-accent-peach/15 to-primary-600/10',
    border: 'group-hover:border-accent-peach/40',
  },
]

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-dark-800/35">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-tag">Services</span>
          <h2 className="section-heading mb-4">
            What I build for{' '}
            <span className="gradient-text">you</span>
          </h2>
          <p className="section-sub mx-auto">
            Focused on the problems that matter most — AI integration, API performance, and
            shipping production systems that stay up.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, sub, desc, tech, value, accent, border }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group glass-card p-6 flex flex-col gap-5 hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300 ${border}`}
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center border border-white/[0.07]`}>
                <Icon size={20} className="text-white/85" />
              </div>

              <div>
                <h3 className="font-display font-semibold text-white text-base mb-1">{title}</h3>
                <p className="text-xs text-primary-300 font-mono mb-3">{sub}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {tech.map((t) => (
                  <span key={t} className="skill-badge text-[11px]">{t}</span>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-white/[0.06]">
                <p className="text-xs text-slate-500 leading-relaxed">
                  <span className="text-primary-300 font-medium">Business value: </span>
                  {value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
