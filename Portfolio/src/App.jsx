import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {

  return (
    <div>
    <NavBar />
    <Home />
    <Skills />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
