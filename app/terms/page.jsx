import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <div className="breadcrumb"><a href="/">Home</a> / Terms</div>
            <span className="eyebrow">Terms</span>
            <h1>Terms of use.</h1>
            <p>Terms should define acceptable use, editorial rights, attribution, subscriptions, advertising and correction processes.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
