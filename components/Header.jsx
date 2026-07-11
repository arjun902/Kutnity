"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { articles, navItems } from "@/lib/content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [clock, setClock] = useState("Kathmandu Time");
  const [dateLabel, setDateLabel] = useState("Kathmandu");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Kathmandu",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        }).format(now) + " NPT"
      );
      setDateLabel(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Kathmandu",
          weekday: "short",
          day: "2-digit",
          month: "short",
          year: "numeric"
        }).format(now)
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const matches = useMemo(() => {
    const q = query.toLowerCase().trim();
    return articles.filter((article) =>
      !q || [article.title, article.category, article.summary].join(" ").toLowerCase().includes(q)
    );
  }, [query]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="utility-bar">
        <div className="container utility-inner">
          <div className="utility-left">
            <span>{dateLabel}</span>
            <span className="utility-pill">{clock}</span>
          </div>
          <div className="utility-right">
            <span className="utility-pill">EN / NP</span>
            <Link className="utility-link" href="/#newsletter">Subscribe</Link>
            <Link className="utility-link" href="/signin">Sign In</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <header className="site-header" role="banner">
        <div className="container header-inner">
          <Link className="logo" href="/" aria-label="KUTNITI home">
            <span className="logo-mark">K</span>
            <span>KUTNITI<small>Strategic Intelligence</small></span>
          </Link>
          <nav className="primary-nav" aria-label="Primary navigation">
            {navItems.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          </nav>
          <div className="header-actions">
            <button className="icon-btn" onClick={() => setSearchOpen(true)} aria-label="Open search">Search</button>
            <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle dark mode">Mode</button>
            <Link className="ai-btn" href="/#kutniti-ai">AI Brief</Link>
            <Link className="subscribe-btn" href="/#newsletter">Subscribe</Link>
            <button className="menu-btn" onClick={() => setMenuOpen((value) => !value)} aria-label="Open menu" aria-expanded={menuOpen}>Menu</button>
          </div>
        </div>
        <nav className={`container mobile-nav${menuOpen ? " active" : ""}`} aria-label="Mobile navigation">
          {navItems.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <div className="breaking" aria-label="News ticker">
        <div className="container breaking-inner">
          <span className="breaking-label">Updates</span>
          <div className="ticker"><strong>Today:</strong> Nepal news | International updates | Economy | Policy | Technology</div>
        </div>
      </div>

      <div className={`search-panel${searchOpen ? " active" : ""}`} aria-hidden={!searchOpen}>
        <div className="search-box">
          <button className="close-search" onClick={() => setSearchOpen(false)}>Close</button>
          <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search Nepal, international, policy, economy..." aria-label="Search articles" />
          <div className="search-results">
            {matches.map((article) => (
              <Link key={article.title} href={article.href}>
                <strong>{article.title}</strong><br />
                <small>{article.category} - {article.summary}</small>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
