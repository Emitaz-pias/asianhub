import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, ShieldCheck, Zap, Headphones, Wallet, BadgeCheck, ChevronDown, Menu, X, CheckCircle2 } from "lucide-react";
import "./styles.css";

const config = {
  formEndpoint: "https://sheetdb.io/api/v1/2vhztxt9mef6e"
};

const faqs = [
  ["What is an E-Wallet Agent?", "An E-Wallet Agent supports payment-related transactions under an approved operator's procedures. Specific duties, eligibility, and terms must be confirmed with the authorized team."],
  ["How do I apply?", "Complete the application form with accurate contact details. The team can contact you to explain eligibility and the verification process."],
  ["Is approval guaranteed?", "No. Applications are reviewed and approval is subject to verification, applicable laws, and the operator's requirements."],
  ["What information should I provide?", "Provide only the requested contact details. Do not submit passwords, OTPs, bank PINs, or payment credentials through this form."],
  ["Where can I read the terms?", "Review the Terms, Privacy Policy, and responsible-gambling information before using any linked service."]
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
    try {
      const payload = new FormData();
      Object.entries(form).forEach(([key, value]) => payload.append(`data[${key}]`, value));
      payload.append("data[submittedAt]", new Date().toISOString());
      const res = await fetch(config.formEndpoint, {
        method: "POST",
        body: payload
      });
      const result = await res.json();
      if (!res.ok || !result.created) throw new Error("Unable to submit right now. Please try again later.");
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
          <button onClick={() => jump("home")}>Home</button>
          <button onClick={() => jump("platforms")}>Games &amp; Sports</button>
          <button onClick={() => jump("agent")}>E-Wallet Agent</button>
          <button onClick={() => jump("steps")}>How to Apply</button>
          <button onClick={() => jump("faq")}>FAQ</button>
          <button onClick={() => jump("application")}>Apply</button>
        </nav>
        <button className="nav-cta" onClick={() => jump("agent")}>Get Started <ArrowUpRight size={16}/></button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-bg-glow"></div>
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse"></span> GAMES &amp; SPORTS <i/> E-WALLET AGENT</div>
            <h1>One hub.<br/>Clear choices.<br/><em>New opportunities.</em></h1>
            <p>Explore games and sports information, and learn about E-Wallet Agent opportunities. Review the details, eligibility, and terms before proceeding.</p>
            <div className="hero-actions">
              <button className="btn primary" onClick={() => jump("platforms")}>Explore Games &amp; Sports <ArrowUpRight size={17}/></button>
              <button className="btn secondary" onClick={() => jump("agent")}>Become an E-Wallet Agent</button>
            </div>
            <div className="trust-row"><span><ShieldCheck/> Clear information</span><span><Zap/> Simple process</span><span><Headphones/> Support contact</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract digital wallet illustration">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="glow-card"><div className="card-top"><span>ASIAN HUB</span><span className="chip"></span></div><div className="card-wallet"><Wallet size={68}/></div><div className="card-bottom"><span>Digital wallet</span><b>•••• 2048</b></div></div>
            <div className="coin coin-a">A</div><div className="coin coin-b">✦</div><div className="spark spark-a"></div><div className="spark spark-b"></div>
          </div>
        </section>

        <section className="platforms section" id="platforms">
          <div className="section-heading"><span className="kicker">GAMES &amp; SPORTS</span><h2>Explore <em>Games and Sports</em></h2><p>Find information about popular games and sports, and learn about the E-Wallet Agent application process.</p></div>
          <div className="platform-grid">
            <article className="platform-card">
              <div className="platform-brand"><span className="brand-word">GAMES</span><span className="platform-tag">GAME GUIDE</span></div>
              <p>Explore game categories, learn how they work, and review the rules before you play.</p>
              <ul><li><CheckCircle2/> Game information</li><li><CheckCircle2/> Rules and formats</li><li><CheckCircle2/> Play responsibly</li></ul>
            </article>
            <article className="platform-card">
              <div className="platform-brand"><span className="brand-word">SPORTS</span><span className="platform-tag">SPORTS GUIDE</span></div>
              <p>Explore sports and competitions, with useful context for fans and visitors.</p>
              <ul><li><CheckCircle2/> Sports overview</li><li><CheckCircle2/> Competition formats</li><li><CheckCircle2/> Latest information</li></ul>
            </article>
          </div>
        </section>

        <section className="agent-section section" id="agent">
          <div className="agent-visual"><div className="wallet-illustration"><div className="wallet-screen"><Wallet size={52}/><b>E-WALLET</b><small>AGENT PROGRAM</small></div><div className="wallet-base"></div><div className="floating-token token-one">A</div><div className="floating-token token-two">↗</div></div></div>
          <div className="agent-copy">
            <span className="kicker">E-WALLET AGENT</span>
            <h2>Build your next step with <em>clear information.</em></h2>
            <p>Learn about the E-Wallet Agent application process, review the requirements, and contact the team for details. Acceptance is subject to verification and applicable rules.</p>
            <div className="benefits">
              <div><span><Wallet/></span><b>Defined role</b><small>Understand responsibilities and requirements.</small></div>
              <div><span><BadgeCheck/></span><b>Review process</b><small>Applications are subject to verification.</small></div>
              <div><span><Headphones/></span><b>Support contact</b><small>Ask questions before applying.</small></div>
              <div><span><ShieldCheck/></span><b>Clear terms</b><small>Review conditions before proceeding.</small></div>
            </div>
            <button className="btn primary" onClick={() => jump("application")}>Apply for E-Wallet Agent <ArrowUpRight size={17}/></button>
          </div>
        </section>

        <section className="steps section" id="steps">
          <div className="section-heading"><span className="kicker">HOW TO APPLY</span><h2>Four <em>simple steps</em></h2><p>Take time to understand the role and provide accurate information.</p></div>
          <div className="steps-grid">
            {[["01","Understand the role","Read the responsibilities, requirements, and terms."],["02","Complete the form","Provide accurate contact details in the application form."],["03","Verification","The team may contact you to explain the review process."],["04","Next steps","If approved, follow the official onboarding instructions."]].map(([n,t,d])=><article className="step-card" key={n}><span className="step-num">{n}</span><h3>{t}</h3><p>{d}</p></article>)}
          </div>
        </section>

        <section className="application section" id="application">
          <div className="section-heading"><span className="kicker">APPLICATION</span><h2>Start your <em>application</em></h2><p>Fill in the form below. Required fields are marked with an asterisk.</p></div>
          <div className="form-wrap">
            {submitted ? <div className="success"><CheckCircle2 size={42}/><h3>Application submitted</h3><p>Your details have been received. The team may contact you using the information provided.</p></div> : <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>Full name *<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your full name" required /></label>
                <label>Country *<input value={form.country} onChange={e=>setForm({...form,country:e.target.value})} placeholder="Your country" required /></label>
                <label>Email *<input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com" required /></label>
                <label>Phone *<input type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Mobile number with country code" required /></label>
                <fieldset className="contact-choice"><legend>Preferred contact method *</legend><label><input type="radio" name="method" checked={form.contactMethod==="Telegram"} onChange={()=>setForm({...form,contactMethod:"Telegram"})}/> Telegram</label><label><input type="radio" name="method" checked={form.contactMethod==="Other"} onChange={()=>setForm({...form,contactMethod:"Other"})}/> Other</label></fieldset>
                <label className="wide">Telegram username / preferred contact *<input value={form.telegram} onChange={e=>setForm({...form,telegram:e.target.value})} placeholder="@username or contact details" required /></label>
              </div>
              <p className="form-note"><ShieldCheck size={16}/> Do not submit passwords, OTPs, bank PINs, or payment credentials.</p>
              {error && <p className="form-error" role="alert">{error}</p>}
              <button className="btn primary submit-btn" type="submit">Submit Application <ArrowUpRight size={17}/></button>
              <p className="privacy-note">Your details are sent through SheetDB and stored in Google Sheets. See the Privacy Policy before submitting.</p>
            </form>}
          </div>
        </section>

        <section className="faq section" id="faq">
          <div className="section-heading"><span className="kicker">FAQ</span><h2>Frequently asked <em>questions</em></h2></div>
          <div className="faq-list">{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}>{q}<ChevronDown className={openFaq===i?"rotated":""}/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main"><div className="footer-about"><a className="brand" href="#home"><span>ASIAN</span><b>HUB</b></a><p>Games, sports, and E-Wallet Agent information.</p></div><div><h4>Explore</h4><button onClick={()=>jump("platforms")}>Games &amp; Sports</button><button onClick={()=>jump("agent")}>E-Wallet Agent</button><button onClick={()=>jump("faq")}>FAQ</button><button onClick={()=>jump("application")}>Apply</button></div><div><h4>Information</h4><a href="/terms.html">Terms & Conditions</a><a href="/privacy.html">Privacy Policy</a><a href="/responsible.html">Responsible Play</a></div><div><h4>Application</h4><button onClick={()=>jump("application")}>Submit an application</button><button onClick={()=>jump("steps")}>How to Apply</button></div></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Asian Hub. All rights reserved.</span><span>18+ · Gambling can be harmful. Only use services where legal and permitted.</span></div>
        <div className="hidden-anchors"><span id="responsible">Responsible play: Set limits and seek help if play causes harm.</span></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
