
import React, { useState } from "react";
import { SEO } from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";

const caseStudies = [
  {
    title: "Pharma Digital Roadmap",
    category: "Consulting",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    problem: "Legacy IT slowed global supply chain, blocking scaling.",
    solution: "Multi-year transformation roadmap with AI-driven insights, orchestrated by Drehill experts.",
    results: "Platform unified >27 systems, accelerated product launches, projected $2.2M cost-savings per annum.",
    testimonial: "“Drehill helped us envision and achieve transformation we thought was years away.” – CIO, Global Pharma",
    tags: ["Consulting", "Strategy", "Integration"],
  },
  {
    title: "Intelligent Workplace Search Deployment",
    category: "AI Development",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    problem: "Employees couldn't find knowledge across SaaS, SharePoint, Confluence.",
    solution: "LLM+RAG system connected to company data, with secure vector search and ServiceNow integration.",
    results: "Average query success +354%, reduced onboarding time, improved helpdesk satisfaction.",
    testimonial: "“After LLM search, onboarding dropped from days to hours.” – VP IT, FinTech",
    tags: ["AI", "LLM", "Search"],
  },
  {
    title: "RPA for Finance Automation",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    problem: "Manual invoice processing delayed monthly close in 4 regions.",
    solution: "UiPath bots and ServiceNow workflows for invoice/expense capture, approvals, and reporting.",
    results: "Saved 720+ staff hours per quarter, eliminated missed SLAs, ROI in 7 months.",
    testimonial: "“RPA let us achieve scale without adding staff.” – Controller, Manufacturing",
    tags: ["Automation", "RPA", "ServiceNow"],
  },
  {
    title: "Streamlined HR Onboarding with ServiceNow",
    category: "ServiceNow",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    problem: "Complex people ops processes and delay in HR onboarding.",
    solution: "Designed custom workflows in ServiceNow HRSD, integrating payroll, IT, and compliance.",
    results: "Reduced onboarding time from 8 days to 2, ensured compliance, improved employee satisfaction.",
    testimonial: "“Onboarding bottlenecks vanished, and feedback is outstanding.” – Head HR",
    tags: ["ServiceNow", "HRSD", "Workflow"],
  },
];

const filterTabs = [
  { label: "All", value: "All" },
  { label: "AI", value: "AI Development" },
  { label: "ServiceNow", value: "ServiceNow" },
  { label: "Automation", value: "Automation" },
  { label: "Consulting", value: "Consulting" },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? caseStudies
    : caseStudies.filter((cs) => cs.category === filter);

  return (
    <>
      <SEO
        title="Projects & Case Studies | Drehill Private Limited"
        description="Explore real-world projects and case studies: AI, ServiceNow, Automation, and Consulting. See how we've delivered enterprise impact."
      />
      <Navbar />
      <main className="w-full min-h-screen bg-white">
        <section className="py-16 md:py-24 bg-dreh-bg border-b border-lavender">
          <div className="container max-w-6xl mx-auto px-4">
            <h1 className="font-head text-headline text-indigo uppercase mb-8 text-center">
              Projects &amp; Case Studies
            </h1>
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              {filterTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setFilter(tab.value)}
                  className={`px-5 py-2 rounded-full font-head uppercase text-sm border ${
                    filter === tab.value
                      ? "bg-violet text-white border-violet shadow"
                      : "bg-white text-violet border-violet hover:bg-lavender/60"
                  } transition`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filtered.map((cs) => (
                <div key={cs.title} className="bg-white rounded-lg shadow-card border border-lavender flex flex-col overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full aspect-[16/9] object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-xs text-grape font-bold uppercase mb-1">{cs.category}</div>
                    <h3 className="font-head text-lg mb-2 text-indigo">{cs.title}</h3>
                    <div className="font-body text-indigo text-sm mb-2">
                      <span className="font-head text-grape mr-1">Business Problem:</span> {cs.problem}
                    </div>
                    <div className="font-body text-indigo text-sm mb-2">
                      <span className="font-head text-grape mr-1">Solution:</span> {cs.solution}
                    </div>
                    <div className="font-body text-violet text-sm mb-2">
                      <span className="font-head text-indigo mr-1">Results:</span> {cs.results}
                    </div>
                    <div className="italic text-indigo text-xs mb-3"> {cs.testimonial}</div>
                    <div className="flex gap-2 flex-wrap mt-auto">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-lavender text-indigo px-3 py-1 text-xs rounded-full font-head uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="flex justify-center py-10">
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded bg-violet text-white font-head uppercase shadow hover:bg-grape transition"
          >
            Start Your Project
          </a>
        </div>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
};

export default Projects;
