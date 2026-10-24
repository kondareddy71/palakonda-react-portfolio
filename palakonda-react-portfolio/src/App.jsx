import { useState } from 'react';

const EMAIL = 'vutukuripalakondareddy@gmail.com';
const skills = [
  ['Java', 'Core Java, OOP, problem solving'], ['Web Development', 'HTML5, CSS3, responsive layouts'],
  ['JavaScript', 'ES6+, DOM, client-side logic'], ['React.js', 'Components, props, state, hooks'],
  ['Backend', 'Node.js, Express.js, REST APIs'], ['Database', 'SQL, MySQL, CRUD, schema design'],
  ['Java Full Stack', 'Servlets, JSP, Hibernate, Spring Boot'], ['Tools', 'Git, GitHub, VS Code, Eclipse'],
];
const projects = [
  { n: '01', type: 'FINAL-YEAR ACADEMIC PROJECT', title: 'Hospital Management System', subtitle: 'Full-stack application for healthcare workflows', description: 'Developed a web application to digitize patient records, appointments, and billing. Built REST APIs, designed a MySQL schema with CRUD operations, and implemented role-based access for Admin, Doctor, Nurse, and Support Staff.', tech: ['React.js', 'Node.js', 'Express.js', 'MySQL'], link: '' },
  { n: '02', type: 'AI / DEEP LEARNING PROJECT', title: 'Grain Palette', subtitle: 'Rice type classification using deep learning', description: 'Designed a user-friendly application to classify rice types using machine-learning techniques. Add the verified repository link and model evaluation details before publishing.', tech: ['Python', 'Deep Learning', 'Transfer Learning'], link: 'https://github.com/kondareddy71/Grain-Palette--A-Deep-Learning-odyssey-in-Rice-Type-Claiication-Through-Transfer' },
];

