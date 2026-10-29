import { useState } from 'react'

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
    <div>
      <h1>Contact</h1>
      <p>Have a question or opportunity? Send me a message.</p>
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
    </div>
  )
}