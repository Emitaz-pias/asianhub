import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, ShieldCheck, Zap, Headphones, Trophy, BadgeCheck, ChevronDown, Menu, X, CheckCircle2, UsersRound, MessageCircle, BookOpen } from "lucide-react";
import "./styles.css";

const faqs = [
  ["What is Asian Hub?", "Asian Hub is an online community concept for people interested in sports, games, match analysis, and the culture around sports predictions. The site currently shares information and accepts community interest messages; it does not host a live forum or chat."],
  ["Can I place bets or open an account here?", "No. This website does not accept wagers, open accounts, handle deposits or withdrawals, or connect visitors to betting services."],
  ["Does Asian Hub recruit agents or affiliates?", "No. The community does not recruit agents, promote affiliate offers, or promise commissions, jobs, income, or financial returns."],
  ["What can I discuss?", "Sports, teams, competitions, games, match analysis, and prediction culture. Be clear about what is fact and what is opinion, and respect other members."],
  ["Who can join?", "The community is intended for people in all countries except Bangladesh. Check local laws before taking part in any discussion about betting. No betting services are offered here."],
  ["What information does the form collect?", "Only your email address and the message you choose to send, along with your consent and technical submission information processed by Netlify Forms. Do not send passwords, identity documents, or payment information."],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(-1);
  const [form, setForm] = useState({ email: "", message: "", consent: false });
  const [formState, setFormState] = useState("idle");

  const jump = (id) => {
    const target = document.getElementById(id);
    if (target) {
      const headerHeight = document.querySelector(".topbar")?.getBoundingClientRect().height || 0;
      const top = window.scrollY + target.getBoundingClientRect().top - headerHeight - 12;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (formState === "sending") return;
    setFormState("sending");
    try {
      const response = await fetch("https://sheetdb.io/api/v1/2vhztxt9mef6e", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [{
            email: form.email.trim(),
            message: form.message.trim(),
            consent: "yes",
            submittedAt: new Date().toISOString(),
          }],
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || Number(result.created) < 1) throw new Error("submission_failed");
      setForm({ email: "", message: "", consent: false });
      setFormState("sent");
    } catch {
      setFormState("error");
    }
  }

  return <div className="app">
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Asian Hub home"><span>ASIAN</span><b>HUB</b></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
        <button onClick={() => jump("home")}>Home</button><button onClick={() => jump("platforms")}>Community</button><button onClick={() => jump("agent")}>About</button><button onClick={() => jump("steps")}>How it works</button><button onClick={() => jump("faq")}>FAQ</button><button onClick={() => jump("application")}>Contact</button>
      </nav>
      <button className="nav-cta" onClick={() => jump("application")}>Join the community <ArrowUpRight size={16}/></button>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-bg-glow"></div>
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"></span> SPORTS <i/> GAMES <i/> COMMUNITY</div>
          <h1>Sports, Games<br/><em>&amp; Match Culture</em></h1>
          <p>Asian Hub is a community for people interested in sports, games, match analysis, and betting culture. We discuss the topic, but this site does not offer betting or gambling services.</p>
          <div className="hero-actions"><button className="btn primary" onClick={() => jump("platforms")}>Explore the community <ArrowUpRight size={17}/></button><button className="btn secondary" onClick={() => jump("application")}>Send a message</button></div>
          <div className="trust-row"><span><Trophy/> Sports discussion</span><span><BookOpen/> Share useful context</span><span><ShieldCheck/> No wagering services</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract sports discussion illustration"><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="glow-card"><div className="card-top"><span>ASIAN HUB</span><span className="chip"></span></div><div className="card-wallet"><Trophy size={68}/></div><div className="card-bottom"><span>SPORTS · GAMES · DISCUSSION</span><b>COMMUNITY</b></div></div><div className="coin coin-a"><MessageCircle size={19}/></div><div className="coin coin-b"><UsersRound size={20}/></div><div className="spark spark-a"></div><div className="spark spark-b"></div></div>
      </section>

      <section className="platforms section" id="platforms">
        <div className="section-heading"><span className="kicker">THE COMMUNITY</span><h2>Talk about <em>the game</em></h2><p>Explore sports, games, match analysis, and the culture around sports predictions and betting. Asian Hub provides information and a way to register interest; it does not yet host live member discussions.</p></div>
        <div className="platform-grid">
          <article className="platform-card"><div className="platform-brand"><span className="brand-word">SPORTS</span><span className="platform-tag">MATCH TALK</span></div><p>Discuss teams, competitions, tactics, and match context. Separate confirmed facts from personal predictions.</p><ul><li><CheckCircle2/> Match and team discussion</li><li><CheckCircle2/> Analysis with clear sources</li><li><CheckCircle2/> Respectful disagreement</li></ul></article>
          <article className="platform-card"><div className="platform-brand"><span className="brand-word">GAMES</span><span className="platform-tag">GAMING CULTURE</span></div><p>Share knowledge about games, formats, and the culture around sports predictions and gaming.</p><ul><li><CheckCircle2/> Game and format explainers</li><li><CheckCircle2/> Opinion versus fact</li><li><CheckCircle2/> Privacy-minded participation</li></ul></article>
        </div>
      </section>

      <section className="agent-section section" id="agent">
        <div className="agent-visual"><div className="wallet-illustration"><div className="wallet-screen"><Trophy size={52}/><b>ASIAN HUB</b><small>SPORTS &amp; GAMES</small></div><div className="wallet-base"></div><div className="floating-token token-one"><MessageCircle size={19}/></div><div className="floating-token token-two"><UsersRound size={20}/></div></div></div>
        <div className="agent-copy"><span className="kicker">ABOUT ASIAN HUB</span><h2>A place for <em>thoughtful sports talk.</em></h2><p>Asian Hub is the name of this online community. It is intended for people in all countries except Bangladesh and is written in English. The name describes a community project; it does not claim that a registered company or licensed operator exists.</p>
          <div className="benefits"><div><span><MessageCircle/></span><b>Share perspectives</b><small>Discuss matches, teams, games, and predictions.</small></div><div><span><BadgeCheck/></span><b>Be clear</b><small>Distinguish sources, facts, and personal views.</small></div><div><span><UsersRound/></span><b>Respect others</b><small>Keep disagreements constructive and relevant.</small></div><div><span><ShieldCheck/></span><b>No betting service</b><small>No wagers, accounts, payments, or agent recruitment.</small></div></div>
          <button className="btn primary" onClick={() => jump("application")}>Join the interest list <ArrowUpRight size={17}/></button>
        </div>
      </section>

      <section className="steps section" id="steps"><div className="section-heading"><span className="kicker">HOW IT WORKS</span><h2>Join in <em>four steps</em></h2><p>This website is currently an information and interest page. No live forum, chat, events, or member benefits are promised.</p></div><div className="steps-grid">{[["01","Explore the topics","Read the community scope and rules."],["02","Choose a discussion","Sports, games, match analysis, or prediction culture."],["03","Send a message","Use the form with only the details needed to reply."],["04","Wait for a response","A request is not automatic membership or access to a live discussion space."]].map(([n,t,d])=><article className="step-card" key={n}><span className="step-num">{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>

      <section className="application section" id="application"><div className="section-heading"><span className="kicker">JOIN / CONTACT</span><h2>Send a <em>community message</em></h2><p>Share your email so the community operators can reply, plus a short message about your interest. Required fields are marked with an asterisk.</p></div><div className="form-wrap">{formState === "sent" ? <div className="success" role="status"><CheckCircle2 size={42}/><h3>Message received</h3><p>Your message was saved. The community operators can reply to the email address you provided. This is not automatic membership.</p></div> : <form name="community-contact" onSubmit={handleSubmit}><div className="form-grid"><label>Email address *<input type="email" name="email" autoComplete="email" placeholder="you@example.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required/></label><label className="wide">Message *<textarea name="message" rows="4" maxLength="1000" placeholder="What would you like to discuss? Please do not include sensitive information." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required/></label></div><label className="consent-row"><input type="checkbox" name="consent" checked={form.consent} onChange={e=>setForm({...form,consent:e.target.checked})} required/><span>I agree that the Asian Hub operators may send my email and message to SheetDB for storage in the connected Google Sheet and use them to respond to my inquiry. I have read the <a href="/privacy.html">Privacy Policy</a>.</span></label><p className="form-note"><ShieldCheck size={16}/> Never send passwords, identity documents, payment details, or private financial information.</p>{formState === "error" && <p className="form-error" role="alert">We could not send your message. Please try again later.</p>}<button className="btn primary submit-btn" type="submit" disabled={formState === "sending"}>{formState === "sending" ? "Sending…" : <>Send message <ArrowUpRight size={17}/></>}</button><p className="privacy-note">Your email and message are sent through SheetDB and stored in the community's Google Sheet. See the Privacy Policy for details.</p></form>}</div></section>

      <section className="faq section" id="faq"><div className="section-heading"><span className="kicker">FAQ</span><h2>Frequently asked <em>questions</em></h2></div><div className="faq-list">{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}>{q}<ChevronDown className={openFaq===i?"rotated":""}/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></section>
    </main>

    <footer className="footer"><div className="footer-main"><div className="footer-about"><a className="brand" href="#home"><span>ASIAN</span><b>HUB</b></a><p>Sports, games, match analysis, and prediction culture. No betting services or agent recruitment.</p></div><div><h4>Explore</h4><button onClick={()=>jump("platforms")}>Community topics</button><button onClick={()=>jump("agent")}>About Asian Hub</button><button onClick={()=>jump("faq")}>FAQ</button><button onClick={()=>jump("application")}>Join / contact</button></div><div><h4>Community</h4><a href="/about.html">About</a><a href="/contact.html">Contact</a><a href="/community-rules.html">Community Rules</a><a href="/terms.html">Terms of Use</a><a href="/privacy.html">Privacy Policy</a></div><div><h4>Join</h4><button onClick={()=>jump("application")}>Send a message</button><span className="footer-fact">English · All countries except Bangladesh</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Asian Hub Community.</span><span>Discussion only. No wagering, financial services, or recruitment.</span></div></footer>
  </div>;
}

createRoot(document.getElementById("root")).render(<App/>);
