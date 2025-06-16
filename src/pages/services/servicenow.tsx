
import React from "react";
import { SEO } from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StickyCTA from "../../components/StickyCTA";
import { Workflow, Settings, Users, Database, Shield, Zap } from "lucide-react";

const ServiceNow = () => (
  <>
    <SEO
      title="ServiceNow Implementation & Consulting | ITSM, HRSD, CMDB | Drehill"
      description="Expert ServiceNow implementations and consulting. ITSM, HRSD, CMDB, custom workflows, integrations. Certified ServiceNow partners with proven enterprise results."
    />
    <Navbar />
    <main className="w-full min-h-screen bg-white">
      <section className="bg-dreh-bg py-16 md:py-24 border-b border-lavender">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4 text-5xl text-violet">
              <Workflow />
              <span className="font-head uppercase text-violet text-headline">ServiceNow Solutions</span>
            </div>
            <p className="font-body text-xl text-indigo mb-6 leading-relaxed">
              Transform your enterprise operations with comprehensive ServiceNow implementations. From ITSM to HRSD, 
              we deliver scalable, secure solutions that streamline processes and drive operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-block px-8 py-4 rounded bg-violet text-white font-head uppercase shadow-lg hover:bg-grape transition text-lg"
              >
                Get ServiceNow Consultation
              </a>
              <a
                href="/projects"
                className="inline-block px-8 py-4 rounded border-2 border-violet text-violet font-head uppercase hover:bg-lavender/60 transition text-lg"
              >
                View Implementation Cases
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="ServiceNow Platform Dashboard"
              className="w-full rounded-lg shadow-card border border-lavender object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core ServiceNow Services */}
      <section className="container max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-head text-title text-indigo uppercase mb-12 text-center">ServiceNow Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Settings className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">ITSM Implementation</h3>
            <p className="text-indigo font-body">Complete IT Service Management with incident, problem, change, and release management workflows.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Users className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">HRSD Solutions</h3>
            <p className="text-indigo font-body">Human Resources Service Delivery for employee lifecycle management, case management, and self-service portals.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Database className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">CMDB & Discovery</h3>
            <p className="text-indigo font-body">Configuration Management Database setup with automated discovery and relationship mapping.</p>
          </div>
        </div>

        <h2 className="font-head text-title text-indigo uppercase mb-8">Platform Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <h3 className="font-head text-lg text-grape uppercase mb-4">Core Modules</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>IT Service Management:</strong> Incident, Problem, Change, Release Management</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>IT Operations Management:</strong> Event management, orchestration, discovery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>HR Service Delivery:</strong> Employee center, case management, knowledge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>CSM:</strong> Customer Service Management with omnichannel support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>SecOps:</strong> Security incident response and vulnerability management</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-head text-lg text-grape uppercase mb-4">Advanced Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>Workflow Automation:</strong> Custom workflows with business rules and approvals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>Integration Hub:</strong> ETL, API orchestration, third-party integrations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>Performance Analytics:</strong> KPI dashboards, reports, and insights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>Mobile Apps:</strong> Native mobile applications for field service</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>AI/ML:</strong> Virtual Agent, Predictive Intelligence, anomaly detection</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="font-head text-title text-indigo uppercase mb-8">Implementation Methodology</h2>
        <div className="grid md:grid-cols-5 gap-4 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">1</div>
            <h4 className="font-head text-grape uppercase mb-2 text-sm">Assessment</h4>
            <p className="text-xs text-indigo">Current state analysis, requirements gathering</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">2</div>
            <h4 className="font-head text-grape uppercase mb-2 text-sm">Design</h4>
            <p className="text-xs text-indigo">Solution architecture, process design</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">3</div>
            <h4 className="font-head text-grape uppercase mb-2 text-sm">Build</h4>
            <p className="text-xs text-indigo">Configuration, customization, integration</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">4</div>
            <h4 className="font-head text-grape uppercase mb-2 text-sm">Test</h4>
            <p className="text-xs text-indigo">UAT, performance testing, security validation</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">5</div>
            <h4 className="font-head text-grape uppercase mb-2 text-sm">Deploy</h4>
            <p className="text-xs text-indigo">Go-live, training, hyper-care support</p>
          </div>
        </div>

        <h2 className="font-head text-title text-indigo uppercase mb-8">Industry Specializations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <Shield className="mx-auto mb-3 text-violet" size={32} />
            <h4 className="font-head text-grape uppercase mb-2">Financial Services</h4>
            <p className="text-sm text-indigo">Regulatory compliance, risk management, audit workflows</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <Users className="mx-auto mb-3 text-violet" size={32} />
            <h4 className="font-head text-grape uppercase mb-2">Healthcare</h4>
            <p className="text-sm text-indigo">HIPAA compliance, patient data security, clinical workflows</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <Zap className="mx-auto mb-3 text-violet" size={32} />
            <h4 className="font-head text-grape uppercase mb-2">Manufacturing</h4>
            <p className="text-sm text-indigo">Asset management, maintenance workflows, supply chain</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <Database className="mx-auto mb-3 text-violet" size={32} />
            <h4 className="font-head text-grape uppercase mb-2">Government</h4>
            <p className="text-sm text-indigo">Citizen services, case management, compliance reporting</p>
          </div>
        </div>

        <div className="bg-dreh-bg p-8 rounded-lg border border-lavender mb-16">
          <h3 className="font-head text-xl text-grape uppercase mb-6 text-center">Certified Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-head text-violet mb-2">CSA</div>
              <p className="text-indigo text-sm">Certified System Administrator</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-head text-violet mb-2">CAD</div>
              <p className="text-indigo text-sm">Certified Application Developer</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-head text-violet mb-2">CIS</div>
              <p className="text-indigo text-sm">Certified Implementation Specialist</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
          <h3 className="font-head text-xl text-grape uppercase mb-4 text-center">Implementation Results</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-head text-violet mb-2">40%</div>
              <p className="text-indigo">Faster incident resolution</p>
            </div>
            <div>
              <div className="text-3xl font-head text-violet mb-2">65%</div>
              <p className="text-indigo">Reduction in manual tasks</p>
            </div>
            <div>
              <div className="text-3xl font-head text-violet mb-2">90%</div>
              <p className="text-indigo">User satisfaction rate</p>
            </div>
            <div>
              <div className="text-3xl font-head text-violet mb-2">3 months</div>
              <p className="text-indigo">Average implementation time</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto px-4 pb-14">
        <a href="/services" className="text-violet font-head uppercase text-base hover:underline">&larr; Back to Services</a>
      </div>
    </main>
    <Footer />
    <StickyCTA />
  </>
);

export default ServiceNow;
