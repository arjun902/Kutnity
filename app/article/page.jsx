import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ArticlePage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <div className="breadcrumb"><a href="/">Home</a> / Analysis</div>
            <span className="eyebrow">Policy Analysis</span>
            <h1>Nepal Budget 2083/84: the signals beneath the speech.</h1>
            <p>Revenue credibility, capital spending and credit flow will decide whether the budget becomes momentum or noise.</p>
          </div>
        </section>
        <section className="section compact">
          <div className="container article-layout">
            <article className="article-main">
              <div className="article-hero-img"><img src="/assets/img/policy.svg" alt="Policy illustration" /></div>
              <div className="article-content">
                <p className="lead">The budget should be read through implementation, financing quality and institutional delivery rather than speech-day promises.</p>
                <h2>Why it matters</h2>
                <p>For Nepal, the most important budget question is whether spending plans can move from allocation to execution. Banking liquidity, private investment and infrastructure delivery all depend on that credibility.</p>
                <div className="key-box">
                  <h3>Key signals</h3>
                  <ul>
                    <li>Revenue assumptions need transparent tracking.</li>
                    <li>Capital expenditure should be monitored monthly.</li>
                    <li>Credit demand depends on investor confidence.</li>
                    <li>Policy stability matters more than announcement volume.</li>
                  </ul>
                </div>
                <h2>Next.js and Strapi path</h2>
                <p>This page is now component-ready. In production, article title, body, author, tags, media embeds and related stories can come from Strapi collections.</p>
              </div>
            </article>
            <aside className="sidebar">
              <div className="sidebar-card">
                <h3>Article metadata</h3>
                <a>Published: 9 Jun 2026</a>
                <a>Desk: Policy Intelligence</a>
                <a>Format: Analysis</a>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
