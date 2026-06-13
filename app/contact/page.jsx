import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <div className="breadcrumb"><a href="/">Home</a> / Contact</div>
            <span className="eyebrow">Contact</span>
            <h1>Contact KUTNITI.</h1>
            <p>Send editorial, advertising, partnership or correction requests to the newsroom team.</p>
          </div>
        </section>
        <section className="section compact">
          <div className="container contact-grid">
            <form className="form-card">
              <div className="form-field"><label>Name</label><input type="text" required /></div>
              <div className="form-field"><label>Email</label><input type="email" required /></div>
              <div className="form-field"><label>Message</label><textarea required /></div>
              <button className="btn-primary" type="submit">Send</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
