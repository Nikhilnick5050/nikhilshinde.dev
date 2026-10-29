import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
    { to: '/login', label: 'Login' },
  ]

  return (
    <header className="navbar">
      <Link to="/" className="brand">nikhilshinde<span>.dev</span></Link>
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
    </header>
  )
}