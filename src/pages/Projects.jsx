const projects = [
  {
    name: 'Classgrid AI',
    role: 'Founder & Product Lead',
    link: 'https://chat.classgrid.in',
    desc: 'A live AI agent that researches with sources, reads files, runs code in a sandbox, creates documents and images, and publishes websites — callable on WhatsApp.',
    tags: ['AI agents', 'AWS', 'Cloudflare', 'MongoDB', 'Vercel'],
  },
  {
    name: 'GridX',
    role: 'React UI component library',
    desc: "Classgrid's own React component library used to keep every Classgrid app consistent.",
    tags: ['React', 'TypeScript', 'Design system'],
  },
  {
    name: 'Classgrid Connector (MCP)',
    role: 'MCP integration',
    desc: 'Lets Claude and ChatGPT read a user\'s Classgrid schedules, chats and profile with their permission.',
    tags: ['MCP', 'Integrations', 'AI'],
  },
  {
    name: 'Grids',
    role: 'Messaging product',
    desc: 'Messaging inside Classgrid AI with direct chats, groups, polls and a shared AI chat for up to 4 people.',
    tags: ['Messaging', 'Real-time', 'Groups'],
  },
]

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <p>Work I've led and shipped at Classgrid AI.</p>
      <div className="section">
        {projects.map((p) => (
          <div className="card" key={p.name}>
            <h3>{p.name}</h3>
            <p style={{ color: 'var(--accent)', fontSize: '0.85rem', marginBottom: 8 }}>{p.role}</p>
            <p>{p.desc}</p>
            <div style={{ marginTop: 10 }}>
              {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer" className="btn secondary" style={{ marginTop: 14 }}>
                Visit
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}