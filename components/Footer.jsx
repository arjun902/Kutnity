import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="logo" href="/"><span className="logo-mark">K</span><span>KUTNITI<small>Strategic Intelligence</small></span></Link>
          <p>KUTNITI is a strategic media platform covering policy, economy, technology and geopolitics for Nepal, South Asia and the world.</p>
        </div>
        <div>
          <h4>Coverage</h4>
          <Link href="/category?topic=Policy">Policy</Link>
          <Link href="/category?topic=Economy">Economy</Link>
          <Link href="/category?topic=Technology">Technology</Link>
          <Link href="/category?topic=Geopolitics">Geopolitics</Link>
          <Link href="/#multimedia-studio">Multimedia</Link>
        </div>
        <div>
          <h4>Formats</h4>
          <Link href="/category?topic=Explainer">Explainer</Link>
          <Link href="/category?topic=Podcast">Podcast</Link>
          <Link href="/category?topic=Video">Video</Link>
          <Link href="/#kutniti-ai">AI Brief</Link>
        </div>
        <div>
          <h4>Trust</h4>
          <Link href="/about">About KUTNITI</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 KUTNITI. All rights reserved.</span>
        <span>Built for Strapi-backed publishing and Next.js deployment.</span>
      </div>
    </footer>
  );
}
