import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { HiExternalLink, HiCode, HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'

const projects = [
  {
    tag: 'AI SaaS · Production',
    tagColor: 'text-primary-400 bg-primary-500/10 border-primary-500/20',
    title: 'BearisterAI',
    subtitle: 'Legal AI Assistant — Production SaaS',
    url: 'https://bearister.ai',
    problem:
      'Law firms and individual clients spend hours manually searching through case law and legal documents to answer specific questions. The process is slow, inconsistent, and inaccessible to smaller practices.',
    solution:
      'Built a subscription-based AI legal assistant using a RAG pipeline that ingests, indexes, and retrieves from 10,000+ legal documents. Users get accurate, citation-grounded answers in under 2 seconds — at any scale.',
    stack: ['FastAPI', 'LangChain', 'OpenAI GPT-4', 'Qdrant', 'PostgreSQL', 'AWS EC2/S3/RDS', 'Stripe', 'Docker', 'JWT'],
    features: [
      'RAG pipeline with semantic vector search over 10,000+ legal documents',
      'Sub-2s query response time via Qdrant vector retrieval + GPT-4',
      'Stripe subscription integration with free / premium tier access control',
      'JWT-based authentication with role-level permission enforcement',
      'Containerized deployment on AWS EC2 with S3 for document storage',
      'Multi-turn conversational memory with context retention across sessions',
    ],
    outcomes: [
      { metric: '< 2s',   label: 'average query response' },
      { metric: '10K+',   label: 'legal documents indexed' },
      { metric: '99.5%',  label: 'service uptime on AWS'  },
      { metric: 'Stripe', label: 'live subscription billing' },
    ],
    gradient: 'from-primary-600/20 via-accent-purple/10 to-transparent',
  },
  {
    tag: 'Web App · Django',
    tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    title: 'Toornoi',
    subtitle: 'Sports Tournament Management Platform',
    url: null,
    problem:
      'Organizing competitive sports tournaments manually creates chaos — bracket management, schedule coordination, registration, and payment collection are all handled through spreadsheets and group chats.',
    solution:
      'Designed and shipped a comprehensive tournament management system with automated bracket generation, real-time scheduling, player registration flows, and Stripe-integrated payment — handling 200+ concurrent users.',
    stack: ['Django', 'Django REST Framework', 'PostgreSQL', 'Stripe', 'Python'],
    features: [
      'Automated bracket generation supporting single/double elimination formats',
      'Real-time schedule tracking and deadline enforcement engine',
      'Player registration with Stripe payment integration for entry fees',
      'Role-based admin controls for tournament creation and category management',
      'Scalable to 200+ concurrent users with optimized database queries',
    ],
    outcomes: [
      { metric: '200+',   label: 'concurrent users supported' },
      { metric: 'Auto',   label: 'bracket generation'         },
      { metric: 'Stripe', label: 'payment integration'        },
      { metric: 'RBAC',   label: 'role-based access'          },
    ],
    gradient: 'from-emerald-600/15 via-accent-cyan/10 to-transparent',
  },
  {
    tag: 'Full Stack · React',
    tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    title: 'Society Management System',
    subtitle: 'Residential Society Administration Portal',
    url: null,
    problem:
      'Residential society management involves monthly billing, member tracking, and admin workflows that were previously handled entirely by hand — error-prone, slow, and hard to audit.',
    solution:
      'Built a full-stack portal with a React frontend consuming a Django REST API. Features automated monthly billing, role-based access for admins and members, and a complete audit trail — reducing billing processing time by 70%.',
    stack: ['Django REST Framework', 'React.js', 'PostgreSQL', 'JWT Auth', 'Python'],
    features: [
      'Automated monthly billing engine replacing manual calculation workflows',
      'Role-based access control: admin vs. member permission scopes',
      'JWT authentication with secure session management',
      'Full admin dashboard for member management and billing oversight',
      'RESTful API with Swagger/OpenAPI documentation',
      'React.js frontend with real-time data fetching and state management',
    ],
    outcomes: [
      { metric: '70%',    label: 'faster billing processing'  },
      { metric: 'RBAC',   label: 'admin + member roles'       },
      { metric: 'REST',   label: 'fully documented API'       },
      { metric: 'React',  label: 'full-stack delivery'        },
    ],
    gradient: 'from-cyan-600/15 via-primary-600/10 to-transparent',
  },
]

function ProjectCard({ project, index, inView }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="glass-card overflow-hidden border border-white/[0.06] hover:border-white/10 transition-all duration-300"
    >
      {/* Top gradient stripe */}
      <div className={`h-1 bg-gradient-to-r ${project.gradient.replace('via-', 'to-').split(' to-transparent')[0]}`} />

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <span className={`inline-flex text-xs font-medium px-2.5 py-1 rounded-full border mb-3 ${project.tagColor}`}>
              {project.tag}
            </span>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-sm text-slate-500 mt-0.5">{project.subtitle}</p>
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 p-2 rounded-lg border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/20 transition-all"
              aria-label="Live link"
            >
              <HiExternalLink size={16} />
            </a>
          )}
        </div>

        {/* Problem / Solution */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2">Problem</p>
            <p className="text-sm text-slate-400 leading-relaxed">{project.problem}</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">Solution</p>
            <p className="text-sm text-slate-400 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Outcomes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {project.outcomes.map(({ metric, label }) => (
            <div key={label} className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="text-lg font-bold gradient-text">{metric}</div>
              <div className="text-xs text-slate-500 mt-0.5 leading-tight">{label}</div>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((t) => (
            <span key={t} className="skill-badge">{t}</span>
          ))}
        </div>

        {/* Expandable features */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors mt-2"
        >
          {expanded ? <HiChevronUp size={14} /> : <HiChevronDown size={14} />}
          {expanded ? 'Hide' : 'Show'} key features
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-4 space-y-2"
            >
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                  <HiCode size={14} className="text-primary-400 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-tag">Projects</span>
          <h2 className="section-heading mb-4">
            Systems I've built and{' '}
            <span className="gradient-text">shipped</span>
          </h2>
          <p className="section-sub mx-auto">
            Real problems, real solutions, real production deployments — not side projects
            gathering dust in a private repo.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} inView={inView} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/umardev82"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <FiGithub size={16} />
            More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
