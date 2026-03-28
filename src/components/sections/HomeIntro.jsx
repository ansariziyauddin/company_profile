import React from 'react';
import styles from './HomeIntro.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Laptop, Code, Rocket, RefreshCw, Link, Wrench, ShieldCheck, HeartHandshake, Clock, Target } from 'lucide-react';

export function HomeIntro() {
  const revealRef = useScrollReveal();
  const listsRef1 = useScrollReveal();
  const listsRef2 = useScrollReveal();

  const services = [
    { icon: <Laptop />, title: "Web & Mobile", text: "Design and development of mobile and web applications" },
    { icon: <Code />, title: "Custom Software", text: "Custom software solutions tailored to specific business needs" },
    { icon: <Rocket />, title: "MVPs & Prototypes", text: "Development of new products, MVPs, and proof-of-concepts" },
    { icon: <RefreshCw />, title: "Modernization", text: "Enhancement, optimization, and modernization of existing systems" },
    { icon: <Link />, title: "System Integration", text: "System integrations and third-party service integrations" },
    { icon: <Wrench />, title: "Maintenance", text: "Ongoing maintenance, support, and performance improvements" }
  ];

  const principles = [
    { icon: <HeartHandshake />, title: "Clear Communication", text: "Clear and consistent communication throughout the lifecycle" },
    { icon: <Clock />, title: "Realistic Timelines", text: "Realistic timelines and transparent execution" },
    { icon: <ShieldCheck />, title: "High Standards", text: "High standards of quality, security, and performance" },
    { icon: <Target />, title: "Long-term Reliability", text: "Long-term reliability and maintainability of your solutions" }
  ];

  return (
    <section className={styles.introSection}>
      <div className={`container reveal ${styles.headerBlock}`} ref={revealRef}>
        <h2 className={styles.mainTitle}>14+ Years of Engineering Excellence</h2>
        <div className={styles.textContent}>
          <p className={styles.lead}>
            I have over 14 years of experience in the IT industry, working with clients across different business domains to design, build, and support digital solutions that are reliable, secure, and scalable. Over the years, I’ve collaborated with startups, growing businesses, and established organizations, helping them transform ideas into working systems and improve existing products.
          </p>
          <p className={styles.leadSecondary}>
            My approach is solution-oriented and business-focused. I believe technology should simplify processes, improve efficiency, and support long-term growth. Before starting any work, I focus on understanding your business goals, challenges, timelines, and expectations, so the outcome aligns closely with what you actually need.
          </p>
        </div>
      </div>

      <div className={`container reveal ${styles.cardSection}`} ref={listsRef1}>
        <h3 className={styles.heading}>What We Do</h3>
        <p className={styles.subText}>We provide end-to-end software development and technology services, including consulting, architecture guidance, and problem-solving support.</p>
        
        <div className={styles.grid}>
          {services.map((svc, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrapper}>{svc.icon}</div>
              <h4>{svc.title}</h4>
              <p>{svc.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.centeredNote}>
          We work across all project sizes and domains — from short-term assignments to long-term engagements — and adapt our delivery model to match your requirements.
        </div>
      </div>

      <div className={`container reveal ${styles.cardSection}`} ref={listsRef2}>
        <h3 className={styles.heading}>How We Work</h3>
        <p className={styles.subText}>Our objective is not just to deliver software, but to build trusted partnerships by delivering solutions that create measurable value for your business.</p>

        <div className={styles.grid4}>
          {principles.map((prin, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrapperAccent}>{prin.icon}</div>
              <h4>{prin.title}</h4>
              <p>{prin.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
