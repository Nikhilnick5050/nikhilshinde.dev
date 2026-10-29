import { motion } from 'framer-motion'

const fade = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
}

const skillGroups = [
  {
    title: 'Product',
    tags: ['Feature specs', 'Roadmaps', 'Pricing design', 'User feedback', 'Writing docs and changelogs', 'Competitor research'],
  },
  {
    title: 'AI',
    tags: ['AI agents and tool use', 'LLM selection and cost control across 20 models', 'Prompt design', 'AI coding tools (Claude Code)', 'MCP'],
  },
  {
    title: 'Cloud & operations',
    tags: ['AWS (EC2, billing)', 'Cloudflare (Workers AI, R2)', 'MongoDB', 'Supabase', 'Vercel', 'GitHub', 'Razorpay'],
  },
  {
    title: 'Familiar with',
    tags: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js'],
  },
  {
    title: 'Languages',
    tags: ['English', 'Hindi', 'Marathi'],
  },
]

const education = [
  {
    degree: 'B.Tech Computer Engineering',
    school: 'Pimpri Chinchwad College of Engineering (PCCOE), Pune',
    dates: 'Sep 2025 – Jun 2029',
  },
  {
    degree: 'HSC (Science)',
    school: 'Dahanukar Vidyalaya Science & Commerce Junior College',
    dates: '2023 – 2025',
  },
  {
    degree: 'SSC',
    school: 'Dahanukar English Medium School',
    dates: '2023',
  },
]

export default function Skills() {
  return (
    <div>
      <motion.div {...fade}>
        <section className="section">
          <h2>Skills &amp; Education</h2>
          <div className="grid">
            {skillGroups.map((g) => (
              <div className="card" key={g.title}>
                <h3 style={{ fontSize: '1.05rem' }}>{g.title}</h3>
                <div style={{ marginTop: 10 }}>
                  {g.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </motion.div>

      <motion.div {...fade}>
        <section className="section">
          <h2>Education</h2>
          <div className="grid">
            {education.map((e) => (
              <div className="card" key={e.degree + e.dates}>
                <h3 style={{ fontSize: '1.05rem' }}>{e.degree}</h3>
                <p style={{ marginBottom: 6 }}>{e.school}</p>
                <p style={{ fontSize: '0.85rem' }}>{e.dates}</p>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}
