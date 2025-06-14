
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
            {serviceDefs.map(service => (
              <ServiceCard {...service} key={service.title} />
            ))}
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
