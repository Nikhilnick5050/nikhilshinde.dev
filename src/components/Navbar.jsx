import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Monitor, Sun, Moon } from 'lucide-react'

const modes = [
  { value: 'system', label: 'System', icon: Monitor },
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
]

function getInitialTheme() {
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark' || saved === 'system') return saved
  return 'system'
}

function applyTheme(theme) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const resolved = theme === 'system' ? (prefersDark ? 'dark' : 'light') : theme
  document.documentElement.dataset.theme = resolved
}

export default function Navbar() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="navbar">
      <Link to="/" className="brand">Nikhil Shinde</Link>
      <div className="nav-right">
        <nav className="nav-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="theme-pill" role="group" aria-label="Theme">
          {modes.map((m) => {
            const Icon = m.icon
            return (
              <button
                key={m.value}
                className={theme === m.value ? 'theme-opt active' : 'theme-opt'}
                onClick={() => setTheme(m.value)}
                title={m.label}
                aria-label={m.label}
              >
                <Icon size={16} />
              </button>
            )
          })}
        </div>
      </div>
    </header>
  )
}