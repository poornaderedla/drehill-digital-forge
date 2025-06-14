
import React from "react";

const reasons = [
  {
    title: "Global Delivery Model",
    desc: "Distributed teams, round-the-clock productivity, global project scaling.",
    icon: (
      <svg width="32" height="32" fill="none"><circle cx="16" cy="16" r="14" stroke="#837fd8" strokeWidth="3"/><path d="M8 16c0 4.418 1.79 8 8 8s8-3.582 8-8" stroke="#645fce" strokeWidth="2"/></svg>
    ),
  },
  {
    title: "AI-First Expertise",
    desc: "Cutting-edge LLMs, RAG, NLP, and real-world enterprise deployments.",
    icon: (
      <svg width="32" height="32" fill="none"><rect x="7" y="7" width="18" height="18" rx="4" stroke="#645fce" strokeWidth="2"/><path d="M14 13h4v6h-4z" fill="#837fd8"/></svg>
    ),
  },
  {
    title: "Trusted by Enterprises",
    desc: "Decisions and systems running in Fortune 500s and unicorns.",
    icon: (
      <svg width="32" height="32" fill="none"><rect x="5" y="13" width="22" height="9" rx="3" stroke="#837fd8" strokeWidth="2"/><path d="M16 5v8m0 0v0" stroke="#645fce" strokeWidth="2"/></svg>
    ),
  },
  {
    title: "Rapid Time-To-Value",
    desc: "Velocity-focused delivery, measurable business outcomes within weeks.",
    icon: (
      <svg width="32" height="32" fill="none"><path d="M9 19l2 2 6-6" stroke="#837fd8" strokeWidth="2"/><circle cx="16" cy="16" r="14" stroke="#645fce" strokeWidth="2"/></svg>
    ),
  },
];

const WhyDrehill = () => (
  <section className="py-24 md:py-32 bg-white">
    <div className="container mx-auto max-w-6xl">
      <h2 className="font-head text-headline text-indigo uppercase mb-12 text-center">
        Why Drehill
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {reasons.map(reason => (
          <div
            key={reason.title}
            className="p-6 bg-lavender rounded-lg shadow-card flex flex-col items-center text-center hover:shadow-xl transition group"
            tabIndex={0}
          >
            <div className="mb-4">{reason.icon}</div>
            <div className="text-lg font-head text-grape uppercase mb-2">{reason.title}</div>
            <div className="text-indigo font-body text-base">{reason.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyDrehill;
