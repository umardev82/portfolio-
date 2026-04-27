import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi'

const experiences = [
  {
    type: 'work',
    role: 'Backend Developer',
    org: 'Innovative Tech Dev',
    location: 'Lahore, Pakistan',
    period: 'Mar 2024 – Present',
    current: true,
    description: 'Leading backend architecture and AI integration across three concurrent products, supporting a frontend team of four.',
    achievements: [
      'Architected 20+ RESTful API endpoints with Django REST Framework; reduced average response latency by ~40% using query optimization and Redis caching',
      'Built BearisterAI — a production RAG-based legal AI SaaS — from zero to paying subscribers using FastAPI, LangChain, OpenAI GPT-4, and Qdrant vector database with 10,000+ documents indexed',
      'Deployed and maintained 3 Django applications on AWS (EC2 + S3 + RDS) with Nginx reverse-proxy, achieving ~99.5% uptime across all services',
      'Cut deployment cycle time by 60% by implementing GitHub Actions CI/CD pipelines with automated testing and Dockerized build environments',
      'Integrated LangChain agents with OpenAI tool-calling for multi-turn conversational interfaces with cross-session context retention',
      'Conducted weekly code reviews for a team of 3, enforcing REST best practices and reducing bug-to-production rate by ~30%',
    ],
    stack: ['FastAPI', 'Django DRF', 'LangChain', 'OpenAI GPT-4', 'Qdrant', 'Redis', 'AWS', 'Docker', 'GitHub Actions'],
  },
  {
    type: 'work',
    role: 'Backend Python Developer',
    org: 'Enigmatix',
    location: 'Bahawalpur, Pakistan',
    period: 'Jul 2023 – Feb 2024',
    current: false,
    description: 'Developed and shipped backend APIs for two client-facing web applications in a cross-functional Agile team.',
    achievements: [
      'Built scalable RESTful APIs using Django and Flask for 2 client-facing applications, onboarding 500+ users in the first month post-launch',
      'Designed and optimized PostgreSQL database schemas with Django ORM and SQLAlchemy, reducing slow-query count by ~35% through indexing and query refactoring',
      'Collaborated with frontend developers to integrate APIs into Vue.js interfaces, cutting integration turnaround time by 25% via Swagger/OpenAPI documentation',
      'Delivered features consistently across 4 sprint cycles in an Agile team of 6, maintaining on-time delivery throughout the engagement',
    ],
    stack: ['Django', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'Vue.js', 'Swagger', 'REST APIs'],
  },
  {
    type: 'education',
    role: 'Bachelor of Science in Computer Science',
    org: 'The Islamia University of Bahawalpur',
    location: 'Bahawalpur, Pakistan',
    period: 'Oct 2020 – Jun 2024',
    current: false,
    description: 'Four-year CS degree covering algorithms, databases, software engineering, and networks.',
    achievements: [],
    stack: [],
  },
]

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-tag">Experience</span>
          <h2 className="section-heading mb-4">
            Career{' '}
            <span className="gradient-text">timeline</span>
          </h2>
          <p className="section-sub mx-auto">
            Two years of professional production experience, shipped across multiple
            organizations and tech stacks.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex gap-6"
              >
                {/* Dot */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className={`timeline-dot ${exp.type === 'education' ? 'bg-gradient-to-br from-amber-400 to-orange-500' : ''}`} />
                </div>

                {/* Card */}
                <div className="flex-1 glass-card p-6 sm:p-8 hover:border-white/10 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {exp.type === 'education'
                          ? <HiAcademicCap size={16} className="text-amber-400" />
                          : <HiBriefcase size={16} className="text-primary-400" />
                        }
                        <h3 className="font-bold text-white text-base">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-primary-400 font-medium">{exp.org}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{exp.location}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-500 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.05] flex-shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  {exp.description && (
                    <p className="text-sm text-slate-400 mb-5 leading-relaxed">{exp.description}</p>
                  )}

                  {exp.achievements.length > 0 && (
                    <ul className="space-y-2.5 mb-5">
                      {exp.achievements.map((a, ai) => (
                        <li key={ai} className="flex items-start gap-2.5 text-sm text-slate-400">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.stack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
                      {exp.stack.map((t) => (
                        <span key={t} className="skill-badge text-[11px]">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
