import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Classgrid AI',
    desc: 'Live AI agent you can use on the web and call on WhatsApp.',
    link: 'https://chat.classgrid.in',
  },
  {
    name: 'classgrid.in',
    desc: 'Marketing site, documentation, blog and changelog with an AI help assistant.',
    link: 'https://classgrid.in',
  },
  {
    name: 'GridX',
    desc: "Classgrid's own React UI component library for consistent apps.",
    link: 'https://classgrid.in',
  },
  {
    name: 'Classgrid MCP connector',
    desc: "Lets Claude and ChatGPT read a user's Classgrid schedules, chats and profile.",
    link: 'https://classgrid.in',
  },
]

export default function Projects() {
  return (
    <motion.div
      className="section"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <div className="card" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
              style={{ marginTop: 14 }}
            >
              Visit
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  )
}