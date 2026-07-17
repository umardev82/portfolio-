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
      <div className="fixed inset-0 bg-grid pointer-events-none" />
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
