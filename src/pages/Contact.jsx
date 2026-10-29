import { useState } from 'react'
import { motion } from 'framer-motion'

const FORM_ID = import.meta.env.VITE_FORMSPREE_ID || 'mgaazrew'

export default function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('ok')
        form.reset()
      } else {
        setStatus('err')
      }
    } catch {
      setStatus('err')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <h1 className="page-title">Contact</h1>
      <p className="page-sub">Have a question or opportunity? Send me a message.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required />
        </div>
        <button type="submit" className="btn" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        {status === 'ok' && <div className="msg ok">Thanks! Your message was sent.</div>}
        {status === 'err' && <div className="msg err">Something went wrong. Please try again.</div>}
      </form>

      <div className="section">
        <h2>Elsewhere</h2>
        <div className="card">
          <p>
            Email: <a href="mailto:nikhil.shinde@classgrid.in">nikhil.shinde@classgrid.in</a>
          </p>
          <p style={{ marginTop: 8 }}>
            LinkedIn: <a href="https://linkedin.com/in/nikhil-shinde-286937367" target="_blank" rel="noreferrer">linkedin.com/in/nikhil-shinde-286937367</a>
          </p>
        </div>
      </div>
    </motion.div>
  )
}