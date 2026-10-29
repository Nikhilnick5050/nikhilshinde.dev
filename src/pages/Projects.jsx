import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Classgrid AI',
    link: 'https://chat.classgrid.in',
    desc: 'A live AI agent that researches with sources, reads files, runs code in a sandbox, creates documents and images, and publishes websites — callable on WhatsApp.',
  },
  {
    name: 'classgrid.in',
    link: 'https://classgrid.in',
    desc: 'The marketing website, documentation, blog and changelog, with an AI help assistant that answers from the docs.',
  },
  {
    name: 'GridX',
    link: 'https://classgrid.in',
    desc: "Classgrid's own React UI component library, used to keep every Classgrid app consistent.",
  },
  {
    name: 'Classgrid connector (MCP)',
    link: 'https://classgrid.in',
    desc: "Lets Claude and ChatGPT read a user's Classgrid schedules, chats and profile with their permission.",
  },
]

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <h1 className="page-title">Projects</h1>
      <p className="page-sub">Products I led and shipped at Classgrid AI.</p>
      <div className="section">
        {projects.map((p) => (
          <div className="card" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <div style={{ marginTop: 14 }}>
              <a href={p.link} target="_blank" rel="noreferrer" className="btn secondary">Visit</a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}