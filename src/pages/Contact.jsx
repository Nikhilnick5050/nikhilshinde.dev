import { useState } from 'react'
import { motion } from 'framer-motion'

const FORM_ACTION = 'https://formspree.io/f/mgaazrew'

export default function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch(FORM_ACTION, {
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
      className="section"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h2>Contact</h2>
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
        {status === 'ok' && (
          <div className="msg ok">Thanks! Your message was sent.</div>
        )}
        {status === 'err' && (
          <div className="msg err">
            Something went wrong. Please try again.
          </div>
        )}
      </form>

      <div className="card" style={{ marginTop: 24, maxWidth: 480 }}>
        <p style={{ margin: '0 0 8px' }}>
          <strong>Email:</strong>{' '}
          <a href="mailto:nikhil.shinde@classgrid.in">
            nikhil.shinde@classgrid.in
          </a>
        </p>
        <p style={{ margin: 0 }}>
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://linkedin.com/in/nikhil-shinde-286937367"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/nikhil-shinde-286937367
          </a>
        </p>
      </div>
    </motion.div>
  )
}