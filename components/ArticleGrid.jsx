import Link from "next/link";

export default function ArticleGrid({ articles }) {
  return (
    <div className="article-grid">
      {articles.map((article) => (
        <article className="article-card" data-category={article.category} key={article.title}>
          <Link className="article-img" href={article.href} aria-label={`Read ${article.title}`}>
            <img src={article.image} alt={`Editorial illustration for ${article.category}`} />
          </Link>
          <div className="article-body">
            <span className="badge dark">{article.category}</span>
            <h3><Link href={article.href}>{article.title}</Link></h3>
            <p>{article.summary}</p>
            <div className="article-meta-stack">
              <span className="author-dot">{article.author} - {article.credential}</span>
              <span>{article.format} | Published {article.date} | {article.read}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
