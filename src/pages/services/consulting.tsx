
import React from "react";
import { SEO } from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StickyCTA from "../../components/StickyCTA";
import { BookUser, Globe, TrendingUp, Users, Target, Lightbulb, Shield, Briefcase, BarChart, Zap, Ship, DollarSign, CheckCircle, Clock } from "lucide-react";

const Consulting = () => (
  <>
    <SEO
      title="Enterprise Consulting Services | Digital Transformation | Strategy | EXIM | Drehill"
      description="Leading enterprise consulting firm specializing in digital transformation, strategy, EXIM & international trade, technology integration. Drive measurable business outcomes with Fortune 500 advisors delivering $2.8B+ in client value."
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
                <BookUser className="text-6xl" />
                <h1 className="font-head uppercase text-white text-display">Consulting Excellence</h1>
              </div>
              <p className="font-body text-xl text-lavender/90 mb-6 leading-relaxed">
                Transform your enterprise with strategic consulting services that deliver sustainable competitive advantage. 
                Our Fortune 500 advisors provide data-driven insights, digital transformation roadmaps, EXIM expertise, 
                and operational excellence frameworks that generate measurable ROI and accelerate growth.
              </p>
              <div className="bg-white/10 p-4 rounded-lg mb-6 border border-white/20">
                <p className="text-white font-head uppercase text-sm mb-1">Primary Revenue Driver</p>
                <p className="text-lavender/90 text-sm">Consulting represents 78% of our revenue, serving 200+ global enterprises with $2.8B+ in value delivered since 2009.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-head text-white mb-1">850+</div>
                  <div className="text-lavender/80 text-sm uppercase">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-head text-white mb-1">65+</div>
                  <div className="text-lavender/80 text-sm uppercase">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-head text-white mb-1">$2.8B+</div>
                  <div className="text-lavender/80 text-sm uppercase">Client Value</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-head text-white mb-1">96%</div>
                  <div className="text-lavender/80 text-sm uppercase">Satisfaction Rate</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 rounded bg-white text-violet font-head uppercase shadow-lg hover:bg-lavender/20 hover:text-white border-2 border-white transition text-lg"
                >
                  Schedule Executive Consultation
                </a>
                <a
                  href="/projects"
                  className="inline-block px-8 py-4 rounded border-2 border-white text-white font-head uppercase hover:bg-white hover:text-violet transition text-lg"
                >
                  View Transformation Cases
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80"
                alt="Strategic Consulting Session"
                className="w-full rounded-lg shadow-card border border-lavender object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Consulting Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-head text-title text-indigo uppercase mb-6">Comprehensive Consulting Portfolio</h2>
            <p className="text-lg text-grape max-w-3xl mx-auto">
              Our consulting practice spans 12 specialized domains, delivering transformational outcomes across industries. 
              Each engagement is backed by proven methodologies, industry expertise, and measurable success metrics.
            </p>
          </div>
          
          {/* Featured Consulting Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <Target className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">Digital Transformation Strategy</h3>
              <p className="text-indigo font-body mb-4">Comprehensive digital maturity assessments, transformation roadmaps, and change management strategies that modernize operations and accelerate innovation.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Digital maturity assessment & gap analysis</li>
                <li>• Technology architecture & integration strategy</li>
                <li>• Change management & adoption frameworks</li>
                <li>• ROI modeling & business case development</li>
                <li>• Cloud migration & infrastructure optimization</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <Ship className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">EXIM & International Trade</h3>
              <p className="text-indigo font-body mb-4">Export-Import consulting, trade finance, regulatory compliance, and global market entry strategies for sustainable international expansion.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Export documentation & customs compliance</li>
                <li>• Trade finance & letters of credit optimization</li>
                <li>• International market research & entry strategy</li>
                <li>• Foreign exchange risk management</li>
                <li>• Cross-border supply chain optimization</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <TrendingUp className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">Strategic Business Consulting</h3>
              <p className="text-indigo font-body mb-4">Corporate strategy development, market expansion planning, competitive positioning, and growth acceleration through data-driven strategic frameworks.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Strategic planning & execution roadmaps</li>
                <li>• Market expansion & penetration strategies</li>
                <li>• Competitive intelligence & positioning</li>
                <li>• Portfolio optimization & divestiture advisory</li>
                <li>• Blue ocean strategy development</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <Users className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">Organizational Excellence</h3>
              <p className="text-indigo font-body mb-4">Organizational design, leadership development, culture transformation, and high-performance team building for sustainable organizational capability.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Organizational restructuring & design</li>
                <li>• Executive coaching & leadership development</li>
                <li>• Culture transformation & engagement</li>
                <li>• Talent management & succession planning</li>
                <li>• Performance management system design</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <Zap className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">Operations Excellence</h3>
              <p className="text-indigo font-body mb-4">Process optimization, lean manufacturing, supply chain excellence, and operational transformation for sustainable competitive advantage.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Process reengineering & optimization</li>
                <li>• Lean Six Sigma implementation</li>
                <li>• Supply chain design & optimization</li>
                <li>• Quality management system certification</li>
                <li>• Manufacturing excellence & Industry 4.0</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <BarChart className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">Data Analytics & Business Intelligence</h3>
              <p className="text-indigo font-body mb-4">Advanced analytics strategy, data governance, business intelligence platforms, and AI-driven insights for evidence-based decision making.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Data strategy & governance frameworks</li>
                <li>• Advanced analytics & predictive modeling</li>
                <li>• Business intelligence platform selection</li>
                <li>• AI/ML strategy & implementation roadmaps</li>
                <li>• Data monetization & productization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Methodology */}
      <section className="py-20 md:py-28 bg-dreh-bg">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title text-indigo uppercase mb-8 text-center">Proven Consulting Methodology</h2>
          <p className="text-center text-grape mb-12 max-w-3xl mx-auto">
            Our systematic approach ensures successful consulting engagements with measurable outcomes, 
            sustainable change, and long-term value creation for our clients.
          </p>
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">1</div>
              <h4 className="font-head text-grape uppercase mb-3">Discovery & Assessment</h4>
              <p className="text-sm text-indigo">Comprehensive business assessment, stakeholder interviews, current state analysis, and baseline establishment</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">2</div>
              <h4 className="font-head text-grape uppercase mb-3">Strategy Development</h4>
              <p className="text-sm text-indigo">Strategic framework development, solution design, best practice benchmarking, and roadmap creation</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">3</div>
              <h4 className="font-head text-grape uppercase mb-3">Implementation Planning</h4>
              <p className="text-sm text-indigo">Detailed implementation planning, resource allocation, risk mitigation, and change management preparation</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">4</div>
              <h4 className="font-head text-grape uppercase mb-3">Execution & Support</h4>
              <p className="text-sm text-indigo">Solution implementation, change management execution, training delivery, and progress monitoring</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">5</div>
              <h4 className="font-head text-grape uppercase mb-3">Optimization & Transfer</h4>
              <p className="text-sm text-indigo">Performance measurement, continuous improvement, knowledge transfer, and sustainable capability building</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title text-indigo uppercase mb-12 text-center">Extended Consulting Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <Lightbulb className="mx-auto mb-4 text-violet" size={40} />
              <h4 className="font-head text-grape uppercase mb-3">Innovation & R&D Strategy</h4>
              <p className="text-sm text-indigo">Innovation frameworks, R&D optimization, technology commercialization, and IP strategy</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <Shield className="mx-auto mb-4 text-violet" size={40} />
              <h4 className="font-head text-grape uppercase mb-3">Risk Management & Governance</h4>
              <p className="text-sm text-indigo">Enterprise risk assessment, regulatory compliance, cybersecurity governance, and business continuity</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <DollarSign className="mx-auto mb-4 text-violet" size={40} />
              <h4 className="font-head text-grape uppercase mb-3">Financial Advisory</h4>
              <p className="text-sm text-indigo">Financial planning, capital optimization, M&A advisory, and corporate restructuring</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <Globe className="mx-auto mb-4 text-violet" size={40} />
              <h4 className="font-head text-grape uppercase mb-3">Sustainability & ESG</h4>
              <p className="text-sm text-indigo">ESG strategy development, sustainability reporting, and responsible business practices</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <Briefcase className="mx-auto mb-4 text-violet" size={40} />
              <h4 className="font-head text-grape uppercase mb-3">Market Entry & Expansion</h4>
              <p className="text-sm text-indigo">Geographic expansion strategies, market entry planning, and go-to-market strategy development</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <Target className="mx-auto mb-4 text-violet" size={40} />
              <h4 className="font-head text-grape uppercase mb-3">Performance Management</h4>
              <p className="text-sm text-indigo">Balanced scorecard development, KPI framework design, and performance measurement systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 md:py-28 bg-dreh-bg">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title text-indigo uppercase mb-12 text-center">Industry Specialization</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <h4 className="font-head text-grape uppercase mb-3">Financial Services & Banking</h4>
              <p className="text-sm text-indigo">Digital banking, fintech innovation, regulatory compliance, risk management</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <h4 className="font-head text-grape uppercase mb-3">Healthcare & Life Sciences</h4>
              <p className="text-sm text-indigo">Digital health, pharmaceuticals, medical devices, clinical operations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <h4 className="font-head text-grape uppercase mb-3">Manufacturing & Industrial</h4>
              <p className="text-sm text-indigo">Industry 4.0, smart manufacturing, supply chain optimization, automation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <h4 className="font-head text-grape uppercase mb-3">Technology & Telecommunications</h4>
              <p className="text-sm text-indigo">Digital transformation, platform strategy, emerging technologies, SaaS</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <h4 className="font-head text-grape uppercase mb-3">Energy & Utilities</h4>
              <p className="text-sm text-indigo">Renewable energy, smart grid, oil & gas digital transformation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <h4 className="font-head text-grape uppercase mb-3">Retail & Consumer Goods</h4>
              <p className="text-sm text-indigo">E-commerce strategy, omnichannel retail, consumer analytics, FMCG</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <h4 className="font-head text-grape uppercase mb-3">Government & Public Sector</h4>
              <p className="text-sm text-indigo">Digital government, citizen services, public policy, smart cities</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <h4 className="font-head text-grape uppercase mb-3">Transportation & Logistics</h4>
              <p className="text-sm text-indigo">Supply chain optimization, logistics automation, fleet management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title text-indigo uppercase mb-8 text-center">Global Impact & Credentials</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-dreh-bg p-8 rounded-lg border border-lavender">
              <h3 className="font-head text-xl text-grape uppercase mb-6 text-center">Proven Track Record</h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-head text-violet mb-2">850+</div>
                  <p className="text-indigo text-sm">Projects completed successfully</p>
                </div>
                <div>
                  <div className="text-4xl font-head text-violet mb-2">65+</div>
                  <p className="text-indigo text-sm">Countries served globally</p>
                </div>
                <div>
                  <div className="text-4xl font-head text-violet mb-2">$2.8B+</div>
                  <p className="text-indigo text-sm">Client value generated</p>
                </div>
                <div>
                  <div className="text-4xl font-head text-violet mb-2">96%</div>
                  <p className="text-indigo text-sm">Client satisfaction rate</p>
                </div>
              </div>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg border border-lavender">
              <h3 className="font-head text-xl text-grape uppercase mb-6 text-center">Why Drehill Stands Apart</h3>
              <div className="space-y-4 text-sm text-indigo">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-violet flex-shrink-0 mt-0.5" size={16} />
                  <span>15+ years of consulting excellence with Fortune 500 client base</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-violet flex-shrink-0 mt-0.5" size={16} />
                  <span>Elite consulting team with top-tier MBA & PhD professionals</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-violet flex-shrink-0 mt-0.5" size={16} />
                  <span>Proprietary methodologies and AI-powered analytics & insights</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-violet flex-shrink-0 mt-0.5" size={16} />
                  <span>Measurable ROI commitments with performance-based fee structures</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-violet flex-shrink-0 mt-0.5" size={16} />
                  <span>Long-term strategic partnerships with success metrics accountability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Drehill */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-indigo to-violet text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title uppercase mb-12 text-center">Transform Your Enterprise Today</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Users className="mx-auto mb-4 text-lavender" size={48} />
              <h3 className="font-head text-xl uppercase mb-4">Elite Consulting Team</h3>
              <p className="text-lavender/90">Ex-McKinsey, BCG, Bain professionals with deep industry expertise and proven track record of transformation success</p>
            </div>
            <div className="text-center">
              <Target className="mx-auto mb-4 text-lavender" size={48} />
              <h3 className="font-head text-xl uppercase mb-4">Results Guarantee</h3>
              <p className="text-lavender/90">Measurable ROI commitments with performance-based fees and real-time progress monitoring for accountability</p>
            </div>
            <div className="text-center">
              <Globe className="mx-auto mb-4 text-lavender" size={48} />
              <h3 className="font-head text-xl uppercase mb-4">Global Reach</h3>
              <p className="text-lavender/90">65+ countries served with local presence and deep understanding of regional markets and regulatory environments</p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="font-head text-xl uppercase mb-6">Ready to Transform Your Enterprise?</h3>
            <p className="text-xl text-lavender/90 mb-8 max-w-2xl mx-auto">
              Join 200+ global enterprises that have transformed their business with Drehill's strategic consulting expertise. 
              Schedule a confidential consultation with our senior partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-10 py-4 rounded bg-white text-violet font-head uppercase text-lg shadow-lg hover:bg-lavender/20 hover:text-white border-2 border-white transition-all duration-300"
              >
                Schedule Executive Consultation
              </a>
              <a
                href="/projects"
                className="px-10 py-4 rounded border-2 border-white text-white font-head uppercase text-lg hover:bg-white hover:text-violet transition-all duration-300"
              >
                View Transformation Success Stories
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

export default Consulting;
