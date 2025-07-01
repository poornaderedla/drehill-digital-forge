
import React from "react";
import { SEO } from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";
import { ServiceCard } from "../components/ServiceCard";
import { Cpu, Workflow, Repeat2, BookUser, CheckCircle, Users, TrendingUp, Zap, GitBranch } from "lucide-react";

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

const whyChooseUs = [
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Proven Expertise",
    desc: "Over 50+ successful implementations across Fortune 500 companies worldwide."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Team",
    desc: "Certified professionals with deep domain knowledge and industry experience."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Measurable Results",
    desc: "Average 40% efficiency improvement and 60% cost reduction for our clients."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Rapid Delivery",
    desc: "Agile methodologies ensure faster time-to-market and quick ROI realization."
  }
];

const industryStats = [
  { number: "500+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "25+", label: "Countries Served" },
  { number: "15+", label: "Years Experience" }
];

const Services = () => (
  <>
    <SEO
      title="Our Services | Drehill Private Limited"
      description="Explore our AI development, ServiceNow solutions, automation, and consulting services."
    />
    <Navbar />
    <main className="w-full min-h-screen bg-dreh-bg">
      {/* Hero Section */}
      <section className="py-16 md:py-28 bg-gradient-to-br from-violet to-grape text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="font-head text-display text-white uppercase mb-6">
              Transform Your Enterprise
            </h1>
            <p className="text-xl md:text-2xl text-lavender/90 max-w-3xl mx-auto leading-relaxed">
              Accelerate digital transformation with cutting-edge AI, automation, and strategic consulting solutions
            </p>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-head text-white mb-2">{stat.number}</div>
                <div className="text-lavender/80 font-body uppercase text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-head text-headline text-indigo uppercase mb-6">
              Our Core Services
            </h2>
            <p className="text-lg text-grape max-w-2xl mx-auto">
              Comprehensive solutions designed to accelerate your digital journey and drive sustainable growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceDefs.map((service) => (
              <ServiceCard {...service} key={service.title} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-dreh-bg">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-head text-headline text-indigo uppercase mb-6">
              Why Choose Drehill
            </h2>
            <p className="text-lg text-grape max-w-2xl mx-auto">
              Partner with industry leaders who deliver exceptional results through innovation and expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
                <div className="text-violet mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-head text-xl text-grape uppercase mb-3">{item.title}</h3>
                <p className="text-indigo font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-head text-headline text-indigo uppercase mb-6">
              Our Proven Process
            </h2>
            <p className="text-lg text-grape max-w-2xl mx-auto">
              A systematic approach that ensures successful project delivery and long-term value creation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet rounded-full flex items-center justify-center text-white font-head text-2xl mx-auto mb-6">1</div>
              <h3 className="font-head text-xl text-grape uppercase mb-4">Discovery & Analysis</h3>
              <p className="text-indigo">Comprehensive assessment of your current state, challenges, and objectives to define the optimal solution path.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-violet rounded-full flex items-center justify-center text-white font-head text-2xl mx-auto mb-6">2</div>
              <h3 className="font-head text-xl text-grape uppercase mb-4">Design & Planning</h3>
              <p className="text-indigo">Strategic roadmap development with detailed architecture, timeline, and resource allocation for seamless execution.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-violet rounded-full flex items-center justify-center text-white font-head text-2xl mx-auto mb-6">3</div>
              <h3 className="font-head text-xl text-grape uppercase mb-4">Implementation & Support</h3>
              <p className="text-indigo">Agile delivery with continuous monitoring, optimization, and ongoing support for sustained success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-indigo to-violet text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-head text-title uppercase mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-lavender/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can accelerate your digital transformation journey and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 rounded bg-white text-violet font-head uppercase text-lg shadow-lg hover:bg-lavender/20 hover:text-white border-2 border-white transition-all duration-300"
            >
              Start Your Project
            </a>
            <a
              href="/about"
              className="px-8 py-4 rounded border-2 border-white text-white font-head uppercase text-lg hover:bg-white hover:text-violet transition-all duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <StickyCTA />
  </>
);

export default Services;
