
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { ServiceCard } from "../components/ServiceCard";
import WhyDrehill from "../components/WhyDrehill";
import BlogPreview from "../components/BlogPreview";
import StickyCTA from "../components/StickyCTA";
import { SEO } from "../components/SEO";
import { Cpu, Repeat2, Workflow, BookUser, GitBranch } from "lucide-react";

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
  {
    icon: <GitBranch />,
    title: "Agile Transformation",
    desc: "SCRUM, SAFe, KANBAN implementation and enterprise-scale agile methodologies.",
    href: "/services/agile-transformation",
  },
];

const Index = () => {
  return (
    <>
      <SEO
        title="Drehill Private Limited | Building Intelligent Futures with AI & ServiceNow"
        description="Enterprise-grade AI engineering, ServiceNow solutions, automation, and digital consulting for global enterprises. Delivered by Drehill."
      />

      <Navbar />
      <main className="w-full min-h-screen">
        <Hero />
        {/* Services Section */}
        <section className="py-20 md:py-28 bg-dreh-bg">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="font-head text-headline text-indigo uppercase mb-8 text-center">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {serviceDefs.map(service => (
                <ServiceCard {...service} key={service.title} />
              ))}
            </div>
          </div>
        </section>
        {/* Why Drehill */}
        <WhyDrehill />
        {/* Blog Preview */}
        <BlogPreview />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
};

export default Index;
