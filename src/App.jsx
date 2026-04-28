import { LazyMotion, domAnimation } from 'framer-motion'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-slate-950 text-white">
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Navbar />
        <main id="conteudo">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </LazyMotion>
  )
}

export default App
