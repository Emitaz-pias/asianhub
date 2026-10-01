import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, BadgeCheck, Check, ChevronDown, CircleHelp, Headphones, Mail,
  Menu, Send, ShieldCheck, Smartphone, Wallet, X
} from "lucide-react";
import heroFootball from "./assets/hero-football.webp";
import "./styles.css";

const config = {
  supportEmail: "team@YOUR-DOMAIN.com",
  telegramUrl: "https://t.me/YOUR_SUPPORT_USERNAME",
  formEndpoint: "" // Add a secure form endpoint before launch.
};

const faqs = [
  ["What is an E-Wallet Agent?", "An E-Wallet Agent supports payment-related transactions under an approved operator's procedures. Confirm duties, eligibility, and terms with the authorized team."],
  ["How do I apply?", "Complete the application form with accurate contact details. The team can contact you to explain eligibility and the review process."],
  ["Is approval guaranteed?", "No. Applications are reviewed and approval is subject to verification, applicable laws, and the operator's requirements."],
  ["What information should I provide?", "Provide only the requested contact details. Do not submit passwords, OTPs, bank PINs, or payment credentials through this form."],
  ["Where can I read the terms?", "Review the Terms and Privacy Policy before using any linked service. Availability and eligibility can vary by location."]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", country: "", email: "", phone: "", contactMethod: "Telegram", telegram: "" });

  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.country.trim() || !form.email.trim() || !form.phone.trim() || !form.telegram.trim()) {
      setError("Please complete all required fields.");
      return;
    }
    if (!config.formEndpoint) {
      setError("The application form is in preview mode. The site owner must connect a secure form endpoint before accepting applications.");
      return;
    }
    try {
      const res = await fetch(config.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Unable to submit right now. Please try again later.");
      setSubmitted(true);
      setForm({ name: "", country: "", email: "", phone: "", contactMethod: "Telegram", telegram: "" });
    } catch (err) {
      setError(err.message || "Submission failed. Please try again.");
    }
  }

  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Asian Hub home"><span>ASIAN</span><b>HUB</b></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <button onClick={() => jump("about")}>About us</button>
          <button onClick={() => jump("working")}>Working with Us</button>
          <button onClick={() => jump("solutions")}>Solutions</button>
          <button onClick={() => jump("faq")}>FAQ</button>
          <button onClick={() => jump("contact")}>Contacts</button>
        </nav>
        <button className="nav-cta" onClick={() => jump("application")}>BECOME AN AGENT <ArrowUpRight size={16}/></button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow"><span className="pulse"/> ASIAN HUB · AGENT PROGRAM</span>
            <h1>Build your next opportunity with <em>Games &amp; Sports.</em></h1>
            <p>Explore our agent information, understand the process, and talk with the team about eligibility and next steps.</p>
            <div className="hero-actions">
              <button className="btn primary" onClick={() => jump("application")}>BECOME AN AGENT <ArrowUpRight size={17}/></button>
              <button className="btn outline" onClick={() => jump("working")}>WORKING WITH US</button>
            </div>
            <div className="hero-pills"><span><Smartphone/> Mobile-friendly process</span><span><ShieldCheck/> Terms reviewed up front</span></div>
          </div>
          <img className="hero-backdrop" src={heroFootball} alt="Football player on a stadium pitch" />
        </section>

        <section className="stats-wrap" id="about">
          <div className="stats-card">
            <div className="stat"><strong>Games</strong><small>GUIDES &amp; CATEGORIES</small></div>
            <div className="stat"><strong>Sports</strong><small>EVENT INFORMATION</small></div>
            <div className="stat"><strong>Agent</strong><small>PROGRAM OVERVIEW</small></div>
            <div className="stat"><strong>Support</strong><small>APPLICATION HELP</small></div>
          </div>
        </section>

        <section className="process section" id="working">
          <div className="process-copy">
            <span className="kicker">WORKING WITH US</span>
            <h2>A clear path to <em>get started.</em></h2>
            <p>Learn what the role involves, share your contact details, and speak with the team before making a decision.</p>
          </div>
          <div className="process-list">
            {[["01", "Send an inquiry", "Tell us how to reach you and what you would like to know."], ["02", "Review the details", "Discuss eligibility, responsibilities, and applicable terms with the team."], ["03", "Decide your next step", "If approved, follow the official onboarding instructions."]].map(([n, title, copy]) => (
              <article className="process-row" key={n}><strong>{n}</strong><span className="process-rule"/><div><h3>{title}</h3><p>{copy}</p></div></article>
            ))}
          </div>
        </section>

        <section className="advantages section">
          <div className="section-heading light-heading"><span className="kicker">WHY ASIAN HUB</span><h2>Useful support at <em>every step.</em></h2></div>
          <div className="advantage-grid">
            <article><Wallet/><h3>Clear role</h3><p>Understand responsibilities and requirements before applying.</p></article>
            <article><BadgeCheck/><h3>Guided review</h3><p>Get information about the review process from the support team.</p></article>
            <article><Headphones/><h3>Direct support</h3><p>Ask questions and get help with the next steps.</p></article>
            <article><ShieldCheck/><h3>Terms first</h3><p>Review eligibility and local requirements before proceeding.</p></article>
          </div>
        </section>

        <section className="who section">
          <div className="who-copy"><span className="kicker">WHO CAN APPLY</span><h2>Is this right <em>for you?</em></h2>
            <ul className="check-list"><li><Check/> Adults interested in Games &amp; Sports communities</li><li><Check/> People who value clear rules and communication</li><li><Check/> Applicants ready to complete a verification process</li></ul>
            <button className="btn primary" onClick={() => jump("application")}>START AN APPLICATION <ArrowUpRight size={17}/></button>
          </div>
          <div className="who-visual"><div className="who-panel"><span className="who-panel-label">BEFORE YOU APPLY</span><h3>Know the role.<br/>Review the terms.</h3><p>Eligibility and availability may vary by location.</p><div><ShieldCheck/><span>Verify details with the authorized team.</span></div></div></div>
        </section>

        <section className="solutions section" id="solutions">
          <div className="section-heading"><span className="kicker">OUR SOLUTIONS</span><h2>Explore what <em>we offer.</em></h2><p>Start with the information that best matches your interests.</p></div>
          <div className="solution-grid">
            <article className="solution-card"><span className="solution-icon">G</span><span className="solution-label">01 / GAMES</span><h3>Games guide</h3><p>Learn about game categories, formats, and responsible play.</p><button onClick={() => jump("faq")}>Explore details <ArrowUpRight size={16}/></button></article>
            <article className="solution-card featured"><span className="solution-icon">S</span><span className="solution-label">02 / SPORTS</span><h3>Sports guide</h3><p>Find useful context about sports, competitions, and schedules.</p><button onClick={() => jump("faq")}>Explore details <ArrowUpRight size={16}/></button></article>
            <article className="solution-card"><span className="solution-icon">A</span><span className="solution-label">03 / SUPPORT</span><h3>E-Wallet Agent</h3><p>Review the application process and ask the team about the role.</p><button onClick={() => jump("application")}>Apply now <ArrowUpRight size={16}/></button></article>
          </div>
        </section>

        <section className="application section" id="application">
          <div className="section-heading"><span className="kicker">GET IN TOUCH</span><h2>Start your <em>application.</em></h2><p>Share your contact information and the team can explain the next steps.</p></div>
          <div className="form-wrap">
            {submitted ? <div className="success"><BadgeCheck size={44}/><h3>Application submitted</h3><p>Your details have been received. The team may contact you using the information provided.</p></div> : <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>Full name *<input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your full name" required /></label>
                <label>Country *<input value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} placeholder="Your country" required /></label>
                <label>Email *<input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" required /></label>
                <label>Phone *<input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Mobile number with country code" required /></label>
                <fieldset className="contact-choice"><legend>Preferred contact method *</legend><label><input type="radio" name="method" checked={form.contactMethod === "Telegram"} onChange={() => setForm({ ...form, contactMethod: "Telegram" })}/> Telegram</label><label><input type="radio" name="method" checked={form.contactMethod === "Other"} onChange={() => setForm({ ...form, contactMethod: "Other" })}/> Other</label></fieldset>
                <label className="wide">Telegram username / preferred contact *<input value={form.telegram} onChange={e => setForm({ ...form, telegram: e.target.value })} placeholder="@username or contact details" required /></label>
              </div>
              <p className="form-note"><ShieldCheck size={16}/> Do not submit passwords, OTPs, bank PINs, or payment credentials.</p>
              {error && <p className="form-error" role="alert">{error}</p>}
              <button className="btn primary submit-btn" type="submit">SEND APPLICATION <ArrowUpRight size={17}/></button>
              <p className="privacy-note">By submitting, you confirm that the information is accurate and acknowledge the Privacy Policy.</p>
            </form>}
          </div>
        </section>

        <section className="faq section" id="faq">
          <div className="section-heading"><span className="kicker">FAQ</span><h2>Frequently asked <em>questions.</em></h2></div>
          <div className="faq-layout"><div className="faq-list">{faqs.map(([q, a], i) => <div className="faq-item" key={q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>{q}<ChevronDown className={openFaq === i ? "rotated" : ""}/></button>{openFaq === i && <p>{a}</p>}</div>)}</div>
            <aside className="contact-card" id="contact"><span className="contact-icon"><CircleHelp/></span><h3>Need more details?</h3><p>Contact the support team with questions about the application process.</p><a className="btn primary full" href={config.telegramUrl} target="_blank" rel="noopener noreferrer"><Send size={16}/> CONTACT ON TELEGRAM</a><a className="btn secondary full" href={`mailto:${config.supportEmail}`}><Mail size={16}/> SEND AN EMAIL</a></aside>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main"><div className="footer-about"><a className="brand" href="#home"><span>ASIAN</span><b>HUB</b></a><p>Games, sports, and E-Wallet Agent information.</p></div><div><h4>Explore</h4><button onClick={() => jump("solutions")}>Solutions</button><button onClick={() => jump("working")}>Working with Us</button><button onClick={() => jump("faq")}>FAQ</button></div><div><h4>Information</h4><a href="/terms.html">Terms &amp; Conditions</a><a href="/privacy.html">Privacy Policy</a><a href="#responsible">Responsible Play</a></div><div><h4>Contacts</h4><a href={`mailto:${config.supportEmail}`}><Mail size={15}/> {config.supportEmail}</a><a href={config.telegramUrl} target="_blank" rel="noopener noreferrer"><Send size={15}/> Telegram Support</a></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Asian Hub. All rights reserved.</span><span>Asian Hub is an independent affiliate information site, not a service operator.</span></div>
        <div className="hidden-anchors"><span id="responsible">Responsible play: Set limits and seek help if play causes harm.</span></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
