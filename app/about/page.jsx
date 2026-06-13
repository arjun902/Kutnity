import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <div className="breadcrumb"><a href="/">Home</a> / About</div>
            <span className="eyebrow">About</span>
            <h1>Strategic intelligence for Nepal and South Asia.</h1>
            <p>KUTNITI is built around clear context, visible sourcing, accountable corrections and expert-led analysis.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
