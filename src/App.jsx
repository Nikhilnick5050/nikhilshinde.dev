import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Nikhil Shinde · Built with React &amp; Vite</p>
      </footer>
    </div>
  )
}