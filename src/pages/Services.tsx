
import React from "react";
import { SEO } from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";
import { ServiceCard } from "../components/ServiceCard";
import { Cpu, Workflow, Repeat2, BookUser } from "lucide-react";

const serviceDefs = [
  {
    icon: <Cpu />,
    title: "AI Development",
    desc: "LLMs, NLP, knowledge systems, custom assistants for enterprise transformation.",
    href: "/services/ai-development",
  },
  {
    icon: <Workflow />,
    title: "ServiceNow Solutions",
    desc: "ITSM, HRSD, CMDB, custom workflows and integrations for end-to-end enterprise ops.",
    href: "/services/servicenow",
  },
  {
    icon: <Repeat2 />,
    title: "Enterprise Automation",
    desc: "Process automation, system integration, RPA for accelerated growth.",
    href: "/services/automation",
  },
  {
    icon: <BookUser />,
    title: "Consulting Services",
    desc: "Strategic digital advisory, architecture, innovation consulting and integrations.",
    href: "/services/consulting",
  },
];

const recentProjects = [
  {
    title: "Pharma Digital Roadmap",
    category: "Consulting",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    problem:
      "Legacy IT slowed global supply chain, blocking scaling.",
    solution:
      "Multi-year transformation roadmap with AI-driven insights, orchestrated by Drehill experts.",
    results:
      "Platform unified >27 systems, accelerated product launches, projected $2.2M cost-savings per annum.",
    link: "/projects/pharma-digital-roadmap",
  },
  {
    title: "Intelligent Workplace Search Deployment",
    category: "AI Development",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    problem:
      "Employees couldn't find knowledge across SaaS, SharePoint, Confluence.",
    solution:
      "Deployed LLM+RAG system connected to company data, with secure vector search and ServiceNow integration.",
    results:
      "Average query success +354%, reduced onboarding time, improved helpdesk satisfaction.",
    link: "/projects/intelligent-workplace-search",
  },
  {
    title: "RPA for Finance Automation",
    category: "Automation",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    problem:
      "Manual invoice processing delayed monthly close in 4 regions.",
    solution:
      "UiPath bots and ServiceNow workflows for invoice/expense capture, approvals, and reporting.",
    results:
      "Saved 720+ staff hours per quarter, eliminated missed SLAs, ROI in 7 months.",
    link: "/projects/rpa-finance-automation",
  },
];

const Services = () => (
  <>
    <SEO
      title="Our Services | Drehill Private Limited"
      description="Explore our AI development, ServiceNow solutions, automation, and consulting services."
    />
    <Navbar />
    <main className="w-full min-h-screen bg-dreh-bg">
      <section className="py-16 md:py-28 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="font-head text-headline text-indigo uppercase mb-8 text-center">
            Our Services
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {serviceDefs.map((service) => (
              <ServiceCard {...service} key={service.title} />
            ))}
          </div>
        </div>
      </section>
      
      {/* --- Recent Projects Showcase --- */}
      <section className="py-16 md:py-24 bg-dreh-bg border-t border-lavender">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-head text-title text-violet uppercase mb-8 text-center">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProjects.map((proj) => (
              <div key={proj.title} className="group bg-white rounded-lg shadow-card border border-lavender overflow-hidden flex flex-col transition hover:scale-105">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full aspect-[16/9] object-cover"
                />
                <div className="flex-1 flex flex-col p-6">
                  <div className="text-xs text-grape font-bold uppercase mb-2">{proj.category}</div>
                  <h3 className="font-head text-lg mb-2 text-indigo group-hover:text-violet transition">{proj.title}</h3>
                  <div className="font-body text-sm text-indigo mb-1">
                    <span className="font-head text-grape mr-1">Problem:</span>
                    {proj.problem}
                  </div>
                  <div className="font-body text-sm text-indigo mb-1">
                    <span className="font-head text-grape mr-1">Solution:</span>
                    {proj.solution}
                  </div>
                  <div className="font-body text-sm text-violet mb-4">
                    <span className="font-head text-indigo mr-1">Results:</span>
                    {proj.results}
                  </div>
                  <a
                    href={proj.link}
                    className="text-violet hover:underline font-head uppercase text-sm mt-auto transition focus:outline-violet"
                  >
                    Read Case Study &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="/projects"
              className="inline-block border-2 border-violet px-8 py-2 rounded font-head text-violet uppercase text-base bg-white hover:bg-lavender/60 transition"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      <div className="flex justify-center py-8">
        <a
          href="/contact"
          className="px-8 py-3 rounded bg-violet text-white font-head uppercase shadow hover:bg-grape transition"
        >
          Talk to an Expert
        </a>
      </div>
    </main>
    <Footer />
    <StickyCTA />
  </>
);

export default Services;
