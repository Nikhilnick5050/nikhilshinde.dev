import { motion } from 'framer-motion'

const fade = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
}

const facts = [
  { label: 'Location', value: 'Pune, India', href: null },
  { label: 'Email', value: 'nikhil.shinde@classgrid.in', href: 'mailto:nikhil.shinde@classgrid.in' },
  { label: 'LinkedIn', value: 'linkedin.com/in/nikhil-shinde-286937367', href: 'https://linkedin.com/in/nikhil-shinde-286937367' },
  { label: 'GitHub', value: 'github.com/Nikhilnick5050', href: 'https://github.com/Nikhilnick5050' },
]

export default function About() {
  return (
    <div>
      <motion.div {...fade}>
        <section className="section">
          <h2>About</h2>
          <div className="card">
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
              Computer Engineering student (graduating 2029) who founded and shipped
              Classgrid AI, a live AI agent people can use on the web and call on
              WhatsApp. I design features, write the specs, build with AI coding tools,
              and run the production stack on AWS, Cloudflare, MongoDB and Vercel.
              Looking for an AI product, solutions or operations internship.
            </p>
          </div>
        </section>
      </motion.div>

      <motion.div {...fade}>
        <section className="section">
          <h2>Quick facts</h2>
          <div className="grid">
            {facts.map((f) => (
              <div className="card" key={f.label}>
                <h3
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--muted)',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  {f.label}
                </h3>
                {f.href ? (
                  <p>
                    <a
                      href={f.href}
                      target={f.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      style={{ color: 'var(--accent)', textDecoration: 'none', wordBreak: 'break-word' }}
                    >
                      {f.value}
                    </a>
                  </p>
                ) : (
                  <p>{f.value}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}