export default function About() {
  const skills = [
    'Product: feature specs, roadmaps, pricing, docs',
    'AI: agents, tool use, LLM selection, prompt design',
    'Cloud: AWS, Cloudflare, MongoDB, Supabase, Vercel',
    'Code: JavaScript, TypeScript, React, Node.js, Next.js',
  ]

  return (
    <div>
      <h1>About Me</h1>
      <p>
        I'm a Computer Engineering student at PCCOE, Pune (graduating 2029), and the
        founder of Classgrid AI — a live AI agent people use on the web and call on
        WhatsApp.
      </p>
      <div className="section">
        <h2>What I do</h2>
        <div className="card">
          <p>
            I take AI products from idea to launch: writing specs, building with AI
            coding tools, and running the production stack on AWS, Cloudflare, MongoDB
            and Vercel. I've shipped WhatsApp voice calls, a 20-model AI router, 21
            plugins, and a full pricing + billing system.
          </p>
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
    </div>
  )
}