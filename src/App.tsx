import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Copy,
  GitBranch,
  Link as LinkIcon,
  Mail,
  MapPin,
  Menu,
  X,
} from 'lucide-react'

interface Project {
  number: string
  title: string
  company: string
  description: string
  impact: string
  stack: string[]
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Shared Data Repository',
    company: 'FPT IS (2025 - now)',
    description:
      'A centralized platform for managing, synchronizing, and sharing data across departments and information systems.',
    impact: 'Owned the Shared Catalog module from solution design to production release.',
    stack: ['Java', 'Spring Boot', 'ReactJS','Python', 'Kafka', 'Microservices','Oracle', 'PostgreSQL', 'Redis'],
  },
  {
    number: '02',
    title: 'BigTel',
    company: 'Octa Online Services Company (2023 - 2025)',
    description:
      'A secure middleware layer connecting service providers with e-wallets, banks, and e-commerce platforms.',
    impact:
      'Automated bank reconciliation across 17 banks, removing 85 minutes of manual work per cycle.',
    stack: ['.NET Core', 'Spring Boot','NestJs', 'PostgreSQL','SQL Server', 'RabbitMQ', 'React'],
  },
]

const skills = [
  {
    category: 'Backend',
    items: '.NET Core · Spring Boot · NestJs · Python · SignalR · Hangfire',
  },
  {
    category: 'Frontend',
    items: 'ReactJS · Next.js · Tailwind CSS · Material UI',
  },
  {
    category: 'Data',
    items: 'PostgreSQL · Oracle · SQL Server · MongoDB · Redis',
  },
  {
    category: 'Systems',
    items: 'Microservices · Kafka · RabbitMQ · Clean Architecture',
  },
  {
    category: 'Delivery',
    items: 'Docker · GitHub Actions · CI/CD · Playwright',
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [avatarError, setAvatarError] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('minhdang9703@gmail.com')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <main className="site-shell">
      {/* Header */}
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Dang Hoang Minh home">
          <span className="brand-mark">DM</span>
          <span>dang hoang minh</span>
        </a>

        <nav
          className={menuOpen ? 'nav-links is-open' : 'nav-links'}
          aria-label="Main navigation"
        >
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#stack" onClick={() => setMenuOpen(false)}>
            Stack
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a
            className="nav-contact"
            href="mailto:minhdang9703@gmail.com"
            onClick={() => setMenuOpen(false)}
          >
            Let's talk <ArrowUpRight size={14} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot"></span> Available for thoughtful products
          </p>

          <h1>
            Building the
            <br />
            <em>systems</em> behind
            <br />
            useful products.
          </h1>

          <p className="hero-intro">
            I'm Minh — a fullstack developer based in Ho Chi Minh City. I turn complex
            business requirements into resilient, understandable software.
          </p>

          <div className="hero-actions">
            <a href="#work" className="button button-primary">
              Explore my work <ArrowDown size={16} />
            </a>
            <button className="text-button" onClick={copyEmail}>
              {copied ? <Check size={16} /> : <Copy size={16} />}{' '}
              {copied ? 'Email copied' : 'Copy email'}
            </button>
          </div>
        </div>

        <div className="hero-aside" aria-label="Profile summary">
          <div className="coordinate">
            10°44'N
            <br />
            106°41'E
          </div>

          <div className="orbital-graphic">
            <span></span>
            <span></span>
            <span></span>
            {!avatarError ? (
              <img
                src="/avatar.jpg"
                alt="Dang Hoang Minh"
                className="avatar-img"
                onError={() => setAvatarError(true)}
              />
            ) : (
              <b>DM</b>
            )}
          </div>

          <p className="hero-note">
            Currently focused on
            <br />
            <strong>distributed systems</strong>
            <br />
            and product-minded engineering.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="metrics" aria-label="Career highlights">
        <div>
          <strong>04</strong>
          <span>
            years building
            <br />
            software
          </span>
        </div>
        <div>
          <strong>17</strong>
          <span>
            banks connected
            <br />
            through automation
          </span>
        </div>
        <div>
          <strong>∞</strong>
          <span>
            have experienced with
            <br />
            process payment
          </span>
        </div>
        <div>
          <strong>∞</strong>
          <span>
            Hands-on experience working with
            <br />
            AI-assisted 
            <br />
          </span>
        </div>
      </section>

      {/* Work Section */}
      <section className="work-section section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work / 2022—2026</p>
          <h2>
            Where complexity
            <br />
            <em>became clarity.</em>
          </h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-index">{project.number}</div>
              <div className="project-content">
                <p className="project-company">{project.company}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-impact">
                  <span>Impact</span>
                  {project.impact}
                </p>
                <div className="tag-list">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <ChevronRight className="project-arrow" size={22} />
            </article>
          ))}
        </div>
      </section>

      {/* Stack Section */}
      <section className="stack-section section" id="stack">
        <div className="section-heading">
          <p className="eyebrow">The toolkit</p>
          <h2>
            Tools for the
            <br />
            <em>long game.</em>
          </h2>
        </div>

        <div className="skills-list">
          {skills.map((skill) => (
            <div className="skill-row" key={skill.category}>
              <span>{skill.category}</span>
              <strong>{skill.items}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section" id="about">
        <div className="about-label">
          <BriefcaseBusiness size={18} /> About me
        </div>

        <div className="about-copy">
          <h2>
            Good architecture
            <br />
            makes a <em>difference.</em>
          </h2>
          <p>
            My goal is to become an engineer who can analyze and deliver technical solutions
            to real business challenges. I care about the decisions beneath the interface —
            the data flows, boundaries, and small details that make software dependable.
          </p>
          <div className="location">
            <MapPin size={16} /> Binh Chanh, Ho Chi Minh City · Vietnam
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div>
          <p className="eyebrow">Have a problem worth solving?</p>
          <a className="footer-email" href="mailto:minhdang9703@gmail.com">
            minhdang9703@gmail.com - 0929540370 <ArrowUpRight size={22} />
          </a>
        </div>

        <div className="footer-meta">
          <div className="socials">
            <a
              href="https://github.com/minhdang9703"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitBranch />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkIcon />
            </a>
            <a
              href="mailto:minhdang9703@gmail.com"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
          <span>© 2026 Dang Hoang Minh - 0929540370</span>
        </div>
      </footer>
    </main>
  )
}
