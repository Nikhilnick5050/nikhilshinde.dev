import { motion } from 'framer-motion'

export default function About() {
  const skills = [
    'Product: feature specs, roadmaps, pricing design, user feedback, docs and changelogs, competitor research',
    'AI: agents and tool use, LLM selection and cost control across 20 models, prompt design, AI coding tools, MCP',
    'Cloud & operations: AWS (EC2, billing), Cloudflare (Workers AI, R2), MongoDB, Supabase, Vercel, GitHub, Razorpay',
    'Familiar with: JavaScript, TypeScript, React, Node.js, Next.js',
    'Languages: English, Hindi, Marathi',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <h1 className="page-title">About</h1>
      <p className="page-sub">
        Computer Engineering student (graduating 2029) who founded and shipped Classgrid AI,
        a live AI agent people can use on the web and call on WhatsApp.
      </p>

      <div className="section">
        <h2>What I do</h2>
        <div className="card">
          <p>
            I design features, write the specs, build with AI coding tools, and run the
            production stack on AWS, Cloudflare, MongoDB and Vercel. I'm looking for an AI
            product, solutions or operations internship.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>Experience</h2>
        <div className="card">
          <h3>Founder &amp; Product Lead — Classgrid AI</h3>
          <p className="meta">Pune · Dec 2025 – Present</p>
          <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--muted)' }}>
            <li>Built and launched an AI agent that researches with sources, reads files, runs code in a private sandbox, makes Word, Excel, PowerPoint and PDF files, creates images and publishes websites.</li>
            <li>Shipped WhatsApp voice calls: users call the agent, hand over a task, and get the result on WhatsApp; long tasks run in the background for up to 48 hours.</li>
            <li>Added 20 AI models from 9 providers with automatic routing, plus native image understanding on supported models.</li>
            <li>Launched Project Mode, an in-browser code editor linked to GitHub with one-click Vercel previews.</li>
            <li>Connected 21 plugins and an MCP connector so Claude and ChatGPT can use Classgrid.</li>
            <li>Designed a credit-based pricing system in rupees and an internal admin dashboard for usage, billing and support.</li>
            <li>Run production on AWS EC2, Cloudflare, MongoDB, Supabase and Vercel; built the marketing site, docs and email system at classgrid.in.</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2>Skills</h2>
        <div className="grid">
          {skills.map((s) => (
            <div className="card" key={s}>
              <p>{s}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Education</h2>
        <div className="card">
          <h3>B.Tech, Computer Engineering</h3>
          <p className="meta">Pimpri Chinchwad College of Engineering (PCCOE), Pune · Sep 2025 – Jun 2029</p>
        </div>
        <div className="card">
          <h3>HSC (Science)</h3>
          <p className="meta">Dahanukar Vidyalaya Science &amp; Commerce Junior College · 2023 – 2025</p>
        </div>
        <div className="card">
          <h3>SSC</h3>
          <p className="meta">Dahanukar English Medium School · 2023</p>
        </div>
      </div>
    </motion.div>
  )
}