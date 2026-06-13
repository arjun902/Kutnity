
const articles = [
  {
    title: "Nepal Budget 2083/84: Key Economic Signals for Banking and Growth",
    category: "Policy",
    slug: "article.html",
    summary: "A data-backed reading of revenue credibility, capital spending, credit flow and the investment signals that matter beyond the budget speech.",
    author: "KUTNITI Research Desk",
    credential: "Policy Intelligence Unit",
    date: "9 Jun 2026",
    updated: "9 Jun 2026, 10:30 NPT",
    format: "Analysis",
    read: "7 min read",
    image: "assets/img/policy.svg"
  },
  {
    title: "AI Governance in South Asia: The Race for Responsible Digital States",
    category: "Technology",
    slug: "article.html",
    summary: "A practical risk-based framework for AI regulation, public procurement, privacy, audit trails and citizen trust.",
    author: "Digital Policy Team",
    credential: "Technology and AI Desk",
    date: "9 Jun 2026",
    updated: "9 Jun 2026, 09:20 NPT",
    format: "Explainer",
    read: "6 min read",
    image: "assets/img/ai-governance.svg"
  },
  {
    title: "Budget Signals: Infrastructure, Banking and Private Investment",
    category: "Economy",
    slug: "article.html",
    summary: "Why liquidity, revenue collection, import demand and infrastructure execution will shape the next market cycle.",
    author: "Economy Desk",
    credential: "Macro and Markets Desk",
    date: "8 Jun 2026",
    updated: "8 Jun 2026, 16:00 NPT",
    format: "Data Story",
    read: "8 min read",
    image: "assets/img/economy.svg"
  },
  {
    title: "The Himalaya Factor in India-China-Nepal Strategic Affairs",
    category: "Geopolitics",
    slug: "article.html",
    summary: "How infrastructure, border management, energy trade and climate risk are reshaping Nepal's diplomatic room for maneuver.",
    author: "Strategic Affairs Unit",
    credential: "Geopolitics Desk",
    date: "8 Jun 2026",
    updated: "8 Jun 2026, 13:15 NPT",
    format: "Analysis",
    read: "9 min read",
    image: "assets/img/geopolitics.svg"
  },
  {
    title: "FinTech Security: Building Trust in Digital Payments",
    category: "Technology",
    slug: "article.html",
    summary: "Digital payment trust now depends on fraud analytics, secure APIs, recovery discipline and user education.",
    author: "Cyber & Finance Desk",
    credential: "FinTech Security Desk",
    date: "7 Jun 2026",
    updated: "7 Jun 2026, 18:10 NPT",
    format: "Brief",
    read: "5 min read",
    image: "assets/img/fintech.svg"
  },
  {
    title: "Explainer: How to Read a Central Bank Monetary Policy Statement",
    category: "Explainer",
    slug: "article.html",
    summary: "A visual guide to liquidity, credit, inflation, policy rates and banking-sector risk for non-specialist readers.",
    author: "Explainer Desk",
    credential: "Explainers Team",
    date: "7 Jun 2026",
    updated: "7 Jun 2026, 12:05 NPT",
    format: "Explainer",
    read: "4 min read",
    image: "assets/img/explainer.svg"
  },
  {
    title: "Arts and Public Memory: Why Cultural Policy Matters",
    category: "Arts",
    slug: "category.html?topic=Arts",
    summary: "Museums, archives, cinema and public art are part of how a country remembers itself and explains itself to the world.",
    author: "Culture Desk",
    credential: "Arts and Society",
    date: "6 Jun 2026",
    updated: "6 Jun 2026, 10:20 NPT",
    format: "Essay",
    read: "5 min read",
    image: "assets/img/explainer.svg"
  },
  {
    title: "Lifestyle and Cities: How Daily Habits Shape Urban Policy",
    category: "Lifestyle",
    slug: "category.html?topic=Lifestyle",
    summary: "Transport, housing, food, work and public space reveal whether cities are designed for ordinary life.",
    author: "Urban Life Desk",
    credential: "Lifestyle and Cities",
    date: "5 Jun 2026",
    updated: "5 Jun 2026, 17:00 NPT",
    format: "Feature",
    read: "6 min read",
    image: "assets/img/pattern.svg"
  },
  {
    title: "Sports Governance: What Leagues Need Beyond Match Results",
    category: "Sports",
    slug: "category.html?topic=Sports",
    summary: "Sports coverage should follow institutions, finance, player welfare, infrastructure and accountability.",
    author: "Sports Desk",
    credential: "Sports Governance",
    date: "5 Jun 2026",
    updated: "5 Jun 2026, 13:30 NPT",
    format: "Analysis",
    read: "4 min read",
    image: "assets/img/policy.svg"
  },
  {
    title: "Podcast Brief: Nepal's Budget Debate in Fifteen Minutes",
    category: "Podcast",
    slug: "category.html?topic=Podcast",
    summary: "A concise audio format for readers who want the argument, the numbers and the political context.",
    author: "Audio Desk",
    credential: "Podcast Unit",
    date: "4 Jun 2026",
    updated: "4 Jun 2026, 09:45 NPT",
    format: "Podcast",
    read: "15 min listen",
    image: "assets/img/logo.svg"
  },
  {
    title: "Video Explainer: How Policy Moves Through Parliament",
    category: "Video",
    slug: "category.html?topic=Video",
    summary: "A visual format for turning institutional process, lawmaking and accountability into plain language.",
    author: "Video Desk",
    credential: "Visual Explainers",
    date: "4 Jun 2026",
    updated: "4 Jun 2026, 08:15 NPT",
    format: "Video",
    read: "3 min watch",
    image: "assets/img/hero-policy.svg"
  },
  {
    title: "NEPSE Market Context: What Retail Investors Should Track First",
    category: "Markets",
    slug: "nepse-market.html",
    summary: "A non-advice market brief focused on liquidity, earnings quality, policy signals and risk controls.",
    author: "Markets Desk",
    credential: "Capital Markets Unit",
    date: "6 Jun 2026",
    updated: "6 Jun 2026, 15:40 NPT",
    format: "Brief",
    read: "5 min read",
    image: "assets/img/economy.svg"
  },
  {
    title: "Fact Check: What Budget Headlines Often Miss",
    category: "Governance",
    slug: "fact-checking-policy.html",
    summary: "A verification-first guide to claims about allocation, spending, revenue targets and delivery timelines.",
    author: "Verification Desk",
    credential: "Fact Checking Unit",
    date: "6 Jun 2026",
    updated: "6 Jun 2026, 11:00 NPT",
    format: "Fact Check",
    read: "6 min read",
    image: "assets/img/policy.svg"
  }
];

