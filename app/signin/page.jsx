import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SignInPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <div className="breadcrumb"><a href="/">Home</a> / Sign In</div>
            <span className="eyebrow">Account</span>
            <h1>Sign in to KUTNITI.</h1>
            <p>Authentication should connect to a secure backend with MFA, role-based access and audit logging.</p>
          </div>
        </section>
        <section className="section compact">
          <div className="container contact-grid">
            <form className="form-card">
              <div className="form-field"><label>Email</label><input type="email" required /></div>
              <div className="form-field"><label>Password</label><input type="password" required /></div>
              <button className="btn-primary" type="submit">Sign In</button>
            </form>
            <aside className="trust-card">
              <h3>Security baseline</h3>
              <p>MFA, session expiration, CSRF protection, refresh-token rotation and audit logs are required for production.</p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
