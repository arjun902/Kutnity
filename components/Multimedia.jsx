import Link from "next/link";

export default function Multimedia() {
  return (
    <section className="section compact" id="multimedia-studio">
      <div className="container">
        <div className="section-title">
          <div>
            <span className="eyebrow">Data & Multimedia</span>
            <h2>Watch, listen and learn.</h2>
            <p>Video briefings, podcasts, short explainers and visual formats designed for readers who follow policy across platforms.</p>
          </div>
          <Link className="btn-text" href="/category?topic=Video">View video -&gt;</Link>
        </div>
        <div className="media-grid">
          <article className="media-feature">
            <div className="media-frame">
              <iframe
                title="KUTNITI YouTube feature"
                srcDoc="<style>body{margin:0;display:grid;place-items:center;height:100vh;background:#111;color:#fff;font-family:Arial,Helvetica,sans-serif}.wrap{text-align:center}.play{width:64px;height:44px;margin:0 auto 14px;background:#fff;color:#111;display:grid;place-items:center;font-weight:700}</style><div class='wrap'><div class='play'>Play</div><strong>KUTNITI YouTube Feature</strong></div>"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="media-copy">
              <span className="badge dark">YouTube</span>
              <h3>Weekly foreign policy briefing</h3>
              <p>A dedicated slot for long-form YouTube episodes, interviews and documentary-style explainers.</p>
            </div>
          </article>
          <aside className="media-side">
            <article className="podcast-card">
              <span className="badge dark">Podcast</span>
              <h3>The KUTNITI Brief</h3>
              <p>Audio episodes for weekly policy, economy and geopolitics conversations.</p>
              <div className="podcast-actions">
                <Link href="/category?topic=Podcast">Latest episode</Link>
                <Link href="/rss.xml">RSS feed</Link>
              </div>
            </article>
            <article className="explainer-card">
              <span className="badge dark">Explainer</span>
              <h3>One topic, three formats</h3>
              <ul>
                <li>Article explainer</li>
                <li>Short video</li>
                <li>Audio brief</li>
              </ul>
            </article>
          </aside>
        </div>
        <div className="shorts-grid" aria-label="Short video formats">
          {["Budget in 60 seconds", "What is BRI?", "AI governance basics", "Market risk notes"].map((title, index) => (
            <article className="short-card" key={title}>
              <span>Short {String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>Integration-ready vertical format for social video distribution.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
