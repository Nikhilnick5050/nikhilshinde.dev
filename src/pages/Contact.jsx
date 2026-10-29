import { useEffect, useRef, useState } from 'react'

const FORM_URL = 'https://formspree.io/f/mgaazrew'
const EMAIL = 'nikhil@classgrid.in'
const LINKEDIN = 'https://www.linkedin.com/in/nikhil-shinde-classgrid'

const design = {
  fontFamily: "'Sora', 'Segoe UI', system-ui, sans-serif",
  color: '#111111',
}

const headingStyle = {
  fontFamily: "'Sora', 'Segoe UI', system-ui, sans-serif",
  fontSize: '2rem',
  fontWeight: 600,
  margin: '0 0 8px',
  color: '#111111',
}

const bodyStyle = {
  fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
  color: '#555555',
  margin: '0 0 24px',
  lineHeight: 1.55,
}

const labelStyle = {
  display: 'block',
  fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
  fontSize: '0.85rem',
  color: '#555555',
  marginBottom: '6px',
}

const inputStyle = {
  width: '100%',
  background: '#ffffff',
  border: '1px solid #e5e5e5',
  borderRadius: '12px',
  padding: '12px 14px',
  fontSize: '1rem',
  fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
  color: '#111111',
}

const btnStyle = {
  display: 'inline-block',
  background: '#000000',
  color: '#ffffff',
  border: '1px solid #000000',
  borderRadius: '12px',
  padding: '11px 20px',
  fontSize: '0.95rem',
  fontWeight: 500,
  cursor: 'pointer',
  fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
}

const secondaryBtnStyle = {
  ...btnStyle,
  background: '#ffffff',
  color: '#111111',
  border: '1px solid #e5e5e5',
}

const cardStyle = {
  background: '#ffffff',
  border: '1px solid #e5e5e5',
  borderRadius: '12px',
  padding: '20px',
  marginBottom: '16px',
  transition: 'opacity 500ms ease, transform 500ms ease',
}

const msgStyle = {
  padding: '12px 16px',
  borderRadius: '12px',
  marginTop: '12px',
  fontSize: '0.95rem',
  fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
}

function useFadeIn() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return [ref, visible]
}

function FadeCard({ children, style = {} }) {
  const [ref, visible] = useFadeIn()
  return (
    <div
      ref={ref}
      style={{
        ...cardStyle,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch(FORM_URL, {
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
    <div style={design}>
      <h1 style={headingStyle}>Contact</h1>
      <p style={bodyStyle}>Have a question or opportunity? Send me a message.</p>

      <FadeCard>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <label htmlFor="name" style={labelStyle}>Name</label>
            <input id="name" name="name" type="text" required style={inputStyle} />
          </div>
          <div>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input id="email" name="email" type="email" required style={inputStyle} />
          </div>
          <div>
            <label htmlFor="message" style={labelStyle}>Message</label>
            <textarea id="message" name="message" rows="5" required style={inputStyle} />
          </div>
          <button type="submit" style={btnStyle} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          {status === 'ok' && (
            <div style={{ ...msgStyle, background: '#eafaf1', color: '#1e8449', border: '1px solid #2ecc71' }}>
              Thanks! Your message was sent.
            </div>
          )}
          {status === 'err' && (
            <div style={{ ...msgStyle, background: '#fdedec', color: '#c0392b', border: '1px solid #e74c3c' }}>
              Something went wrong. Please try again.
            </div>
          )}
        </form>
      </FadeCard>

      <FadeCard style={{ marginTop: '16px' }}>
        <h3 style={{ ...headingStyle, fontSize: '1.1rem', marginBottom: 12 }}>Other ways to reach me</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href={`mailto:${EMAIL}`} style={secondaryBtnStyle}>Email me</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" style={secondaryBtnStyle}>LinkedIn</a>
        </div>
      </FadeCard>
    </div>
  )
}