import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fade = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
}

export default function Home() {
  return (
    <div className="hero">
      <motion.div {...fade}>
        <h1>Nikhil Shinde</h1>
        <p className="subtitle">AI Product Builder · Founder, Classgrid AI</p>
        <p>
          Computer Engineering student who founded and shipped Classgrid AI, a live AI
          agent on web and WhatsApp. I build with AI coding tools and run the production
          stack on AWS, Cloudflare, MongoDB and Vercel.
        </p>
        <div className="btn-row">
          <Link to="/projects" className="btn">
            View my work
          </Link>
          <a
            href="/Nikhil_Shinde_Resume.pdf"
            download="Nikhil_Shinde_Resume.pdf"
            className="btn secondary"
          >
            Download resume
          </a>
        </div>
      </motion.div>
    </div>
  )
}