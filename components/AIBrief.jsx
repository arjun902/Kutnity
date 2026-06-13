"use client";

import { useState } from "react";
import { briefAnswers } from "@/lib/content";

const prompts = [
  "What does the budget mean for banking?",
  "How should Nepal regulate AI?",
  "What are the India-China-Nepal risks?"
];

export default function AIBrief() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("Ask a question to generate a concise editorial brief.");

  const respond = (value) => {
    const q = value.toLowerCase();
    const found = briefAnswers.find((item) => item.keywords.some((keyword) => q.includes(keyword)));
    setAnswer(found?.answer || "KUTNITI Briefing Desk: ask about policy, economy, technology or geopolitics for a structured editorial response.");
  };

  return (
    <section className="section compact" id="kutniti-ai">
      <div className="container ai-panel">
        <div className="ai-grid">
          <div>
            <span className="eyebrow">AI Brief</span>
            <h2>Ask for structured policy context.</h2>
            <p>Use the briefing desk for short summaries, Nepal impact, risk flags and related KUTNITI stories. Published briefings should remain source-backed and editor-reviewed.</p>
          </div>
          <div className="ai-box">
            <form className="ai-input-row" onSubmit={(event) => { event.preventDefault(); respond(query); }}>
              <input value={query} onChange={(event) => setQuery(event.target.value)} type="text" placeholder="Ask: What does the budget mean for banking?" />
              <button className="btn-primary" type="submit">Ask</button>
            </form>
            <div className="prompt-chips">
              {prompts.map((prompt) => (
                <button key={prompt} type="button" onClick={() => { setQuery(prompt); respond(prompt); }}>{prompt}</button>
              ))}
            </div>
            <div className="ai-output"><strong>Briefing Desk:</strong><br />{answer}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
