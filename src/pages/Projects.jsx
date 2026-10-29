import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    name: 'Classgrid AI',
    line: 'A live AI agent for research, files, code, documents and images.',
    link: 'https://chat.classgrid.in',
  },
  {
    name: 'classgrid.in',
    line: 'The Classgrid AI marketing site and product home.',
    link: 'https://classgrid.in',
  },
  {
    name: 'GridX',
    line: 'Classgrid’s React UI component library used across every app.',
    link: 'https://classgrid.in/gridx',
  },
  {
    name: 'Classgrid MCP Connector',
    line: 'Lets Claude and ChatGPT read Classgrid schedules, chats and profile with permission.',
    link: 'https://classgrid.in/mcp',
  },
]

const design = {
  fontFamily: "'Sora', 'Segoe UI', system-ui, sans-serif",
  color: '#111111',
}

const cardStyle = {
  background: '#ffffff',
  border: '1px solid #e5e5e5',
  borderRadius: '12px',
  padding: '20px',
  marginBottom: '16px',
  transition: 'opacity 500ms ease, transform 500ms ease',
}

const headingStyle = {
  fontFamily: "'Sora', 'Segoe UI', system-ui, sans-serif",
  fontSize: '1.25rem',
  fontWeight: 600,
  margin: '0 0 6px',
  color: '#111111',
}

const bodyStyle = {
  fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif",
  color: '#555555',
  margin: '0 0 14px',
  lineHeight: 1.55,
}

const btnStyle = {
  display: 'inline-block',
  background: '#000000',
  color: '#ffffff',
  border: '1px solid #000000',
  borderRadius: '12px',
  padding: '10px 18px',
  fontSize: '0.9rem',
  fontWeight: 500,
  textDecoration: 'none',
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

function FadeCard({ children }) {
  const [ref, visible] = useFadeIn()
  return (
    <div
      ref={ref}
      style={{
        ...cardStyle,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
      }}
    >
      {children}
    </div>
  )
}

export default function Projects() {
  return (
    <div style={design}>
      <h1 style={{ ...headingStyle, fontSize: '2rem', marginBottom: 8 }}>Projects</h1>
      <p style={{ ...bodyStyle, fontSize: '1.05rem', maxWidth: 640, marginBottom: 28 }}>
        Work I’ve led and shipped at Classgrid AI.
      </p>
      <div>
        {projects.map((p) => (
          <FadeCard key={p.name}>
            <h3 style={headingStyle}>{p.name}</h3>
            <p style={bodyStyle}>{p.line}</p>
            <a href={p.link} target="_blank" rel="noreferrer" style={btnStyle}>
              Visit
            </a>
          </FadeCard>
        ))}
      </div>
    </div>
  )
}