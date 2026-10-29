import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const RESUME_URL =
  'https://pub-96a564393c0440f2bab37ad8bbe92398.r2.dev/email-files/9e5cd4eb-0221-4cfc-83fd-d1b65d420736-Nikhil_Shinde_Resume.pdf'

export default function Home() {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <h1>Nikhil Shinde</h1>
      <p className="role">AI Product Builder · Founder, Classgrid AI</p>
      <p>
        I design, build and ship AI products end-to-end — from feature specs to a live
        production stack on AWS, Cloudflare, MongoDB and Vercel.
      </p>
      <div className="btn-row">
        <Link to="/projects" className="btn">View my work</Link>
        <a href={RESUME_URL} download="Nikhil_Shinde_Resume.pdf" className="btn secondary">Download resume</a>
      </div>
    </motion.div>
  )
}