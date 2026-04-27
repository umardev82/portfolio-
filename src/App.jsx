import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import Services    from './components/Services'
import Projects    from './components/Projects'
import Skills      from './components/Skills'
import Experience  from './components/Experience'
import Contact     from './components/Contact'
import Footer      from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Subtle grid texture */}
      <div className="fixed inset-0 bg-grid opacity-40 pointer-events-none" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
