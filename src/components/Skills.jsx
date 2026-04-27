import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import {
  SiPython, SiDjango, SiReact, SiPostgresql, SiRedis,
  SiDocker, SiNginx, SiGithubactions, SiFastapi,
  SiOpenai, SiMysql, SiFlask,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const groups = [
  {
    label: 'AI / ML',
    color: 'text-purple-400',
    bg: 'from-purple-600/15 to-transparent',
    border: 'border-purple-500/20',
    skills: [
      { name: 'LangChain',        level: 95 },
      { name: 'OpenAI GPT-4/3.5', level: 95 },
      { name: 'RAG Pipelines',    level: 92 },
      { name: 'Prompt Engineering',level: 88 },
      { name: 'Qdrant / Chroma',  level: 85 },
      { name: 'HuggingFace',      level: 72 },
      { name: 'NLP / Embeddings', level: 80 },
    ],
  },
  {
    label: 'Backend',
    color: 'text-primary-400',
    bg: 'from-primary-600/15 to-transparent',
    border: 'border-primary-500/20',
    skills: [
      { name: 'Python',              level: 97 },
      { name: 'FastAPI',             level: 94 },
      { name: 'Django / DRF',        level: 92 },
      { name: 'Flask / SQLAlchemy',  level: 82 },
      { name: 'Celery',              level: 78 },
      { name: 'REST API Design',     level: 93 },
      { name: 'JWT Auth',            level: 90 },
    ],
  },
  {
    label: 'Frontend',
    color: 'text-cyan-400',
    bg: 'from-cyan-600/15 to-transparent',
    border: 'border-cyan-500/20',
    skills: [
      { name: 'React.js',     level: 75 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'HTML / CSS',   level: 82 },
      { name: 'Vue.js',       level: 65 },
    ],
  },
  {
    label: 'Databases',
    color: 'text-emerald-400',
    bg: 'from-emerald-600/15 to-transparent',
    border: 'border-emerald-500/20',
    skills: [
      { name: 'PostgreSQL',    level: 90 },
      { name: 'Redis',         level: 85 },
      { name: 'Django ORM',    level: 92 },
      { name: 'MySQL',         level: 78 },
      { name: 'Vector DBs',    level: 85 },
    ],
  },
  {
    label: 'DevOps & Cloud',
    color: 'text-orange-400',
    bg: 'from-orange-600/15 to-transparent',
    border: 'border-orange-500/20',
    skills: [
      { name: 'AWS EC2/S3/RDS',    level: 83 },
      { name: 'Docker',            level: 85 },
      { name: 'GitHub Actions',    level: 82 },
      { name: 'Nginx / Gunicorn',  level: 80 },
      { name: 'GCP',               level: 65 },
    ],
  },
]

const techIcons = [
  { icon: SiPython,        label: 'Python',   color: '#f7d848' },
  { icon: SiFastapi,       label: 'FastAPI',  color: '#059669' },
  { icon: SiDjango,        label: 'Django',   color: '#16a34a' },
  { icon: SiReact,         label: 'React',    color: '#22d3ee' },
  { icon: SiPostgresql,    label: 'Postgres', color: '#6366f1' },
  { icon: SiRedis,         label: 'Redis',    color: '#ef4444' },
  { icon: SiDocker,        label: 'Docker',   color: '#3b82f6' },
  { icon: FaAws,           label: 'AWS',      color: '#f97316' },
  { icon: SiNginx,         label: 'Nginx',    color: '#16a34a' },
  { icon: SiGithubactions, label: 'CI/CD',    color: '#a855f7' },
  { icon: SiOpenai,        label: 'OpenAI',   color: '#ffffff' },
  { icon: SiFlask,         label: 'Flask',    color: '#94a3b8' },
  { icon: SiMysql,         label: 'MySQL',    color: '#fb923c' },
]

function SkillBar({ name, level, delay, inView }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-slate-300">{name}</span>
        <span className="text-xs text-slate-500 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-cyan"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-dark-800/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-tag">Skills</span>
          <h2 className="section-heading mb-4">
            Tech I work with{' '}
            <span className="gradient-text">every day</span>
          </h2>
          <p className="section-sub mx-auto">
            Proficiency levels reflect real production usage — not tutorial completion.
          </p>
        </motion.div>

        {/* Icon strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          {techIcons.map(({ icon: Icon, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex flex-col items-center gap-2 p-4 rounded-xl glass-card hover:bg-white/[0.05] transition-all group"
            >
              <Icon size={26} style={{ color }} className="group-hover:scale-110 transition-transform" />
              <span className="text-xs text-slate-500">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + gi * 0.08 }}
              className={`glass-card p-6 border ${group.border} bg-gradient-to-br ${group.bg}`}
            >
              <h3 className={`text-sm font-semibold uppercase tracking-widest mb-5 ${group.color}`}>
                {group.label}
              </h3>
              <div className="space-y-4">
                {group.skills.map((s, si) => (
                  <SkillBar
                    key={s.name}
                    name={s.name}
                    level={s.level}
                    delay={0.2 + gi * 0.1 + si * 0.05}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
