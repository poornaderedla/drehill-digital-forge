
import React from "react";
import { SEO } from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StickyCTA from "../../components/StickyCTA";
import { Workflow, Settings, Users, Database, Shield, Zap, Target, TrendingUp, CheckCircle, Clock } from "lucide-react";

const ServiceNow = () => (
  <>
    <SEO
      title="ServiceNow Implementation & Consulting | ITSM, HRSD, CMDB | Enterprise Workflows | Drehill"
      description="Expert ServiceNow implementations and consulting. ITSM, HRSD, CMDB, CSM, SecOps, custom workflows, integrations. Certified ServiceNow Elite Partners with proven enterprise results and 40% faster deployment."
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
                <Workflow className="text-6xl" />
                <h1 className="font-head uppercase text-white text-display">ServiceNow Excellence</h1>
              </div>
              <p className="font-body text-xl text-lavender/90 mb-8 leading-relaxed">
                Transform your enterprise operations with comprehensive ServiceNow implementations. From ITSM to HRSD, 
                CSM to SecOps, we deliver scalable, secure solutions that streamline processes, enhance user experience, 
                and drive operational excellence across your entire organization.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-head text-white mb-1">40%</div>
                  <div className="text-lavender/80 text-sm uppercase">Faster Resolution</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-head text-white mb-1">65%</div>
                  <div className="text-lavender/80 text-sm uppercase">Task Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-head text-white mb-1">200+</div>
                  <div className="text-lavender/80 text-sm uppercase">Implementations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-head text-white mb-1">90%</div>
                  <div className="text-lavender/80 text-sm uppercase">User Satisfaction</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 rounded bg-white text-violet font-head uppercase shadow-lg hover:bg-lavender/20 hover:text-white border-2 border-white transition text-lg"
                >
                  Get ServiceNow Consultation
                </a>
                <a
                  href="/projects"
                  className="inline-block px-8 py-4 rounded border-2 border-white text-white font-head uppercase hover:bg-white hover:text-violet transition text-lg"
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
        </div>
      </section>

      {/* Core ServiceNow Solutions */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-head text-title text-indigo uppercase mb-6">Complete ServiceNow Solutions Portfolio</h2>
            <p className="text-lg text-grape max-w-3xl mx-auto">
              End-to-end ServiceNow implementations across all modules and workflows, designed to unify your enterprise 
              operations and deliver exceptional user experiences at scale.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <Settings className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">IT Service Management</h3>
              <p className="text-indigo font-body mb-4">Complete ITSM implementation with incident, problem, change, release, and knowledge management workflows optimized for enterprise scale.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Incident & Problem Management</li>
                <li>• Change & Release Management</li>
                <li>• Service Catalog & Request Management</li>
                <li>• Knowledge Management & Self-Service</li>
                <li>• SLA Management & Reporting</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <Users className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">HR Service Delivery</h3>
              <p className="text-indigo font-body mb-4">Comprehensive HRSD solutions for employee lifecycle management, case management, and self-service portals with AI-powered virtual agents.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Employee Service Center</li>
                <li>• HR Case Management</li>
                <li>• Onboarding & Offboarding</li>
                <li>• Performance Management</li>
                <li>• Learning Management Integration</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <Database className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">CMDB & Discovery</h3>
              <p className="text-indigo font-body mb-4">Configuration Management Database setup with automated discovery, relationship mapping, and real-time asset tracking across hybrid environments.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Automated Discovery & Mapping</li>
                <li>• CI Relationship Management</li>
                <li>• Asset Lifecycle Management</li>
                <li>• Service Mapping & Dependency</li>
                <li>• Health & Compliance Monitoring</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <Shield className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">Security Operations</h3>
              <p className="text-indigo font-body mb-4">SecOps implementation for security incident response, vulnerability management, threat intelligence, and compliance automation.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Security Incident Response</li>
                <li>• Vulnerability Management</li>
                <li>• Threat Intelligence Integration</li>
                <li>• Risk Assessment & Compliance</li>
                <li>• Security Orchestration (SOAR)</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <Users className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">Customer Service Management</h3>
              <p className="text-indigo font-body mb-4">CSM solutions with omnichannel support, case management, field service, and customer portal for enhanced customer experience delivery.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Omnichannel Case Management</li>
                <li>• Field Service Management</li>
                <li>• Customer Portal & Self-Service</li>
                <li>• SLA & KPI Management</li>
                <li>• Customer Journey Analytics</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <Zap className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">IT Operations Management</h3>
              <p className="text-indigo font-body mb-4">ITOM suite for event management, orchestration, cloud management, and infrastructure monitoring with predictive analytics.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Event Management & Correlation</li>
                <li>• Infrastructure Monitoring</li>
                <li>• Cloud Management & Optimization</li>
                <li>• Orchestration & Automation</li>
                <li>• Predictive AIOps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Methodology */}
      <section className="py-20 md:py-28 bg-dreh-bg">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title text-indigo uppercase mb-8 text-center">Proven Implementation Methodology</h2>
          <p className="text-center text-grape mb-12 max-w-3xl mx-auto">
            Our structured approach ensures successful ServiceNow deployments with minimal risk, 
            accelerated time-to-value, and sustainable long-term success.
          </p>
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">1</div>
              <h4 className="font-head text-grape uppercase mb-3">Strategic Assessment</h4>
              <p className="text-sm text-indigo">Current state analysis, requirements gathering, stakeholder alignment, and strategic roadmap development</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">2</div>
              <h4 className="font-head text-grape uppercase mb-3">Solution Design</h4>
              <p className="text-sm text-indigo">Process design, technical architecture, integration planning, and governance framework establishment</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">3</div>
              <h4 className="font-head text-grape uppercase mb-3">Build & Configure</h4>
              <p className="text-sm text-indigo">Platform configuration, customization, workflow development, and third-party integrations</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">4</div>
              <h4 className="font-head text-grape uppercase mb-3">Testing & Validation</h4>
              <p className="text-sm text-indigo">Comprehensive testing, UAT coordination, performance optimization, and security validation</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">5</div>
              <h4 className="font-head text-grape uppercase mb-3">Deploy & Optimize</h4>
              <p className="text-sm text-indigo">Production deployment, user training, change management, and continuous improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title text-indigo uppercase mb-12 text-center">Advanced Platform Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender">
              <h3 className="font-head text-xl text-grape uppercase mb-6">Core Platform Features</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Workflow Automation</h4>
                  <p className="text-sm text-indigo">Advanced workflow engine with business rules, approvals, notifications, and intelligent routing capabilities</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Integration Hub</h4>
                  <p className="text-sm text-indigo">Enterprise integration platform with 500+ pre-built connectors, ETL capabilities, and API orchestration</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Performance Analytics</h4>
                  <p className="text-sm text-indigo">Real-time dashboards, KPI tracking, predictive analytics, and automated reporting for data-driven decisions</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Mobile Applications</h4>
                  <p className="text-sm text-indigo">Native mobile apps for field service, approvals, and self-service with offline capabilities</p>
                </div>
              </div>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender">
              <h3 className="font-head text-xl text-grape uppercase mb-6">AI & Automation Features</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Virtual Agent</h4>
                  <p className="text-sm text-indigo">AI-powered chatbots for automated ticket resolution, knowledge search, and user assistance</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Predictive Intelligence</h4>
                  <p className="text-sm text-indigo">ML-driven insights for proactive issue resolution, capacity planning, and performance optimization</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Natural Language Processing</h4>
                  <p className="text-sm text-indigo">Automated text analysis, sentiment detection, and intelligent categorization of tickets and requests</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Robotic Process Automation</h4>
                  <p className="text-sm text-indigo">Integrated RPA capabilities for automated data entry, system interactions, and process execution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Specializations */}
      <section className="py-20 md:py-28 bg-dreh-bg">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title text-indigo uppercase mb-12 text-center">Industry-Specific Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <Shield className="mx-auto mb-4 text-violet" size={48} />
              <h4 className="font-head text-grape uppercase mb-4">Financial Services</h4>
              <ul className="text-sm text-indigo text-left space-y-2">
                <li>• Regulatory compliance automation</li>
                <li>• Risk management workflows</li>
                <li>• Audit trail & documentation</li>
                <li>• Customer onboarding processes</li>
                <li>• Fraud detection integration</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <Users className="mx-auto mb-4 text-violet" size={48} />
              <h4 className="font-head text-grape uppercase mb-4">Healthcare</h4>
              <ul className="text-sm text-indigo text-left space-y-2">
                <li>• HIPAA compliance workflows</li>
                <li>• Patient data security</li>
                <li>• Clinical IT support</li>
                <li>• Medical equipment management</li>
                <li>• Healthcare service delivery</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <Zap className="mx-auto mb-4 text-violet" size={48} />
              <h4 className="font-head text-grape uppercase mb-4">Manufacturing</h4>
              <ul className="text-sm text-indigo text-left space-y-2">
                <li>• Asset management systems</li>
                <li>• Maintenance workflows</li>
                <li>• Supply chain integration</li>
                <li>• Quality management processes</li>
                <li>• Production support systems</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <Database className="mx-auto mb-4 text-violet" size={48} />
              <h4 className="font-head text-grape uppercase mb-4">Government</h4>
              <ul className="text-sm text-indigo text-left space-y-2">
                <li>• Citizen service delivery</li>
                <li>• Public sector case management</li>
                <li>• Compliance reporting</li>
                <li>• Inter-agency workflows</li>
                <li>• Security & access controls</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title text-indigo uppercase mb-8 text-center">Proven Implementation Results</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-dreh-bg p-8 rounded-lg border border-lavender">
              <h3 className="font-head text-xl text-grape uppercase mb-6 text-center">Operational Excellence</h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-head text-violet mb-2">40%</div>
                  <p className="text-indigo text-sm">Faster incident resolution</p>
                </div>
                <div>
                  <div className="text-4xl font-head text-violet mb-2">65%</div>
                  <p className="text-indigo text-sm">Reduction in manual tasks</p>
                </div>
                <div>
                  <div className="text-4xl font-head text-violet mb-2">90%</div>
                  <p className="text-indigo text-sm">User satisfaction rate</p>
                </div>
                <div>
                  <div className="text-4xl font-head text-violet mb-2">3 mos</div>
                  <p className="text-indigo text-sm">Average implementation time</p>
                </div>
              </div>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg border border-lavender">
              <h3 className="font-head text-xl text-grape uppercase mb-6 text-center">Certified Expertise</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-head text-violet mb-2">CSA</div>
                  <p className="text-indigo text-xs">Certified System Administrator</p>
                </div>
                <div>
                  <div className="text-2xl font-head text-violet mb-2">CAD</div>
                  <p className="text-indigo text-xs">Certified Application Developer</p>
                </div>
                <div>
                  <div className="text-2xl font-head text-violet mb-2">CIS</div>
                  <p className="text-indigo text-xs">Certified Implementation Specialist</p>
                </div>
                <div>
                  <div className="text-2xl font-head text-violet mb-2">CTS</div>
                  <p className="text-indigo text-xs">Certified Technical Specialist</p>
                </div>
                <div>
                  <div className="text-2xl font-head text-violet mb-2">CTM</div>
                  <p className="text-indigo text-xs">Certified Team Manager</p>
                </div>
                <div>
                  <div className="text-2xl font-head text-violet mb-2">Elite</div>
                  <p className="text-indigo text-xs">ServiceNow Elite Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Drehill */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-indigo to-violet text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title uppercase mb-12 text-center">Why Drehill for ServiceNow</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <CheckCircle className="mx-auto mb-4 text-lavender" size={48} />
              <h3 className="font-head text-xl uppercase mb-4">Elite Partner Status</h3>
              <p className="text-lavender/90">ServiceNow Elite Partner with 200+ successful implementations and the highest level of platform expertise and certifications</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-4 text-lavender" size={48} />
              <h3 className="font-head text-xl uppercase mb-4">Accelerated Delivery</h3>
              <p className="text-lavender/90">Proven methodologies and accelerators that reduce implementation time by 40% while maintaining quality and best practices</p>
            </div>
            <div className="text-center">
              <Target className="mx-auto mb-4 text-lavender" size={48} />
              <h3 className="font-head text-xl uppercase mb-4">Business Outcomes Focus</h3>
              <p className="text-lavender/90">ROI-driven approach with clear success metrics, change management, and long-term value realization strategies</p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="font-head text-xl uppercase mb-6">Ready to Transform Operations?</h3>
            <p className="text-xl text-lavender/90 mb-8 max-w-2xl mx-auto">
              Streamline processes, enhance user experience, and drive operational excellence with ServiceNow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-10 py-4 rounded bg-white text-violet font-head uppercase text-lg shadow-lg hover:bg-lavender/20 hover:text-white border-2 border-white transition-all duration-300"
              >
                Get ServiceNow Assessment
              </a>
              <a
                href="/projects"
                className="px-10 py-4 rounded border-2 border-white text-white font-head uppercase text-lg hover:bg-white hover:text-violet transition-all duration-300"
              >
                View Success Stories
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

export default ServiceNow;
