import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleGrid from "@/components/ArticleGrid";
import AIBrief from "@/components/AIBrief";
import Multimedia from "@/components/Multimedia";
import { articles, topicHubs } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero">
          <div className="container hero-grid">
            <article className="hero-card">
              <div className="hero-content">
                <div className="badge-row">
                  <span className="badge">Lead Analysis</span>
                  <span className="badge">Policy</span>
                  <span className="badge">7 min read</span>
                </div>
                <span className="section-kicker">KUTNITI</span>
                <h1>Policy, economy and power in Nepal and South Asia.</h1>
                <p>Clear reporting and analysis on the decisions, data and institutions shaping public life.</p>
                <div className="hero-cta">
                  <Link className="btn-primary" href="/article">Read Today's Brief</Link>
                  <Link className="btn-secondary" href="/#multimedia-studio">Multimedia</Link>
                  <Link className="btn-secondary" href="/#opinion-analysis">Opinion</Link>
                </div>
                <div className="hero-kpis" aria-label="KUTNITI editorial focus">
                  <div><span>Coverage desks</span><strong>10</strong></div>
                  <div><span>Media formats</span><strong>4</strong></div>
                  <div><span>Trust pages</span><strong>10+</strong></div>
                </div>
              </div>
            </article>
            <aside className="hero-side" aria-label="Editor's picks">
              <article className="side-card">
                <div>
                  <span className="badge dark">Editor's Pick</span>
                  <h3>Nepal Budget 2083/84: the signals beneath the speech.</h3>
                  <p>Revenue credibility, capital spending and credit flow will decide whether the budget becomes momentum or noise.</p>
                </div>
                <div className="mini-meta"><span>Policy</span><span>6 min read</span></div>
              </article>
              <article className="side-card">
                <div>
                  <span className="badge dark">Data & Multimedia</span>
                  <h3>Video, podcast and shorts built around explainers.</h3>
                  <p>One topic can become a story, chart, short video, podcast segment and source-backed AI brief.</p>
                </div>
                <div className="mini-meta"><span>Formats</span><span>Updated today</span></div>
              </article>
            </aside>
          </div>
        </section>

        <AIBrief />

        <section className="section">
          <div className="container">
            <div className="section-title">
              <div>
                <span className="eyebrow">Latest Intelligence</span>
                <h2>Top stories and analysis</h2>
                <p>Structured coverage for readers who want context, not just headlines.</p>
              </div>
              <Link className="btn-text" href="/category">View all stories -&gt;</Link>
            </div>
            <ArticleGrid articles={articles} />
          </div>
        </section>

        <Multimedia />

        <section className="section compact">
          <div className="container">
            <div className="section-title">
              <div>
                <span className="eyebrow">Topic Hubs</span>
                <h2>Build authority through focused coverage</h2>
                <p>Each hub contains explainers, timelines, FAQs, data and internal links.</p>
              </div>
            </div>
            <div className="topic-grid">
              {topicHubs.map(([title, desc, href], index) => (
                <Link href={href} className="topic-card" key={title}>
                  <span className="topic-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <span className="btn-text">Open hub -&gt;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="opinion-analysis">
          <div className="container">
            <div className="section-title">
              <div>
                <span className="eyebrow">Opinion & Analysis</span>
                <h2>Expert columns with clear disclosure</h2>
                <p>Opinion should be sharply labeled, credentialed and separated from reporting so trust stays intact.</p>
              </div>
            </div>
            <div className="opinion-grid">
              {["Nepal's reform debate needs fewer slogans and better delivery metrics.", "NEPSE coverage should explain risk before it chases excitement.", "AI policy will fail if procurement standards come last."].map((title) => (
                <article className="opinion-card" key={title}>
                  <span className="badge dark">Opinion</span>
                  <h3>{title}</h3>
                  <p>Policy commentary with conflict disclosures and reader-facing evidence notes.</p>
                  <div className="author-row"><span className="author-avatar">KR</span><span>KUTNITI Research Desk</span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="newsletter" id="newsletter">
          <div className="container newsletter-inner">
            <div>
              <span className="eyebrow">Daily Brief</span>
              <h2>Get the KUTNITI Daily Brief</h2>
              <p>A sharp, data-backed summary of policy, economy, technology and global affairs delivered every morning.</p>
              <div className="newsletter-segments"><span>Daily Brief</span><span>Weekly Policy Brief</span><span>Economy Radar</span></div>
            </div>
            <form className="newsletter-form">
              <input name="email" type="email" placeholder="you@example.com" aria-label="Email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
