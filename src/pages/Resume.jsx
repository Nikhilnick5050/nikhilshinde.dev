const RESUME_URL =
  'https://pub-96a564393c0440f2bab37ad8bbe92398.r2.dev/email-files/d6f091cd-a011-4ff3-a8b3-a92cc3823e29-Nikhil_Shinde_Resume.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>My full resume as a PDF — view it online or download it.</p>
      <div className="card">
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn">View resume</a>
          <a href={RESUME_URL} download="Nikhil_Shinde_Resume.pdf" className="btn secondary">Download PDF</a>
        </div>
      </div>
      <div className="section">
        <h2>Highlights</h2>
        <div className="card">
          <h3>Founder &amp; Product Lead — Classgrid AI</h3>
          <p>Dec 2025 – Present · Pune</p>
          <p>
            Built and launched an AI agent with web research, file handling, a code
            sandbox, document generation, image creation and website publishing. Shipped
            WhatsApp voice calls, 20 AI models across 9 providers, 21 plugins, and a
            rupee-based pricing system.
          </p>
        </div>
        <div className="card">
          <h3>Education</h3>
          <p>B.Tech, Computer Engineering — PCCOE, Pune (2025–2029)</p>
        </div>
      </div>
    </div>
  )
}