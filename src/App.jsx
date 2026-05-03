import { useEffect, useRef, useState } from 'react'

/* ─── SVG icon helpers ─── */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.43-4.04-1.43-.55-1.4-1.35-1.78-1.35-1.78-1.1-.75.08-.74.08-.74 1.22.08 1.86 1.26 1.86 1.26 1.08 1.85 2.84 1.32 3.53 1.01.11-.79.42-1.32.76-1.62-2.67-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.25-3.22-.13-.31-.54-1.58.12-3.29 0 0 1.01-.32 3.31 1.23a11.5 11.5 0 0 1 6.03 0c2.3-1.55 3.31-1.23 3.31-1.23.66 1.71.25 2.98.12 3.29.78.84 1.25 1.91 1.25 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5z"
      fill="currentColor"
    />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M6.94 6.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88zM5.1 21.5h3.68V8.34H5.1V21.5zm6.1 0h3.67v-6.89c0-1.82.35-3.59 2.6-3.59 2.21 0 2.24 2.07 2.24 3.7v6.78h3.68v-7.65c0-3.75-.81-6.63-5.17-6.63-2.1 0-3.51 1.16-4.09 2.26h-.05V8.34H11.2V21.5z"
      fill="currentColor"
    />
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5.2-8-5.2V6l8 5 8-5v2.2z"
      fill="currentColor"
    />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.04-.24c1.14.38 2.38.58 3.58.58a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.95 21 3 13.05 3 3.98a1 1 0 0 1 1-1h3.44a1 1 0 0 1 1 1c0 1.2.2 2.44.58 3.58a1 1 0 0 1-.24 1.04L6.6 10.8z"
      fill="currentColor"
    />
  </svg>
)

const ArrowUpIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3 4 10h2v10h5v-6h2v6h5V10h2L12 3z" fill="currentColor" />
  </svg>
)

/* ─── Inline SVG logos ─── */
const senseByteSVG = `data:image/svg+xml;utf8,<?xml version='1.0'?><svg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'><rect width='96' height='96' rx='24' fill='%23111B33'/><text x='48' y='57' text-anchor='middle' font-size='28' font-family='Arial' fill='white'>SB</text></svg>`

const skillIcons = {
  Python:     `data:image/svg+xml;utf8,<?xml version='1.0'?><svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><circle cx='40' cy='40' r='40' fill='%230f766e'/><text x='40' y='48' text-anchor='middle' font-size='18' font-family='Arial' fill='white'>Py</text></svg>`,
  Tableau:    `data:image/svg+xml;utf8,<?xml version='1.0'?><svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><circle cx='40' cy='40' r='40' fill='%23b36a43'/><text x='40' y='48' text-anchor='middle' font-size='16' font-family='Arial' fill='white'>Tb</text></svg>`,
  SQL:        `data:image/svg+xml;utf8,<?xml version='1.0'?><svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><circle cx='40' cy='40' r='40' fill='%23112240'/><text x='40' y='48' text-anchor='middle' font-size='16' font-family='Arial' fill='white'>SQL</text></svg>`,
  'Git & GitHub': `data:image/svg+xml;utf8,<?xml version='1.0'?><svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><circle cx='40' cy='40' r='40' fill='%23253a59'/><text x='40' y='48' text-anchor='middle' font-size='18' font-family='Arial' fill='white'>Git</text></svg>`,
  Pandas:     `data:image/svg+xml;utf8,<?xml version='1.0'?><svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><circle cx='40' cy='40' r='40' fill='%2314766e'/><text x='40' y='48' text-anchor='middle' font-size='14' font-family='Arial' fill='white'>Pd</text></svg>`,
  Statistics: `data:image/svg+xml;utf8,<?xml version='1.0'?><svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><circle cx='40' cy='40' r='40' fill='%236b7280'/><text x='40' y='48' text-anchor='middle' font-size='15' font-family='Arial' fill='white'>St</text></svg>`,
}

/* ─── Reveal-on-scroll hook ─── */
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0.14 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ─── Topbar ─── */
function Topbar() {
  return (
    <header className="topbar">
      <div className="social-row">
        <a
          id="link-github"
          className="icon-link"
          href="https://github.com/Mk-debugger11"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon />
        </a>
        <a
          id="link-linkedin"
          className="icon-link"
          href="https://www.linkedin.com/in/mukul-kumar/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a
          id="link-email"
          className="icon-link"
          href="mailto:mukul.kumar@example.com"
          aria-label="Email"
        >
          <EmailIcon />
        </a>
        <a
          id="link-phone"
          className="icon-link"
          href="tel:+918053500003"
          aria-label="Phone"
        >
          <PhoneIcon />
        </a>
      </div>
      <a
        id="btn-resume"
        className="resume-pill"
        href="./DVA_Oriented_Resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </header>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="hero panel reveal" id="hero">
      <div className="hero-badge-wrap">
        <div className="hero-ring">
          <div className="hero-badge">MK</div>
        </div>
      </div>

      <p className="hero-eyebrow">DATA VISUALIZATION &amp; ANALYTICS</p>
      <h1 className="hero-title">
        Hi, I&apos;m <span>Mukul</span>
      </h1>

      <nav className="pill-nav" aria-label="Primary">
        <a href="#about">ABOUT</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </section>
  )
}

