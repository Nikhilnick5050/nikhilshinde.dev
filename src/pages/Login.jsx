import { useState, useEffect } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [entries, setEntries] = useState([])
  const [status, setStatus] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('guestbook_user')
    if (saved) {
      setLoggedIn(true)
      setEmail(saved)
    }
    loadEntries()
  }, [])

  async function loadEntries() {
    try {
      const res = await fetch('/api/guestbook')
      if (res.ok) {
        const data = await res.json()
        setEntries(data)
      }
    } catch {
      // guestbook is optional; ignore read errors
    }
  }

  async function handleLogin(e) {
    e.preventDefault()
    if (!email) return
    localStorage.setItem('guestbook_user', email)
    setLoggedIn(true)
    setStatus('')
  }

  async function handlePost(e) {
    e.preventDefault()
    if (!message.trim()) return
    setStatus('sending')
    try {
      const res = await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (res.ok) {
        setMessage('')
        setStatus('ok')
        loadEntries()
      } else {
        setStatus('err')
      }
    } catch {
      setStatus('err')
    }
  }

  function logout() {
    localStorage.removeItem('guestbook_user')
    setLoggedIn(false)
    setEmail('')
  }

  if (!loggedIn) {
    return (
      <div>
        <h1>Login</h1>
        <p>Sign in with your email to leave a note in the guestbook.</p>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">Sign in</button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <h1>Guestbook</h1>
      <p>
        Signed in as <strong>{email}</strong>{' '}
        <button className="btn secondary" onClick={logout} style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
          Log out
        </button>
      </p>
      <form onSubmit={handlePost} style={{ marginTop: 20 }}>
        <div>
          <label htmlFor="gb-name">Your name</label>
          <input id="gb-name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="gb-message">Message</label>
          <textarea id="gb-message" rows="3" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit" className="btn" disabled={status === 'sending'}>
          {status === 'sending' ? 'Posting…' : 'Post message'}
        </button>
        {status === 'ok' && <div className="msg ok">Posted! Thanks for signing the guestbook.</div>}
        {status === 'err' && <div className="msg err">Could not post. Please try again.</div>}
      </form>
      <div className="section">
        <h2>Messages</h2>
        {entries.length === 0 && <p style={{ color: 'var(--muted)' }}>No messages yet — be the first!</p>}
        {entries.map((entry, i) => (
          <div className="card guestbook-entry" key={i}>
            <p>{entry.message}</p>
            <div className="meta">
              {entry.name || 'Anonymous'} · {entry.email} · {entry.createdAt ? new Date(entry.createdAt).toLocaleString() : ''}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}