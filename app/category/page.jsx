import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleGrid from "@/components/ArticleGrid";
import { articles, coverageCopy } from "@/lib/content";

export default async function CategoryPage({ searchParams }) {
  const params = await searchParams;
  const topic = params?.topic;
  const copy = coverageCopy[topic] || {
    title: "All KUTNITI coverage",
    desc: "Use the top navigation to switch between Nepal, International, Policy, Economy, Technology and other coverage."
  };
  const visibleArticles = topic ? articles.filter((article) => article.category === topic) : articles;

  return (
    <>
      <Header />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <div className="breadcrumb"><a href="/">Home</a> / Coverage</div>
            <span className="eyebrow">Coverage</span>
            <h1>{copy.title}</h1>
            <p>{copy.desc}</p>
          </div>
        </section>
        <section className="section compact">
          <div className="container">
            {visibleArticles.length ? (
              <ArticleGrid articles={visibleArticles} />
            ) : (
              <p className="empty-state">No stories are available in this section yet.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
