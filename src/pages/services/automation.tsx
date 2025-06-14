
import React from "react";
import { SEO } from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StickyCTA from "../../components/StickyCTA";
import { Repeat2 } from "lucide-react";

const Automation = () => (
  <>
    <SEO
      title="Enterprise Automation | Drehill Private Limited"
      description="RPA, system integrations, and process automation: cost reduction and digital velocity for enterprises."
    />
    <Navbar />
    <main className="w-full min-h-screen bg-white">
      <section className="bg-dreh-bg py-14 md:py-20 border-b border-lavender">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2 text-4xl text-violet">
              <Repeat2 />
              <span className="font-head uppercase text-violet text-title">Enterprise Automation</span>
            </div>
            <p className="font-body text-lg text-indigo mb-4">
              Accelerate business processes through RPA, system integrations, and workflow automation. Increase efficiency, reduce errors, and grow reliably with Drehill’s automation offerings.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded bg-violet text-white font-head uppercase shadow hover:bg-grape transition"
            >
              Connect for Automation
            </a>
          </div>
          <div className="flex-1 pr-2">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80"
              alt="Automation Abstract"
              className="w-full rounded-lg shadow-card border border-lavender object-cover"
            />
          </div>
        </div>
      </section>
      <section className="container max-w-5xl mx-auto px-4 py-16">
        <h2 className="font-head text-title text-indigo uppercase mb-6">Solutions</h2>
        <ul className="grid md:grid-cols-2 gap-7">
          <li>
            <span className="font-head text-violet">RPA (UiPath, Power Automate):</span>
            {" "}Streamline repetitive tasks and improve accuracy.
          </li>
          <li>
            <span className="font-head text-violet">End-to-End Integrations:</span>
            {" "}Unify data flows across CRM, ERP, HR, and more.
          </li>
          <li>
            <span className="font-head text-violet">Workflow Automation:</span>
            {" "}Custom process automation tailored to specific domains.
          </li>
          <li>
            <span className="font-head text-violet">Cost Tracking & Impact:</span>
            {" "}Dashboards, ROI assessment, and result measurement.
          </li>
        </ul>
        <h3 className="font-head text-lg text-grape uppercase mt-10 mb-2">Platforms & Tools</h3>
        <div className="flex flex-wrap gap-3 text-indigo text-sm">
          <span className="bg-lavender px-3 py-1 rounded">UiPath</span>
          <span className="bg-lavender px-3 py-1 rounded">Power Automate</span>
          <span className="bg-lavender px-3 py-1 rounded">Custom Scripts</span>
        </div>
        <h3 className="font-head text-lg text-grape uppercase mt-10 mb-2">Cost Reduction in Action</h3>
        <ul className="list-disc list-inside text-indigo font-body ml-3">
          <li>Reduced invoice processing labor by 70%</li>
          <li>Zero-defect automated onboarding for clients across geographies</li>
          <li>Integrated legacy & cloud with minimal disruption</li>
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

export default Automation;