const aiKnowledge = [
  {
    keywords: ["budget", "bank", "banking", "fiscal", "economy", "investment"],
    answer: "KUTNITI view: read the budget through four lenses — revenue credibility, capital-expenditure execution, private-sector credit flow, and sector-specific incentives. For banking, the key impact usually comes through liquidity, credit demand, regulatory signals and infrastructure financing."
  },
  {
    keywords: ["ai", "technology", "governance", "regulation", "digital"],
    answer: "KUTNITI view: Nepal needs an AI governance model that protects citizens while encouraging innovation. The practical path is risk-based regulation, public-sector AI procurement standards, data protection, audit trails and AI literacy for government institutions."
  },
  {
    keywords: ["geopolitics", "india", "china", "south asia", "diplomacy"],
    answer: "KUTNITI view: Nepal's strategic position depends on balancing connectivity, sovereignty, climate security and economic diplomacy. India-China dynamics should be analyzed through infrastructure, trade corridors, energy and institutional trust."
  },
  {
    keywords: ["seo", "rank", "google", "search"],
    answer: "KUTNITI SEO checklist: publish original analysis, add author pages, use NewsArticle schema, build topic hubs, improve internal links, optimize Core Web Vitals, keep dates accurate and avoid filler content."
  },
  {
    keywords: ["summary", "summarize", "nepali", "impact", "risk", "risks", "related"],
    answer: "Article brief format: provide a five-point summary, why it matters, background, Nepal impact, key numbers, risk flags and related KUTNITI links. Each brief should cite the article, official documents and reviewed datasets."
  },
  {
    keywords: ["newsletter", "daily brief", "weekly", "radar"],
    answer: "Daily Brief structure: top five Nepal policy stories, three global stories affecting Nepal, one chart of the day, one expert commentary and concise editor-reviewed summaries. Segment readers into Daily Brief, Weekly Policy Brief and Economy Radar."
  },
  {
    keywords: ["moderation", "comment", "spam", "hate", "toxicity"],
    answer: "Comment moderation baseline: detect toxicity, spam, political hate speech and duplicate comments before publication. Add human escalation for sensitive political claims and keep audit logs."
  },
  {
    keywords: ["security", "secure", "protocol", "headers", "admin"],
    answer: "KUTNITI security baseline: enforce HTTPS/HSTS, Content-Security-Policy, MFA for admins, RBAC for editors, rate limiting, CSRF protection, upload validation, WAF, backups and audit logs."
  }
];

function qs(selector, root = document) { return root.querySelector(selector); }
function qsa(selector, root = document) { return [...root.querySelectorAll(selector)]; }

