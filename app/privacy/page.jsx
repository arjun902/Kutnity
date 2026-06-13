import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <div className="breadcrumb"><a href="/">Home</a> / Privacy</div>
            <span className="eyebrow">Privacy</span>
            <h1>Privacy policy.</h1>
            <p>KUTNITI should collect only necessary data, protect reader privacy and explain analytics, newsletter and contact-form handling clearly.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
