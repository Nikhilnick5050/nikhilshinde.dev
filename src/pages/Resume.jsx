import { motion } from 'framer-motion'

const RESUME_URL =
  'https://pub-96a564393c0440f2bab37ad8bbe92398.r2.dev/email-files/9e5cd4eb-0221-4cfc-83fd-d1b65d420736-Nikhil_Shinde_Resume.pdf'

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <h1 className="page-title">Resume</h1>
      <p className="page-sub">My full resume as a PDF — view it online or download it.</p>
      <div className="card">
        <div className="btn-row">
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn">View resume</a>
          <a href={RESUME_URL} download="Nikhil_Shinde_Resume.pdf" className="btn secondary">Download PDF</a>
        </div>
      </div>
      <div className="section">
        <h2>Highlights</h2>
        <div className="card">
          <h3>Founder &amp; Product Lead — Classgrid AI</h3>
          <p className="meta">Dec 2025 – Present · Pune</p>
          <p>
            Built and launched an AI agent with web research, file handling, a code
            sandbox, document generation, image creation and website publishing. Shipped
            WhatsApp voice calls, 20 AI models across 9 providers, 21 plugins, and a
            rupee-based pricing system.
          </p>
        </div>
        <div className="card">
          <h3>Education</h3>
          <p>B.Tech, Computer Engineering — PCCOE, Pune (2025–2029)</p>
        </div>
      </div>
    </motion.div>
  )
}