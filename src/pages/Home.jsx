import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="hero">
      <h1>Hi, I'm <span className="accent">Nikhil Shinde</span></h1>
      <p>
        AI Product Builder and Founder of Classgrid AI. I design, build and ship AI
        products end-to-end — from feature specs to a live production stack.
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 20 }}>
        <Link to="/projects" className="btn">See my work</Link>
        <Link to="/resume" className="btn secondary">View resume</Link>
      </div>
    </div>
  )
}