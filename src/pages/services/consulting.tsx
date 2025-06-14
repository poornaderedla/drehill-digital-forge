
import React from "react";
import { SEO } from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StickyCTA from "../../components/StickyCTA";
import { BookUser } from "lucide-react";

const Consulting = () => (
  <>
    <SEO
      title="Consulting Services | Drehill Private Limited"
      description="Digital transformation advisory, enterprise integration, and delivery strategy for ambitious organizations."
    />
    <Navbar />
    <main className="w-full min-h-screen bg-white">
      <section className="bg-dreh-bg py-14 md:py-20 border-b border-lavender">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2 text-4xl text-violet">
              <BookUser />
              <span className="font-head uppercase text-violet text-title">Consulting Services</span>
            </div>
            <p className="font-body text-lg text-indigo mb-4">
              Our experts guide you through digital transformation: from strategy to systems integration to measurable business outcomes.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded bg-violet text-white font-head uppercase shadow hover:bg-grape transition"
            >
              Start Transformation
            </a>
          </div>
          <div className="flex-1 pr-2">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80"
              alt="Consulting Abstract"
              className="w-full rounded-lg shadow-card border border-lavender object-cover"
            />
          </div>
        </div>
      </section>
      <section className="container max-w-5xl mx-auto px-4 py-16">
        <h2 className="font-head text-title text-indigo uppercase mb-6">Expertise</h2>
        <ul className="grid md:grid-cols-2 gap-7">
          <li>
            <span className="font-head text-violet">Digital Transformation Advisory:</span>
            {" "}Roadmapping, digital maturity assessment, change management.
          </li>
          <li>
            <span className="font-head text-violet">Enterprise Integration:</span>
            {" "}End-to-end system integration across SaaS and legacy systems.
          </li>
          <li>
            <span className="font-head text-violet">Strategy & Architecture:</span>
            {" "}Custom solution design and delivery planning.
          </li>
          <li>
            <span className="font-head text-violet">Innovation Management:</span>
            {" "}Pilot-to-scale journey for emerging tech, proof-of-concept delivery.
          </li>
        </ul>
        <h3 className="font-head text-lg text-grape uppercase mt-10 mb-2">Sample Engagements</h3>
        <ul className="list-disc list-inside text-indigo font-body ml-3">
          <li>Multi-year digital roadmap for a pharma major</li>
          <li>Integration of global SaaS and on-prem ERP</li>
          <li>Scaled LLM-based workplace search for a FinTech firm</li>
        </ul>
      </section>
      <div className="container max-w-5xl mx-auto px-4 pb-14">
        <a href="/services" className="text-violet font-head uppercase text-base hover:underline">&larr; Back to Services</a>
      </div>
    </main>
    <Footer />
    <StickyCTA />
  </>
);

export default Consulting;