const navCategories = ["Policy", "Economy", "Technology", "Geopolitics", "Arts", "Lifestyle", "Sports", "Explainer", "Podcast", "Video"];
const coverageCopy = {
  Policy: {
    title: "Policy intelligence",
    desc: "Governance, budget, diplomacy, public institutions and evidence-based decisions for Nepal."
  },
  Economy: {
    title: "Economy and markets",
    desc: "Macroeconomy, banking, trade, investment, NEPSE context and private-sector confidence."
  },
  Technology: {
    title: "Technology and AI",
    desc: "AI governance, cybersecurity, fintech, digital public infrastructure and technology policy."
  },
  Geopolitics: {
    title: "Geopolitics",
    desc: "South Asia, India-China-Nepal dynamics, foreign affairs, energy corridors and strategic autonomy."
  },
  Arts: {
    title: "Arts and culture",
    desc: "Culture, public memory, creative industries, books, film, archives and the politics of identity."
  },
  Lifestyle: {
    title: "Lifestyle and cities",
    desc: "Urban life, travel, food systems, work, public space and the everyday experience of policy."
  },
  Sports: {
    title: "Sports governance",
    desc: "Sports institutions, leagues, athlete welfare, infrastructure, accountability and public investment."
  },
  Explainer: {
    title: "Explainers",
    desc: "Simple, data-backed explanations of complex policy, economy, technology and regional issues."
  },
  Podcast: {
    title: "Podcasts",
    desc: "Audio briefings, interviews and conversations for readers who want context in a compact format."
  },
  Video: {
    title: "Video",
    desc: "Visual explainers, interviews and short documentary-style coverage of major public issues."
  }
};

function currentPageName() {
  const file = location.pathname.split('/').pop();
  return file || 'index.html';
}

function requestedCategory() {
  const topic = new URLSearchParams(location.search).get('topic');
  if (!topic) return null;
  return [...navCategories, "Markets", "Governance"].includes(topic) ? topic : null;
}

function setupNavigation() {
  const page = currentPageName();
  const topic = requestedCategory();
  const navLinks = qsa('.primary-nav a, .mobile-nav a');

  navLinks.forEach(link => {
    const label = link.textContent.trim();
    if (navCategories.includes(label)) link.href = `category.html?topic=${encodeURIComponent(label)}`;
    if (label === 'Data') link.href = page === 'index.html' ? '#data-intelligence' : 'index.html#data-intelligence';
    if (label === 'Multimedia') link.href = page === 'index.html' ? '#multimedia-studio' : 'index.html#multimedia-studio';
    if (label === 'Opinion') link.href = page === 'index.html' ? '#opinion-analysis' : 'index.html#opinion-analysis';
    if (label === 'AI Brief') link.href = page === 'index.html' ? '#kutniti-ai' : 'index.html#kutniti-ai';
    link.classList.remove('active');
  });

  navLinks.forEach(link => {
    const label = link.textContent.trim();
    const hrefPage = (link.getAttribute('href') || '').split('?')[0].split('#')[0];
    const isHome = label === 'Home' && page === 'index.html' && !location.hash;
    const isTopic = page === 'category.html' && topic && label === topic;
    const isAbout = page === 'about.html' && label === 'About';
    const isHash = page === 'index.html' && location.hash && link.getAttribute('href') === location.hash;
    const isSamePage = hrefPage && hrefPage === page && !navCategories.includes(label);
    if (isHome || isTopic || isAbout || isHash || isSamePage) link.classList.add('active');
  });
}

function setupCoverageIntro() {
  const title = qs('#selectedCoverageTitle');
  const desc = qs('#selectedCoverageDesc');
  const eyebrow = qs('#selectedCoverageEyebrow');
  if (!title || !desc) return;
  const topic = requestedCategory();
  const copy = topic && coverageCopy[topic] ? coverageCopy[topic] : null;
  if (copy) {
    title.textContent = copy.title;
    desc.textContent = copy.desc;
    if (eyebrow) eyebrow.textContent = `${topic} selected`;
  } else {
    title.textContent = "All KUTNITI coverage";
    desc.textContent = "Use the top navigation to switch between Policy, Economy, Technology, Geopolitics, Arts, Lifestyle, Sports, Explainer, Podcast and Video. The selected section stays active in the header.";
    if (eyebrow) eyebrow.textContent = "Selected coverage";
  }
}

function updateClock() {
  const clock = qs('#npClock');
  const dateLabel = qs('#todayDate');
  if (!clock && !dateLabel) return;
  const now = new Date();
  const options = { timeZone: 'Asia/Kathmandu', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  if (clock) clock.textContent = new Intl.DateTimeFormat('en-GB', options).format(now) + ' NPT';
  if (dateLabel) dateLabel.textContent = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kathmandu', weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' }).format(now);
}

