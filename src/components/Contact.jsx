import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight } from 'react-icons/hi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'umardev82@gmail.com',
    href: 'mailto:umardev82@gmail.com',
  },
  {
    icon: HiPhone,
    label: 'Phone / WhatsApp',
    value: '+92 343 082 3408',
    href: 'tel:+923430823408',
  },
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: 'Pakistan — available globally (remote)',
    href: null,
  },
]

const socialLinks = [
  {
    icon: FiGithub,
    label: 'GitHub',
    href: 'https://github.com/umardev82',
    desc: 'See my code',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/umar-latif-b29b77257',
    desc: 'Connect professionally',
  },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`mailto:umardev82@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-tag">Contact</span>
          <h2 className="section-heading mb-4">
            Let's build something{' '}
            <span className="gradient-text">together</span>
          </h2>
          <p className="section-sub mx-auto">
            Whether you have a specific project in mind or just want to explore what's possible —
            I respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Availability badge */}
            <div className="glass-card p-5 flex items-center gap-4 border border-emerald-500/20 bg-emerald-500/[0.03]">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div>
                <p className="text-sm font-semibold text-emerald-400">Currently available</p>
                <p className="text-xs text-slate-500">Open to freelance projects and full-time opportunities</p>
              </div>
            </div>

            {/* Contact details */}
            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="glass-card p-4 flex items-center gap-4 hover:border-white/10 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-primary-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-slate-300 hover:text-white transition-colors truncate block">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-300">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map(({ icon: Icon, label, href, desc }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card p-4 flex items-center gap-3 hover:border-primary-500/30 hover:bg-primary-500/[0.04] transition-all group"
                >
                  <Icon size={18} className="text-slate-400 group-hover:text-primary-400 transition-colors" />
                  <div>
                    <p className="text-sm font-medium text-slate-300">{label}</p>
                    <p className="text-xs text-slate-600">{desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="glass-card p-6 sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 flex items-center justify-center">
                    <HiMail size={24} className="text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Opening your email client…</h3>
                  <p className="text-sm text-slate-400 max-w-xs">
                    Your message is pre-filled and ready to send. Thanks for reaching out — I'll reply within 24 hours.
                  </p>
                  <button onClick={() => setSent(false)} className="btn-outline mt-2 text-xs">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-base font-semibold text-white mb-6">Send a message</h3>

                  <div>
                    <label className="text-xs text-slate-500 block mb-1.5">Your name</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary-500/50 focus:bg-primary-500/[0.03] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-500 block mb-1.5">Email address</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary-500/50 focus:bg-primary-500/[0.03] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-500 block mb-1.5">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project — what you're building, what you need, and your timeline."
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary-500/50 focus:bg-primary-500/[0.03] transition-all resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Send message <HiArrowRight size={16} />
                  </button>

                  <p className="text-xs text-center text-slate-600">
                    Opens your email client · No data collected
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
