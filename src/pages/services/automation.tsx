
import React from "react";
import { SEO } from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StickyCTA from "../../components/StickyCTA";
import { Repeat2, Zap, ArrowRight, Clock, DollarSign, TrendingUp, Target, CheckCircle, Users, Shield } from "lucide-react";

const Automation = () => (
  <>
    <SEO
      title="Enterprise Automation Solutions | RPA, Process Automation | Digital Transformation | Drehill"
      description="Transform operations with enterprise automation. RPA, workflow automation, system integration, intelligent process automation. Reduce costs 70%, eliminate errors, accelerate growth with proven automation solutions."
    />
    <Navbar />
    <main className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet to-grape text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <Repeat2 className="text-6xl" />
                <h1 className="font-head uppercase text-white text-display">Enterprise Automation</h1>
              </div>
              <p className="font-body text-xl text-lavender/90 mb-8 leading-relaxed">
                Accelerate business velocity and reduce operational costs through intelligent automation. 
                Our RPA, workflow automation, and system integration solutions deliver measurable ROI, 
                eliminate human error, boost productivity, and transform how your organization operates.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-head text-white mb-1">70%</div>
                  <div className="text-lavender/80 text-sm uppercase">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-head text-white mb-1">500+</div>
                  <div className="text-lavender/80 text-sm uppercase">Processes Automated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-head text-white mb-1">99.9%</div>
                  <div className="text-lavender/80 text-sm uppercase">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-head text-white mb-1">4 mos</div>
                  <div className="text-lavender/80 text-sm uppercase">Payback Period</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 rounded bg-white text-violet font-head uppercase shadow-lg hover:bg-lavender/20 hover:text-white border-2 border-white transition text-lg"
                >
                  Start Automation Journey
                </a>
                <a
                  href="/projects"
                  className="inline-block px-8 py-4 rounded border-2 border-white text-white font-head uppercase hover:bg-white hover:text-violet transition text-lg"
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
        </div>
      </section>

      {/* Core Automation Solutions */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-head text-title text-indigo uppercase mb-6">Comprehensive Automation Solutions</h2>
            <p className="text-lg text-grape max-w-3xl mx-auto">
              From simple task automation to complex process orchestration, we deliver end-to-end automation 
              solutions that transform operations, enhance efficiency, and drive sustainable growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <Repeat2 className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">Robotic Process Automation</h3>
              <p className="text-indigo font-body mb-4">Intelligent software robots that automate repetitive, rule-based tasks across applications and systems with cognitive capabilities.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Attended & Unattended Automation</li>
                <li>• Cognitive RPA with AI/ML</li>
                <li>• Exception Handling & Recovery</li>
                <li>• Process Mining & Discovery</li>
                <li>• Bot Lifecycle Management</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <Zap className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">Intelligent Process Automation</h3>
              <p className="text-indigo font-body mb-4">End-to-end process automation with AI-powered decision making, approvals, notifications, and intelligent routing capabilities.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Workflow Orchestration</li>
                <li>• Business Rules Engine</li>
                <li>• Decision Management</li>
                <li>• Process Analytics & Optimization</li>
                <li>• Dynamic Resource Allocation</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <ArrowRight className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">System Integration & APIs</h3>
              <p className="text-indigo font-body mb-4">Seamless data flow between disparate systems, APIs, cloud platforms, and legacy applications with real-time synchronization.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Enterprise Service Bus (ESB)</li>
                <li>• API Management & Gateway</li>
                <li>• Legacy System Modernization</li>
                <li>• Cloud Integration Platforms</li>
                <li>• Real-time Data Streaming</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <Shield className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">Document Processing Automation</h3>
              <p className="text-indigo font-body mb-4">AI-powered document capture, extraction, classification, and processing with OCR, NLP, and machine learning capabilities.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Intelligent Document Processing</li>
                <li>• OCR & Data Extraction</li>
                <li>• Document Classification</li>
                <li>• Forms Processing Automation</li>
                <li>• Digital Mailroom Solutions</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <TrendingUp className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">Business Process Optimization</h3>
              <p className="text-indigo font-body mb-4">Process mining, analysis, redesign, and continuous improvement with real-time monitoring and performance analytics.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Process Discovery & Mining</li>
                <li>• Bottleneck Identification</li>
                <li>• Process Redesign & Optimization</li>
                <li>• Performance Monitoring</li>
                <li>• Continuous Improvement</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <Users className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">Hyperautomation Platform</h3>
              <p className="text-indigo font-body mb-4">Comprehensive automation platform combining RPA, AI, ML, and low-code development for enterprise-wide transformation.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Low-Code/No-Code Development</li>
                <li>• AI/ML Integration</li>
                <li>• Process Orchestration</li>
                <li>• Automation Center of Excellence</li>
                <li>• Governance & Compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 md:py-28 bg-dreh-bg">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title text-indigo uppercase mb-12 text-center">Enterprise Automation Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
              <h3 className="font-head text-xl text-grape uppercase mb-6">RPA & Automation Platforms</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Leading RPA Tools</h4>
                  <p className="text-sm text-indigo">UiPath, Automation Anywhere, Blue Prism, Microsoft Power Automate, WorkFusion, Kofax RPA</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Process Automation</h4>
                  <p className="text-sm text-indigo">Microsoft Power Platform, ServiceNow, Nintex, K2, Appian, Pega Platform</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Document Processing</h4>
                  <p className="text-sm text-indigo">ABBYY FlexiCapture, Kofax Capture, Adobe Document Services, Google Document AI, AWS Textract</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Process Mining</h4>
                  <p className="text-sm text-indigo">Celonis, Process Street, Minit, QPR ProcessAnalyzer, DISCO, Mehrwerk ProcessMining</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
              <h3 className="font-head text-xl text-grape uppercase mb-6">Integration & Infrastructure</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Integration Platforms</h4>
                  <p className="text-sm text-indigo">MuleSoft, Dell Boomi, Microsoft Azure Logic Apps, IBM App Connect, Zapier, Workato</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">API Management</h4>
                  <p className="text-sm text-indigo">Apigee, AWS API Gateway, Azure API Management, Kong, Ambassador, Postman</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Cloud Platforms</h4>
                  <p className="text-sm text-indigo">AWS, Microsoft Azure, Google Cloud Platform, IBM Cloud, Oracle Cloud Infrastructure</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Monitoring & Analytics</h4>
                  <p className="text-sm text-indigo">Splunk, ELK Stack, Datadog, New Relic, AppDynamics, Dynatrace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Framework */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title text-indigo uppercase mb-8 text-center">Proven Automation Framework</h2>
          <p className="text-center text-grape mb-12 max-w-3xl mx-auto">
            Our systematic approach ensures successful automation implementations with maximum ROI, 
            minimal risk, and sustainable long-term value creation.
          </p>
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">1</div>
              <h4 className="font-head text-grape uppercase mb-3">Discovery & Assessment</h4>
              <p className="text-sm text-indigo">Process discovery, automation opportunities identification, ROI assessment, and feasibility analysis</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">2</div>
              <h4 className="font-head text-grape uppercase mb-3">Strategy & Design</h4>
              <p className="text-sm text-indigo">Automation strategy development, technical architecture design, and exception handling framework</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">3</div>
              <h4 className="font-head text-grape uppercase mb-3">Development & Testing</h4>
              <p className="text-sm text-indigo">Bot development, integration building, comprehensive testing, and performance optimization</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">4</div>
              <h4 className="font-head text-grape uppercase mb-3">Deployment & Training</h4>
              <p className="text-sm text-indigo">Production deployment, user training, change management, and go-live support</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">5</div>
              <h4 className="font-head text-grape uppercase mb-3">Support & Optimization</h4>
              <p className="text-sm text-indigo">Continuous monitoring, maintenance, performance optimization, and scaling strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Department-Specific Use Cases */}
      <section className="py-20 md:py-28 bg-dreh-bg">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title text-indigo uppercase mb-12 text-center">Department-Specific Automation Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
              <h3 className="font-head text-xl text-grape uppercase mb-6">Finance & Accounting</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Accounts Payable/Receivable</h4>
                  <p className="text-sm text-indigo">Invoice processing, payment automation, reconciliation, and vendor management workflows</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Financial Reporting</h4>
                  <p className="text-sm text-indigo">Automated report generation, consolidation, regulatory reporting, and compliance documentation</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Expense Management</h4>
                  <p className="text-sm text-indigo">Expense report processing, approval workflows, reimbursement automation, and policy compliance</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
              <h3 className="font-head text-xl text-grape uppercase mb-6">Human Resources</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Employee Lifecycle</h4>
                  <p className="text-sm text-indigo">Onboarding, offboarding, performance reviews, and career development automation</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Recruitment & Hiring</h4>
                  <p className="text-sm text-indigo">Resume screening, candidate management, interview scheduling, and offer processing</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Payroll & Benefits</h4>
                  <p className="text-sm text-indigo">Payroll processing, benefits administration, compliance reporting, and time tracking</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
              <h3 className="font-head text-xl text-grape uppercase mb-6">Customer Service</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Ticket Management</h4>
                  <p className="text-sm text-indigo">Automated ticket routing, escalation, resolution, and customer communication workflows</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Order Processing</h4>
                  <p className="text-sm text-indigo">Order entry, fulfillment, shipping, and customer notification automation</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Customer Data Management</h4>
                  <p className="text-sm text-indigo">Customer profile updates, data synchronization, and CRM maintenance automation</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
              <h3 className="font-head text-xl text-grape uppercase mb-6">Supply Chain & Operations</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Inventory Management</h4>
                  <p className="text-sm text-indigo">Stock monitoring, reorder automation, demand forecasting, and warehouse optimization</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Procurement</h4>
                  <p className="text-sm text-indigo">Purchase order processing, supplier management, contract automation, and approval workflows</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Logistics Coordination</h4>
                  <p className="text-sm text-indigo">Shipping coordination, tracking updates, delivery scheduling, and performance monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Success Metrics */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title text-indigo uppercase mb-8 text-center">Automation ROI & Impact</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-dreh-bg p-8 rounded-lg border border-lavender">
              <h3 className="font-head text-xl text-grape uppercase mb-6 text-center">Business Impact Metrics</h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <Clock className="mx-auto mb-2 text-violet" size={32} />
                  <div className="text-3xl font-head text-violet mb-1">70-90%</div>
                  <p className="text-indigo text-sm">Reduction in processing time</p>
                </div>
                <div>
                  <DollarSign className="mx-auto mb-2 text-violet" size={32} />
                  <div className="text-3xl font-head text-violet mb-1">$1.5M</div>
                  <p className="text-indigo text-sm">Average annual savings</p>
                </div>
                <div>
                  <TrendingUp className="mx-auto mb-2 text-violet" size={32} />
                  <div className="text-3xl font-head text-violet mb-1">99.9%</div>
                  <p className="text-indigo text-sm">Process accuracy rate</p>
                </div>
                <div>
                  <Target className="mx-auto mb-2 text-violet" size={32} />
                  <div className="text-3xl font-head text-violet mb-1">4 mos</div>
                  <p className="text-indigo text-sm">Average payback period</p>
                </div>
              </div>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg border border-lavender">
              <h3 className="font-head text-xl text-grape uppercase mb-6 text-center">Implementation Success</h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-head text-violet mb-2">500+</div>
                  <p className="text-indigo text-sm">Processes automated</p>
                </div>
                <div>
                  <div className="text-3xl font-head text-violet mb-2">250K</div>
                  <p className="text-indigo text-sm">Hours saved annually</p>
                </div>
                <div>
                  <div className="text-3xl font-head text-violet mb-2">98%</div>
                  <p className="text-indigo text-sm">Client satisfaction rate</p>
                </div>
                <div>
                  <div className="text-3xl font-head text-violet mb-2">150+</div>
                  <p className="text-indigo text-sm">Enterprise clients served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Drehill */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-indigo to-violet text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title uppercase mb-12 text-center">Why Drehill for Enterprise Automation</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <CheckCircle className="mx-auto mb-4 text-lavender" size={48} />
              <h3 className="font-head text-xl uppercase mb-4">Proven Automation Expertise</h3>
              <p className="text-lavender/90">500+ successful automation implementations across industries with deep expertise in all major RPA and automation platforms</p>
            </div>
            <div className="text-center">
              <Target className="mx-auto mb-4 text-lavender" size={48} />
              <h3 className="font-head text-xl uppercase mb-4">ROI-Focused Approach</h3>
              <p className="text-lavender/90">Average 4-month payback period with measurable business outcomes and continuous optimization for maximum value realization</p>
            </div>
            <div className="text-center">
              <Users className="mx-auto mb-4 text-lavender" size={48} />
              <h3 className="font-head text-xl uppercase mb-4">End-to-End Support</h3>
              <p className="text-lavender/90">Complete automation lifecycle management from strategy to support with Center of Excellence establishment and governance</p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="font-head text-xl uppercase mb-6">Ready to Automate & Transform?</h3>
            <p className="text-xl text-lavender/90 mb-8 max-w-2xl mx-auto">
              Accelerate your digital transformation with intelligent automation solutions that deliver immediate impact and long-term value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-10 py-4 rounded bg-white text-violet font-head uppercase text-lg shadow-lg hover:bg-lavender/20 hover:text-white border-2 border-white transition-all duration-300"
              >
                Start Automation Assessment
              </a>
              <a
                href="/projects"
                className="px-10 py-4 rounded border-2 border-white text-white font-head uppercase text-lg hover:bg-white hover:text-violet transition-all duration-300"
              >
                View Automation Success Stories
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container max-w-6xl mx-auto px-4 py-14">
        <a href="/services" className="text-violet font-head uppercase text-base hover:underline">&larr; Back to Services</a>
      </div>
    </main>
    <Footer />
    <StickyCTA />
  </>
);

export default Automation;
