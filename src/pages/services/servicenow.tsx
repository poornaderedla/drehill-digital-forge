
import React from "react";
import { SEO } from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StickyCTA from "../../components/StickyCTA";
import { Workflow } from "lucide-react";

const ServiceNow = () => (
  <>
    <SEO
      title="ServiceNow Solutions | Drehill Private Limited"
      description="ServiceNow implementations: ITSM, HRSD, CMDB, custom workflows, integrations and case studies."
    />
    <Navbar />
    <main className="w-full min-h-screen bg-white">
      <section className="bg-dreh-bg py-14 md:py-20 border-b border-lavender">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2 text-4xl text-violet">
              <Workflow />
              <span className="font-head uppercase text-violet text-title">ServiceNow Solutions</span>
            </div>
            <p className="font-body text-lg text-indigo mb-4">
              Modernize operations with tailored ServiceNow implementations—ITSM, HRSD, CMDB, and end-to-end workflows. We empower enterprises to create seamless, scalable operations on the Now Platform.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded bg-violet text-white font-head uppercase shadow hover:bg-grape transition"
            >
              Connect with ServiceNow Expert
            </a>
          </div>
          <div className="flex-1 pr-2">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80"
              alt="ServiceNow Abstract"
              className="w-full rounded-lg shadow-card border border-lavender object-cover"
            />
          </div>
        </div>
      </section>
      <section className="container max-w-5xl mx-auto px-4 py-16">
        <h2 className="font-head text-title text-indigo uppercase mb-6">Capabilities</h2>
        <ul className="grid md:grid-cols-2 gap-7">
          <li>
            <span className="font-head text-violet">ITSM Implementations:</span>
            {" "}End-to-end IT Service Management with robust process automation.
          </li>
          <li>
            <span className="font-head text-violet">HRSD & CMDB:</span>
            {" "}Human Resources Service Delivery and configuration management database setup.
          </li>
          <li>
            <span className="font-head text-violet">Custom Workflows:</span>
            {" "}Design, integration, and automation for unique business demands.
          </li>
          <li>
            <span className="font-head text-violet">Integration & Scoped Apps:</span>
            {" "}Seamless cross-system data flows and bespoke ServiceNow apps.
          </li>
        </ul>
        <h3 className="font-head text-lg text-grape uppercase mt-10 mb-2">Stack & Tools</h3>
        <div className="flex flex-wrap gap-3 text-indigo text-sm">
          <span className="bg-lavender px-3 py-1 rounded">Now Platform</span>
          <span className="bg-lavender px-3 py-1 rounded">IntegrationHub</span>
          <span className="bg-lavender px-3 py-1 rounded">Scoped Apps</span>
        </div>
        <h3 className="font-head text-lg text-grape uppercase mt-10 mb-2">Featured Results</h3>
        <ul className="list-disc list-inside text-indigo font-body ml-3">
          <li>Reduced ticket handling times by 40% at a Fortune 500</li>
          <li>Global rollouts across 30+ geographies</li>
          <li>Custom HR processes automated for a unicorn SaaS</li>
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

export default ServiceNow;