function renderArticles() {
  const grid = qs('#articleGrid');
  if (!grid) return;
  grid.innerHTML = articles.map(article => `
    <article class="article-card" data-category="${article.category}">
      <a class="article-img" href="${article.slug}" aria-label="Read ${article.title}">
        <img src="${article.image}" alt="Editorial illustration for ${article.category}">
      </a>
      <div class="article-body">
        <span class="badge dark">${article.category}</span>
        <h3><a href="${article.slug}">${article.title}</a></h3>
        <p>${article.summary}</p>
        <div class="article-meta-stack">
          <span class="author-dot">${article.author} - ${article.credential}</span>
          <span>${article.format} | Published ${article.date} | Updated ${article.updated} | ${article.read}</span>
        </div>
      </div>
    </article>
  `).join('');
}

function setupFilters() {
  const buttons = qsa('[data-filter]');
  const cards = qsa('.article-card');
  if (!cards.length) return;

  const applyFilter = (category, updateUrl = false) => {
    buttons.forEach(b => b.classList.remove('active'));
    const activeButton = buttons.find(btn => btn.dataset.filter === category) || buttons[0];
    if (activeButton) activeButton.classList.add('active');
    cards.forEach(card => {
      card.style.display = category === 'All' || card.dataset.category === category ? '' : 'none';
    });
    if (updateUrl && currentPageName() === 'category.html') {
      const nextUrl = category === 'All' ? 'category.html' : `category.html?topic=${encodeURIComponent(category)}`;
      history.replaceState(null, '', nextUrl);
      setupNavigation();
    }
  };

  buttons.forEach(btn => btn.addEventListener('click', () => applyFilter(btn.dataset.filter, true)));
  const topic = requestedCategory();
  applyFilter(topic || 'All');
}

function setupAI() {
  const form = qs('#aiForm');
  const input = qs('#aiInput');
  const output = qs('#aiOutput');
  const chips = qsa('[data-prompt]');
  if (!form || !input || !output) return;

  const answer = (query) => {
    const q = query.toLowerCase();
    const found = aiKnowledge.find(item => item.keywords.some(k => q.includes(k)));
    const response = found ? found.answer : "KUTNITI Briefing Desk: I can summarize policy, economy, technology, geopolitics, SEO and security topics from the current editorial knowledge base.";
    output.innerHTML = `<strong>Briefing Desk:</strong><br>${response}<br><br><small>Editorial note: published briefings should be source-backed and reviewed before release.</small>`;
  };

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!input.value.trim()) return;
    answer(input.value.trim());
  });
  chips.forEach(chip => chip.addEventListener('click', () => {
    input.value = chip.dataset.prompt;
    answer(chip.dataset.prompt);
  }));
}

function setupNewsletter() {
  const form = qs('#newsletterForm');
  const note = qs('#newsletterNote');
  if (!form || !note) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = new FormData(form).get('email');
    if (!email || !String(email).includes('@')) {
      note.textContent = 'Please enter a valid email address.';
      return;
    }
    note.textContent = 'Thank you for subscribing. Newsletter delivery will be confirmed through the publication email system.';
    form.reset();
  });
}

function setupTheme() {
  const toggle = qs('#themeToggle');
  const stored = localStorage.getItem('kutniti-theme');
  if (stored) document.documentElement.setAttribute('data-theme', stored);
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('kutniti-theme', next);
  });
}

function setupMenu() {
  const btn = qs('#menuBtn');
  const nav = qs('#mobileNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const active = nav.classList.toggle('active');
    btn.setAttribute('aria-expanded', String(active));
  });
}

function setupSearch() {
  const open = qs('#searchOpen');
  const panel = qs('#searchPanel');
  const close = qs('#searchClose');
  const input = qs('#searchInput');
  const results = qs('#searchResults');
  if (!open || !panel || !close || !input || !results) return;
  const render = (query = '') => {
    const q = query.toLowerCase().trim();
    const matches = articles.filter(a => !q || [a.title, a.category, a.summary].join(' ').toLowerCase().includes(q));
    results.innerHTML = matches.map(a => `<a href="${a.slug}"><strong>${a.title}</strong><br><small>${a.category} — ${a.summary}</small></a>`).join('') || '<p>No results found.</p>';
  };
  open.addEventListener('click', () => { panel.classList.add('active'); input.focus(); render(); });
  close.addEventListener('click', () => panel.classList.remove('active'));
  panel.addEventListener('click', e => { if (e.target === panel) panel.classList.remove('active'); });
  input.addEventListener('input', e => render(e.target.value));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') panel.classList.remove('active'); });
}

function setupContactForm() {
  const form = qs('#contactForm');
  const note = qs('#contactNote');
  if (!form || !note) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    note.textContent = 'Thank you. Your message has been prepared for the editorial contact workflow.';
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupCoverageIntro();
  updateClock();
  setInterval(updateClock, 1000);
  renderArticles();
  setupFilters();
  setupAI();
  setupNewsletter();
  setupTheme();
  setupMenu();
  setupSearch();
  setupContactForm();
});
