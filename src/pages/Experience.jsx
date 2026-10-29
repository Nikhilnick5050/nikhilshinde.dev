import { motion } from 'framer-motion'

const fade = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
}

const bullets = [
  'Built and launched an AI agent that researches with sources, reads files, runs code in a private sandbox, makes Word, Excel, PowerPoint and PDF files, creates images and publishes websites.',
  'Shipped WhatsApp voice calls: users call the agent, hand over a task, and get the result on WhatsApp; long tasks run in the background for up to 48 hours.',
  'Added 20 AI models from 9 providers (Claude, DeepSeek, GLM, Kimi, Qwen and more) with automatic routing, plus native image understanding on supported models.',
  'Launched Project Mode, an in-browser code editor linked to GitHub where the agent makes changes and opens pull requests, with one-click Vercel previews.',
  'Connected 21 plugins (Gmail, Google Calendar, Drive, Classroom, Notion, Slack, GitHub, Zoom and more) and an MCP connector so Claude and ChatGPT can use Classgrid.',
  'Designed a credit-based pricing system in rupees (free tier, Razorpay top-ups, per-model costs) and an internal admin dashboard for usage, billing and support.',
  'Run production on AWS EC2, Cloudflare (Workers AI, R2), MongoDB, Supabase and Vercel; built the marketing site, docs and email system at classgrid.in.',
]

export default function Experience() {
  return (
    <div>
      <motion.div {...fade}>
        <section className="section">
          <h2>Experience</h2>
          <div className="card">
            <h3>Founder &amp; Product Lead, Classgrid AI</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: 16 }}>
              chat.classgrid.in · Pune · Dec 2025 – Present
            </p>
            <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--muted)', lineHeight: 1.7 }}>
              {bullets.map((b) => (
                <li key={b} style={{ marginBottom: 10 }}>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </motion.div>
    </div>
  )
}