/* ─── About / Summary ─── */
function About() {
  const ref = useReveal()
  return (
    <section ref={ref} className="section panel reveal" id="about">
      <h2>Summary</h2>
      <p className="summary">
        I&apos;m a DVA-focused student who turns customer, finance, and healthcare datasets into
        clear dashboards and decision-ready stories. My work centers on Tableau, KPI design, and
        translating raw analysis into visuals that feel stakeholder-ready.
      </p>
      <div className="stat-row">
        {[
          { value: '45,211', label: 'Bank marketing rows' },
          { value: '11.7%',  label: 'Subscription rate' },
          { value: '2',      label: 'Public Tableau case studies' },
          { value: '7.6/10', label: 'B.Tech grade' },
        ].map(({ value, label }) => (
          <div key={label} className="stat">
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Experience ─── */
function Experience() {
  const ref = useReveal()
  return (
    <section ref={ref} className="section panel reveal" id="experience">
      <h2>Experience</h2>
      <div className="experience-card">
        <div className="experience-meta">
          <img className="org-mark" alt="SenseByte" src={senseByteSVG} />
          <div>
            <h3>Web Development Intern</h3>
            <p>SenseByte</p>
            <p>June 2025 – August 2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Skills ─── */
const SKILLS = [
  { name: 'Python',       level: 'Advanced' },
  { name: 'Tableau',      level: 'Advanced' },
  { name: 'SQL',          level: 'Advanced' },
  { name: 'Git & GitHub', level: 'Advanced' },
  { name: 'Pandas',       level: 'Advanced' },
  { name: 'Statistics',   level: 'Intermediate' },
]

function Skills() {
  const ref = useReveal()
  return (
    <section ref={ref} className="section panel reveal" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {SKILLS.map(({ name, level }) => (
          <div key={name} className="skill-card">
            <img alt={name} src={skillIcons[name]} />
            <span>{name}</span>
            <em>{level}</em>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Projects ─── */
const PROJECTS = [
  {
    id: 'bank-campaign',
    tags: ['Tableau', 'Finance', 'Analytics'],
    title: 'Bank Term Deposit Campaign Analysis',
    description:
      'A segmentation-driven dashboard exploring subscription behavior across jobs, age groups, education, balance bands, contact channels, and previous campaign outcomes.',
    link: 'https://public.tableau.com/views/Bank_Marketing_Analysis_17778245340560/CUSTOMERSEGMENTATIONSUBSCRIPTIONPROFILE?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
    linkLabel: 'Tableau Public',
  },
  {
    id: 'patient-readmission',
    tags: ['Tableau', 'Healthcare', 'Readmissions'],
    title: 'Patient Readmission Intelligence',
    description:
      'A healthcare dashboard designed to surface readmission patterns, patient segments, and operational signals for quality-focused review.',
    link: 'https://public.tableau.com/views/Healthcare_Patient_Readmission_Intelligence_17778243639100/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
    linkLabel: 'Tableau Public',
  },
]

function Projects() {
  const ref = useReveal()
  return (
    <section ref={ref} className="section panel reveal" id="projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {PROJECTS.map(({ id, tags, title, description, link, linkLabel }) => (
          <article key={id} className="project-card">
            <div className="project-tags">
              {tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-links">
              <a id={`link-${id}`} href={link} target="_blank" rel="noreferrer">
                {linkLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ─── Contact ─── */
function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:mukul.kumar@example.com?subject=Portfolio%20Contact&body=Name%3A%20${encodeURIComponent(form.name)}%0AEmail%3A%20${encodeURIComponent(form.email)}%0AMessage%3A%20${encodeURIComponent(form.message)}`
    window.location.href = mailto
  }

  return (
    <section ref={ref} className="section panel reveal" id="contact">
      <h2>Let&apos;s talk.</h2>
      <div className="contact-layout">
        <div className="contact-copy">
          <p>
            I&apos;m open to analytics internships, Tableau work, dashboard case studies, and portfolio
            collaboration.
          </p>
          <div className="contact-links">
            <a href="mailto:mukul.kumar2024@nst.rishihood.edu.in">mukul.kumar2024@nst.rishihood.edu.in</a>
            <a href="https://www.linkedin.com/in/mukul-kumar-a09527314/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/Mk-debugger11" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              id="input-name"
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              id="input-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Message
            <textarea
              id="input-message"
              name="message"
              rows={4}
              placeholder="Tell me what you're building."
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button id="btn-send" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="footer">
      <p>Mukul Kumar • DVA Portfolio</p>
    </footer>
  )
}

/* ─── Scroll-to-top button ─── */
function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 220)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      id="btn-scroll-top"
      className={`scroll-top${visible ? ' visible' : ''}`}
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUpIcon />
    </button>
  )
}

/* ─── Root App ─── */
export default function App() {
  return (
    <>
      <div className="stars" aria-hidden="true" />
      <div className="glow glow-a" aria-hidden="true" />
      <div className="glow glow-b" aria-hidden="true" />

      <div className="site">
        <Topbar />
        <main>
          <ScrollTop />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
