import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4v11" />
      <path d="M7 10l5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  )
}

export default function Home() {
  return (
    <motion.div
      className="page"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      <section className="hero">
        <motion.p className="hero-eyebrow" variants={fadeIn}>
          <span className="dot" />
          Available for work
        </motion.p>

        <motion.h1 variants={fadeIn}>Nikhil Shinde</motion.h1>

        <motion.p className="hero-title" variants={fadeIn}>
          AI Product Builder · Founder, Classgrid AI
        </motion.p>

        <motion.p className="hero-intro" variants={fadeIn}>
          I take AI products from idea to launch — writing the specs, building with AI
          coding tools, and running the production stack. I founded Classgrid AI, a live
          AI agent people use on the web and call on WhatsApp.
        </motion.p>

        <motion.div className="hero-actions" variants={fadeIn}>
          <Link to="/projects" className="btn">
            View my work
            <ArrowIcon />
          </Link>
          <Link to="/resume" className="btn secondary">
            Download resume
            <DownloadIcon />
          </Link>
        </motion.div>

        <motion.div className="hero-meta" variants={fadeIn}>
          <span>
            <strong>Classgrid AI</strong> · Founder &amp; Product Lead
          </span>
          <span>
            <strong>PCCOE, Pune</strong> · Computer Engineering
          </span>
          <span>
            <strong>AI agents</strong> · React · AWS · MongoDB
          </span>
        </motion.div>
      </section>
    </motion.div>
  )
}
