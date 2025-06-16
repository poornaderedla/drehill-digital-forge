
import React from "react";
import { SEO } from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StickyCTA from "../../components/StickyCTA";
import { Repeat2, Zap, ArrowRight, Clock, DollarSign, TrendingUp } from "lucide-react";

const Automation = () => (
  <>
    <SEO
      title="Enterprise Automation Solutions | RPA, Process Automation | Drehill"
      description="Transform operations with enterprise automation. RPA, workflow automation, system integration. Reduce costs, eliminate errors, accelerate growth with proven automation solutions."
    />
    <Navbar />
    <main className="w-full min-h-screen bg-white">
      <section className="bg-dreh-bg py-16 md:py-24 border-b border-lavender">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4 text-5xl text-violet">
              <Repeat2 />
              <span className="font-head uppercase text-violet text-headline">Enterprise Automation</span>
            </div>
            <p className="font-body text-xl text-indigo mb-6 leading-relaxed">
              Accelerate business velocity and reduce operational costs through intelligent automation. 
              Our RPA, workflow automation, and system integration solutions deliver measurable ROI 
              while eliminating human error and boosting productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-block px-8 py-4 rounded bg-violet text-white font-head uppercase shadow-lg hover:bg-grape transition text-lg"
              >
                Start Automation Journey
              </a>
              <a
                href="/projects"
                className="inline-block px-8 py-4 rounded border-2 border-violet text-violet font-head uppercase hover:bg-lavender/60 transition text-lg"
              >
                View Success Stories
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
              alt="Enterprise Automation Visualization"
              className="w-full rounded-lg shadow-card border border-lavender object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Automation Services */}
      <section className="container max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-head text-title text-indigo uppercase mb-12 text-center">Automation Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Repeat2 className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">Robotic Process Automation</h3>
            <p className="text-indigo font-body">Software robots that automate repetitive, rule-based tasks across applications and systems.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Zap className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">Workflow Automation</h3>
            <p className="text-indigo font-body">End-to-end process automation with approvals, notifications, and intelligent routing.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <ArrowRight className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">System Integration</h3>
            <p className="text-indigo font-body">Seamless data flow between disparate systems, APIs, and cloud platforms.</p>
          </div>
        </div>

        <h2 className="font-head text-title text-indigo uppercase mb-8">Technology Stack</h2>
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <h3 className="font-head text-lg text-grape uppercase mb-4">RPA Platforms</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>UiPath:</strong> Enterprise RPA with AI-powered automation and orchestration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>Microsoft Power Automate:</strong> Cloud-native automation with Office 365 integration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>Automation Anywhere:</strong> Intelligent automation with cognitive capabilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>Blue Prism:</strong> Secure, scalable RPA for enterprise environments</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-head text-lg text-grape uppercase mb-4">Integration Technologies</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>API Management:</strong> REST, SOAP, GraphQL with enterprise security</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>ETL/ELT:</strong> Talend, Informatica, Azure Data Factory</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>Message Queues:</strong> Apache Kafka, RabbitMQ, Azure Service Bus</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>Database Integration:</strong> SQL Server, Oracle, PostgreSQL, MongoDB</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="font-head text-title text-indigo uppercase mb-8">Automation Framework</h2>
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">1</div>
            <h4 className="font-head text-grape uppercase mb-2">Process Discovery</h4>
            <p className="text-sm text-indigo">Identify automation opportunities, ROI assessment, feasibility analysis</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">2</div>
            <h4 className="font-head text-grape uppercase mb-2">Solution Design</h4>
            <p className="text-sm text-indigo">Technical architecture, bot design, exception handling strategy</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">3</div>
            <h4 className="font-head text-grape uppercase mb-2">Development & Testing</h4>
            <p className="text-sm text-indigo">Bot development, unit testing, integration testing, UAT</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">4</div>
            <h4 className="font-head text-grape uppercase mb-2">Deployment & Support</h4>
            <p className="text-sm text-indigo">Production deployment, monitoring, maintenance, optimization</p>
          </div>
        </div>

        <h2 className="font-head text-title text-indigo uppercase mb-8">Use Cases by Department</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-card border border-lavender">
            <h3 className="font-head text-lg text-grape uppercase mb-4">Finance & Accounting</h3>
            <ul className="space-y-2 text-sm text-indigo">
              <li>• Invoice processing and AP/AR automation</li>
              <li>• Financial reporting and reconciliation</li>
              <li>• Expense management and reimbursements</li>
              <li>• Compliance reporting and audit trails</li>
              <li>• Tax preparation and filing</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-card border border-lavender">
            <h3 className="font-head text-lg text-grape uppercase mb-4">Human Resources</h3>
            <ul className="space-y-2 text-sm text-indigo">
              <li>• Employee onboarding and offboarding</li>
              <li>• Payroll processing and benefits administration</li>
              <li>• Resume screening and candidate management</li>
              <li>• Performance review workflows</li>
              <li>• Compliance and regulatory reporting</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-card border border-lavender">
            <h3 className="font-head text-lg text-grape uppercase mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-indigo">
              <li>• Ticket routing and escalation</li>
              <li>• Customer data updates and synchronization</li>
              <li>• Order processing and fulfillment</li>
              <li>• Refund and return processing</li>
              <li>• SLA monitoring and reporting</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-card border border-lavender">
            <h3 className="font-head text-lg text-grape uppercase mb-4">Supply Chain</h3>
            <ul className="space-y-2 text-sm text-indigo">
              <li>• Inventory management and replenishment</li>
              <li>• Purchase order processing</li>
              <li>• Supplier onboarding and management</li>
              <li>• Shipping and logistics coordination</li>
              <li>• Demand planning and forecasting</li>
            </ul>
          </div>
        </div>

        <div className="bg-dreh-bg p-8 rounded-lg border border-lavender mb-16">
          <h3 className="font-head text-xl text-grape uppercase mb-6 text-center">ROI & Benefits</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="mx-auto mb-3 text-violet" size={48} />
              <h4 className="font-head text-grape uppercase mb-2">Time Savings</h4>
              <div className="text-2xl font-head text-violet mb-2">70-90%</div>
              <p className="text-indigo text-sm">Reduction in manual processing time</p>
            </div>
            <div className="text-center">
              <DollarSign className="mx-auto mb-3 text-violet" size={48} />
              <h4 className="font-head text-grape uppercase mb-2">Cost Reduction</h4>
              <div className="text-2xl font-head text-violet mb-2">$1.5M</div>
              <p className="text-indigo text-sm">Average annual savings per implementation</p>
            </div>
            <div className="text-center">
              <TrendingUp className="mx-auto mb-3 text-violet" size={48} />
              <h4 className="font-head text-grape uppercase mb-2">Accuracy</h4>
              <div className="text-2xl font-head text-violet mb-2">99.9%</div>
              <p className="text-indigo text-sm">Process accuracy with automation</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
          <h3 className="font-head text-xl text-grape uppercase mb-6 text-center">Implementation Success Metrics</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-head text-violet mb-2">500+</div>
              <p className="text-indigo">Processes automated</p>
            </div>
            <div>
              <div className="text-3xl font-head text-violet mb-2">250K</div>
              <p className="text-indigo">Hours saved annually</p>
            </div>
            <div>
              <div className="text-3xl font-head text-violet mb-2">98%</div>
              <p className="text-indigo">Client satisfaction rate</p>
            </div>
            <div>
              <div className="text-3xl font-head text-violet mb-2">4 months</div>
              <p className="text-indigo">Average payback period</p>
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

export default Automation;
