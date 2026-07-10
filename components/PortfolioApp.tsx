"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  GitBranch,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Send,
  X,
} from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { portfolio } from "../content/portfolio";
import { Reveal, SectionHeading, TechBadge } from "./ui/Primitives";

const HeroScene = dynamic(() => import("./three/HeroScene").then((module) => module.HeroScene), { ssr: false });

const nav = [
  ["Обо мне", "about"],
  ["Стек", "skills"],
  ["Опыт", "experience"],
  ["Проекты", "projects"],
  ["Контакты", "contact"],
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="На главную"><span>&lt;/&gt;</span><b>ANDROID.SYS</b></a>
      <nav className={open ? "nav open" : "nav"} aria-label="Основная навигация">
        {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a className="status-pill" href="#contact"><i /> {portfolio.availability}</a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Закрыть меню" : "Открыть меню"}>{open ? <X /> : <Menu />}</button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid-bg" />
      <div className="hero-copy">
        <p className="eyebrow"><span>01</span> {portfolio.eyebrow}</p>
        <h1>{portfolio.name}</h1>
        <p className="hero-role">{portfolio.role}</p>
        <h2>{portfolio.slogan}</h2>
        <p className="hero-description">{portfolio.description}</p>
        <div className="badge-row">{["Kotlin", "Jetpack Compose", "Coroutines", "Flow", "Clean Architecture"].map(x => <TechBadge key={x}>{x}</TechBadge>)}</div>
        <div className="hero-actions">
          <a className="button primary" href="#projects">Смотреть проекты <ArrowDownRight /></a>
          <a className="button ghost" href="#contact">Обсудить задачу <ArrowUpRight /></a>
        </div>
        <div className="hero-meta"><span><MapPin /> {portfolio.city}</span><span><i /> Доступен для связи</span></div>
      </div>
      <div className="hero-visual">
        <div className="visual-label top">SYSTEM / ONLINE <span>99.7%</span></div>
        <HeroScene />
        <div className="orbit-copy"><b>ANDROID</b><span>PRODUCT ENGINEERING</span></div>
        <div className="visual-label bottom">KOTLIN CORE · COMPOSE UI</div>
      </div>
      <div className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <SectionHeading index="02" note="PROFILE">Обо мне</SectionHeading>
      <div className="about-grid">
        <Reveal className="about-lead"><p>Я соединяю продуктовый взгляд, системное мышление и инженерную дисциплину.</p><span>В работе ценю ясные решения, измеримый результат и интерфейсы, которые ощущаются естественно.</span></Reveal>
        <div className="metric-grid">
          <Reveal className="metric feature"><small>EXPERIENCE</small><strong>{portfolio.experience}</strong><span>лет в Android-разработке</span></Reveal>
          {portfolio.metrics.map((metric) => <Reveal className="metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></Reveal>)}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading index="03" note="TOOLKIT">Технологический стек</SectionHeading>
      <div className="skills-grid">
        {portfolio.skills.map((skill, i) => (
          <Reveal className="skill-card" key={skill.title}>
            <div className="skill-top"><span>{skill.icon}</span><small>0{i + 1}</small></div>
            <h3>{skill.title}</h3>
            <div>{skill.items.map(item => <TechBadge key={item}>{item}</TechBadge>)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeading index="04" note="TIMELINE">Опыт работы</SectionHeading>
      <div className="timeline">
        {portfolio.experienceItems.map((item) => (
          <Reveal className="timeline-row" key={item.company}>
            <div className="timeline-dot" />
            <div className="timeline-title"><small>{item.period}</small><h3>{item.company}</h3><span>{item.role}</span></div>
            <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectMockup({ accent, index }: { accent: string; index: string }) {
  return <div className={`project-mockup ${accent}`}><div className="mock-status"><i /><i /><i /></div><div className="mock-kpi">{index === "01" ? "₽ 128 450" : index === "02" ? "12 active" : "86 bpm"}</div><div className="mock-chart"><i /><i /><i /><i /><i /><i /></div><div className="mock-list"><span /><span /><span /></div></div>;
}

function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeading index="05" note="SELECTED WORK">Избранные проекты</SectionHeading>
      <div className="projects-grid">
        {portfolio.projects.map((project) => (
          <Reveal className="project-card" key={project.title}>
            <div className="project-head"><span>{project.index}</span><small>{project.category}</small><ArrowUpRight /></div>
            <ProjectMockup accent={project.accent} index={project.index} />
            <h3>{project.title}</h3><p>{project.description}</p>
            <div className="project-result"><small>РЕЗУЛЬТАТ</small><b>{project.result}</b></div>
            <div className="badge-row">{project.stack.map(item => <TechBadge key={item}>{item}</TechBadge>)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="section expertise" id="expertise">
      <SectionHeading index="06" note="SYSTEM THINKING">Профессиональная экспертиза</SectionHeading>
      <div className="expertise-map">
        <div className="core"><div>&lt;/&gt;</div><b>ANDROID<br/>CORE</b></div>
        <div className="expertise-list">{portfolio.expertise.map((item, i) => <Reveal className="expertise-item" key={item}><span>0{i + 1}</span>{item}<i /></Reveal>)}</div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section" id="process">
      <SectionHeading index="07" note="HOW I WORK">Подход к разработке</SectionHeading>
      <div className="process-line">{portfolio.process.map((step, i) => <Reveal className="process-step" key={step}><span>{String(i + 1).padStart(2, "0")}</span><i>{i % 2 ? "◇" : "⌁"}</i><b>{step}</b></Reveal>)}</div>
      <blockquote>«Качественная разработка — это не только рабочий код, а ясная архитектура, наблюдаемое поведение и возможность спокойно развивать продукт.»</blockquote>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="section contact-section" id="contact">
      <SectionHeading index="08" note="LET'S TALK">Контакты</SectionHeading>
      <div className="contact-grid">
        <div className="contact-copy"><small>START A CONVERSATION</small><h2>Есть сложная задача?<br/><span>Давайте разберём.</span></h2><p>Обсудим продукт, архитектуру приложения или новую роль в команде.</p><div className="social-row"><a href={`mailto:${portfolio.email}`}><Mail /> Email</a><a href="#"><MessageCircle /> Telegram</a><a href="#"><GitBranch /> GitHub</a><a href="#"><BriefcaseBusiness /> LinkedIn</a></div></div>
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <label>Ваше имя<input required name="name" placeholder="Как к вам обращаться" /></label>
          <label>Email<input required type="email" name="email" placeholder="name@company.com" /></label>
          <label className="wide">Сообщение<textarea required name="message" placeholder="Коротко расскажите о задаче" rows={4} /></label>
          <button className="button primary wide" type="submit">{sent ? <><CheckCircle2 /> Сообщение готово</> : <>Отправить сообщение <Send /></>}</button>
          {sent && <p className="form-note wide">Спасибо! В демо-версии форма не отправляет данные — замените обработчик на ваш почтовый сервис.</p>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return <footer><a className="brand" href="#top"><span>&lt;/&gt;</span><b>{portfolio.name}</b></a><p>© 2026 · Android product engineering</p><a href="#top">Наверх ↑</a></footer>;
}

export function PortfolioApp() {
  return <><Header /><main><Hero /><About /><Skills /><Experience /><Projects /><Expertise /><Process /><Contact /></main><Footer /></>;
}