function SectionTitle({ eyebrow, title, note }) {
  return <div className="section-title"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{note && <p className="muted">{note}</p>}</div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formMessage, setFormMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nReply email: ${form.email}\n\n${form.message}`);
    setFormMessage('Your email app should open with your message ready to send.');
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header"><nav className="nav wrap" aria-label="Main navigation">
      <a className="brand" href="#home" onClick={() => setMenuOpen(false)}><span className="brand-mark">PR</span><span>Palakonda Reddy<span className="brand-dot">.</span></span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '✕' : '☰'}</button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        <a className="nav-cta" href="/resume.pdf" download="Palakonda-Reddy-Resume.pdf">Resume ↗</a>
      </div>
    </nav></header>

    <main id="main">
      <section className="hero wrap" id="home">
        <div className="hero-glow" />
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> JAVA DEVELOPER · WEB DEVELOPER</p>
          <h1>Building useful<br /><span className="gradient">digital experiences.</span></h1>
          <p className="hero-description">I'm Vutukuru Palakonda Reddy, a 2026 Computer Science and Engineering graduate interested in Java development and full-stack web applications.</p>
          <div className="actions"><a className="button primary" href="#projects">Explore my work <span>↘</span></a><a className="button secondary" href="/resume.pdf" download="Palakonda-Reddy-Resume.pdf">Download resume <span>↓</span></a></div>
          <div className="socials"><a href="https://github.com/kondareddy71" target="_blank" rel="noreferrer">GitHub ↗</a><span>·</span><a href="https://www.linkedin.com/in/vutukukuru-palakonda-reddy-7202b6316" target="_blank" rel="noreferrer">LinkedIn ↗</a><span>·</span><a href={`mailto:${EMAIL}`}>Email ↗</a></div>
        </div>
        <div className="hero-visual"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="photo-frame"><img src="/assets/profile.jpg" alt="Portrait of Vutukuru Palakonda Reddy" onError={e => { e.currentTarget.style.display = 'none'; }} /></div><div className="float-tag tag-top">&lt;/&gt; Developer</div><div className="float-tag tag-bottom">Java · React · SQL</div><p className="visual-caption">BUILD · LEARN · IMPROVE</p></div>
        <div className="hero-foot"><span>PORTFOLIO / 2026</span><a href="#about">SCROLL TO EXPLORE ↓</a></div>
      </section>

      <section className="section wrap" id="about"><div className="about-grid"><SectionTitle eyebrow="A LITTLE ABOUT ME" title={<>Curious by nature.<br/><span className="gradient">Developer by choice.</span></>} /><div><p className="lead">I enjoy turning requirements into practical software, learning new tools, and solving problems through code.</p><p className="muted">My background includes Java Full Stack training and hands-on academic full-stack development with React.js, Node.js, Express.js, and MySQL. I value clear communication, collaboration, debugging, and continuous learning.</p><div className="facts"><div><strong>2026</strong><span>Graduate</span></div><div><strong>CSE</strong><span>B.Tech</span></div><div><strong>4</strong><span>Project team members</span></div></div></div></div></section>

      <section className="section section-alt" id="skills"><div className="wrap"><SectionTitle eyebrow="MY TOOLKIT" title="Skills I work with" note="Technologies and foundations relevant to my developer journey."/><div className="skills-grid">{skills.map(([name, desc], i) => <article className="skill-card" key={name}><span className="skill-num">0{i + 1}</span><div className="skill-symbol">{name === 'React.js' ? '⚛' : name === 'Java' ? 'J' : name === 'Database' ? '▤' : name === 'Backend' ? '{ }' : name === 'Tools' ? '⌘' : name === 'JavaScript' ? 'JS' : name === 'Java Full Stack' ? '☕' : '</>'}</div><h3>{name}</h3><p>{desc}</p></article>)}</div></div></section>

      <section className="section wrap" id="projects"><div className="project-heading"><SectionTitle eyebrow="SELECTED WORK" title="Projects with purpose" note="A selection of academic and technical work."/><span className="project-count">02 PROJECTS</span></div><div className="projects-grid">{projects.map(p => <article className="project-card" key={p.n}><div className="project-art"><span className="art-index">{p.n}</span><div className="art-orb"><span>{p.n === '01' ? '✚' : '✳'}</span></div><span className="art-caption">{p.n === '01' ? 'HEALTHCARE SYSTEMS' : 'IMAGE CLASSIFICATION'}</span></div><div className="project-info"><p className="eyebrow">{p.type}</p><h3>{p.title}</h3><p className="project-subtitle">{p.subtitle}</p><p className="muted">{p.description}</p><div className="tags">{p.tech.map(t => <span key={t}>{t}</span>)}</div>{p.link ? <a className="project-link" href={p.link} target="_blank" rel="noreferrer">View repository <span>↗</span></a> : <p className="project-note">Academic project · Team of 4</p>}</div></article>)}</div></section>

      <section className="section section-alt" id="experience"><div className="wrap experience-grid"><SectionTitle eyebrow="LEARNING & GROWTH" title="Training & education" note="Building a strong foundation and growing through practice."/><div className="timeline"><article className="timeline-item"><span className="timeline-date">JAVA FULL STACK DEVELOPMENT</span><h3>JSpiders</h3><p className="muted">Training covering Core Java, Servlets, JSP, Hibernate, Spring / Spring Boot, HTML, CSS, JavaScript, SQL, and React.js. Confirm the exact wording of the course fee waiver or selection achievement before publishing.</p></article><article className="timeline-item"><span className="timeline-date">MERN STACK DEVELOPMENT</span><h3>Smart Bridge / SmartInternz</h3><p className="muted">Hands-on training with React.js, Node.js, Express.js, and MongoDB.</p></article><article className="timeline-item"><span className="timeline-date">2022 — 2026</span><h3>B.Tech, Computer Science and Engineering</h3><p className="muted">Srinivasa Institute of Technology and Science, Kadapa · CGPA 7.8 / 10</p></article><article className="timeline-item"><span className="timeline-date">CERTIFICATION</span><h3>Advanced Computer Architecture — NPTEL</h3><p className="muted">Elite + Silver · Score: 83%</p></article></div></div></section>

      <section className="section wrap contact" id="contact"><div className="contact-copy"><SectionTitle eyebrow="LET'S CONNECT" title={<>Have an opportunity<br/>or idea?</>} note="I'm open to entry-level Java Developer and Web Developer opportunities."/><div className="contact-details"><a href={`mailto:${EMAIL}`}><span>✉</span><div><small>EMAIL</small>{EMAIL}</div><b>↗</b></a><a href="https://github.com/kondareddy71" target="_blank" rel="noreferrer"><span>⌘</span><div><small>GITHUB</small>github.com/kondareddy71</div><b>↗</b></a><a href="https://www.linkedin.com/in/vutukukuru-palakonda-reddy-7202b6316" target="_blank" rel="noreferrer"><span>in</span><div><small>LINKEDIN</small>Connect professionally</div><b>↗</b></a></div></div><form className="contact-form" onSubmit={handleSubmit}><label htmlFor="name">Your name</label><input id="name" required value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="Enter your name"/><label htmlFor="email">Your email</label><input id="email" type="email" required value={form.email} onChange={e => setForm({...form, email:e.target.value})} placeholder="you@example.com"/><label htmlFor="message">Message</label><textarea id="message" rows="4" required value={form.message} onChange={e => setForm({...form, message:e.target.value})} placeholder="Tell me about the opportunity..."/><div className="form-bottom"><p>This opens your default email app to send the message.</p><button className="button primary" type="submit">Prepare email ↗</button></div>{formMessage && <p className="form-status" role="status">{formMessage}</p>}</form></section>
    </main>
    <footer className="footer"><div className="wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">PR</span> Palakonda Reddy<span className="brand-dot">.</span></a><p>Designed and developed with React.</p><span>© {new Date().getFullYear()} Vutukuru Palakonda Reddy</span><a href="#home">BACK TO TOP ↑</a></div></footer>
  </>;
}
