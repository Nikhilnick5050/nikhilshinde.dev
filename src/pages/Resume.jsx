import { motion } from 'framer-motion'

const RESUME_URL = '/Nikhil_Shinde_Resume.pdf'

export default function Resume() {
  return (
    <motion.div
      className="section"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h2>Resume</h2>
      <div className="card">
        <p>My full resume as a PDF — view it online or download it.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View resume
          </a>
          <a
            href={RESUME_URL}
            download="Nikhil_Shinde_Resume.pdf"
            className="btn secondary"
          >
            Download resume
          </a>
        </div>
      </div>
    </motion.div>
  )
}