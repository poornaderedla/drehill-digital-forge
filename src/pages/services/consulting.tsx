
import React from "react";
import { SEO } from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StickyCTA from "../../components/StickyCTA";
import { BookUser, Globe, TrendingUp, Users, Target, Lightbulb, Shield, Briefcase, BarChart, Zap } from "lucide-react";

const Consulting = () => (
  <>
    <SEO
      title="Enterprise Consulting Services | Digital Transformation | Strategy | Drehill"
      description="Leading enterprise consulting firm specializing in digital transformation, strategy, exports, technology integration. Drive measurable business outcomes with our expert consultants."
    />
    <Navbar />
    <main className="w-full min-h-screen bg-white">
      <section className="bg-dreh-bg py-16 md:py-24 border-b border-lavender">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4 text-5xl text-violet">
              <BookUser />
              <span className="font-head uppercase text-violet text-headline">Consulting Excellence</span>
            </div>
            <p className="font-body text-xl text-indigo mb-6 leading-relaxed">
              Drive transformational growth with our strategic consulting services. As enterprise advisors, 
              we deliver actionable insights, digital transformation roadmaps, and operational excellence 
              that generate sustainable competitive advantage and measurable ROI.
            </p>
            <div className="bg-violet/10 p-4 rounded-lg mb-6">
              <p className="text-violet font-head uppercase text-sm">Primary Revenue Driver</p>
              <p className="text-indigo text-sm">Our consulting services form the cornerstone of our business, delivering exceptional value to Fortune 500 companies worldwide.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-block px-8 py-4 rounded bg-violet text-white font-head uppercase shadow-lg hover:bg-grape transition text-lg"
              >
                Schedule Strategic Consultation
              </a>
              <a
                href="/projects"
                className="inline-block px-8 py-4 rounded border-2 border-violet text-violet font-head uppercase hover:bg-lavender/60 transition text-lg"
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
      </section>

      {/* Core Consulting Services */}
      <section className="container max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-head text-title text-indigo uppercase mb-4 text-center">Our Consulting Portfolio</h2>
        <p className="text-center text-indigo mb-12 max-w-4xl mx-auto">
          Comprehensive consulting services that drive business transformation, operational excellence, and sustainable growth across industries and markets.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Target className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">Digital Transformation Strategy</h3>
            <p className="text-indigo font-body mb-4">End-to-end digital transformation roadmaps, technology assessment, change management, and digital maturity frameworks.</p>
            <ul className="text-sm text-indigo space-y-1">
              <li>• Digital maturity assessment and gap analysis</li>
              <li>• Technology roadmap and architecture design</li>
              <li>• Change management and adoption strategies</li>
              <li>• ROI modeling and business case development</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Globe className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">International Trade & Export Consulting</h3>
            <p className="text-indigo font-body mb-4">Global market entry, export strategy, regulatory compliance, and international business development expertise.</p>
            <ul className="text-sm text-indigo space-y-1">
              <li>• Market research and competitive analysis</li>
              <li>• Export documentation and compliance</li>
              <li>• Trade finance and risk management</li>
              <li>• International partnership strategies</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <TrendingUp className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">Business Strategy & Growth</h3>
            <p className="text-indigo font-body mb-4">Strategic planning, market expansion, competitive positioning, and sustainable growth strategies for enterprises.</p>
            <ul className="text-sm text-indigo space-y-1">
              <li>• Strategic planning and execution</li>
              <li>• Market expansion and penetration</li>
              <li>• Competitive intelligence and positioning</li>
              <li>• M&A advisory and due diligence</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Users className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">Organizational Excellence</h3>
            <p className="text-indigo font-body mb-4">Organizational design, leadership development, culture transformation, and performance optimization initiatives.</p>
            <ul className="text-sm text-indigo space-y-1">
              <li>• Organizational restructuring and design</li>
              <li>• Leadership development programs</li>
              <li>• Culture transformation initiatives</li>
              <li>• Performance management systems</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Lightbulb className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">Innovation & Technology Advisory</h3>
            <p className="text-indigo font-body mb-4">Innovation strategy, emerging technology assessment, R&D optimization, and technology commercialization.</p>
            <ul className="text-sm text-indigo space-y-1">
              <li>• Innovation framework development</li>
              <li>• Technology scouting and assessment</li>
              <li>• R&D portfolio optimization</li>
              <li>• Intellectual property strategy</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Shield className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">Risk Management & Compliance</h3>
            <p className="text-indigo font-body mb-4">Enterprise risk assessment, regulatory compliance, cybersecurity strategy, and business continuity planning.</p>
            <ul className="text-sm text-indigo space-y-1">
              <li>• Enterprise risk assessment and mitigation</li>
              <li>• Regulatory compliance frameworks</li>
              <li>• Cybersecurity strategy and governance</li>
              <li>• Business continuity and disaster recovery</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Briefcase className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">Financial Advisory & Restructuring</h3>
            <p className="text-indigo font-body mb-4">Financial planning, capital optimization, restructuring, and investment strategy for sustainable growth.</p>
            <ul className="text-sm text-indigo space-y-1">
              <li>• Financial planning and analysis</li>
              <li>• Capital structure optimization</li>
              <li>• Corporate restructuring advisory</li>
              <li>• Investment strategy and portfolio management</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <BarChart className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">Data Analytics & Business Intelligence</h3>
            <p className="text-indigo font-body mb-4">Advanced analytics, business intelligence, data strategy, and AI-driven insights for informed decision-making.</p>
            <ul className="text-sm text-indigo space-y-1">
              <li>• Data strategy and governance</li>
              <li>• Advanced analytics and modeling</li>
              <li>• Business intelligence platforms</li>
              <li>• AI-driven insights and automation</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Zap className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">Operations Excellence</h3>
            <p className="text-indigo font-body mb-4">Process optimization, lean methodologies, supply chain excellence, and operational transformation.</p>
            <ul className="text-sm text-indigo space-y-1">
              <li>• Process optimization and reengineering</li>
              <li>• Lean Six Sigma implementation</li>
              <li>• Supply chain optimization</li>
              <li>• Quality management systems</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Target className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">Sustainability & ESG Consulting</h3>
            <p className="text-indigo font-body mb-4">Environmental, Social, and Governance (ESG) strategy, sustainability reporting, and responsible business practices.</p>
            <ul className="text-sm text-indigo space-y-1">
              <li>• ESG strategy and implementation</li>
              <li>• Sustainability reporting and metrics</li>
              <li>• Carbon footprint assessment</li>
              <li>• Responsible supply chain practices</li>
            </ul>
          </div>
        </div>

        <h2 className="font-head text-title text-indigo uppercase mb-8">Our Consulting Methodology</h2>
        <div className="grid md:grid-cols-5 gap-4 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">1</div>
            <h4 className="font-head text-grape uppercase mb-2 text-sm">Discovery</h4>
            <p className="text-xs text-indigo">Comprehensive business assessment, stakeholder interviews, current state analysis</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">2</div>
            <h4 className="font-head text-grape uppercase mb-2 text-sm">Strategy</h4>
            <p className="text-xs text-indigo">Strategic framework development, solution design, roadmap creation</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">3</div>
            <h4 className="font-head text-grape uppercase mb-2 text-sm">Planning</h4>
            <p className="text-xs text-indigo">Implementation planning, resource allocation, risk mitigation strategies</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">4</div>
            <h4 className="font-head text-grape uppercase mb-2 text-sm">Execution</h4>
            <p className="text-xs text-indigo">Solution implementation, change management, progress monitoring</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">5</div>
            <h4 className="font-head text-grape uppercase mb-2 text-sm">Optimization</h4>
            <p className="text-xs text-indigo">Performance measurement, continuous improvement, knowledge transfer</p>
          </div>
        </div>

        <h2 className="font-head text-title text-indigo uppercase mb-8">Industry Expertise</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Financial Services</h4>
            <p className="text-sm text-indigo">Banking, insurance, fintech, wealth management</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Healthcare</h4>
            <p className="text-sm text-indigo">Pharmaceuticals, medical devices, healthcare IT</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Manufacturing</h4>
            <p className="text-sm text-indigo">Automotive, aerospace, industrial equipment</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Technology</h4>
            <p className="text-sm text-indigo">Software, hardware, telecommunications, SaaS</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Energy</h4>
            <p className="text-sm text-indigo">Oil & gas, renewable energy, utilities</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Retail</h4>
            <p className="text-sm text-indigo">E-commerce, consumer goods, fashion</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Government</h4>
            <p className="text-sm text-indigo">Federal, state, local, defense contractors</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Education</h4>
            <p className="text-sm text-indigo">Higher education, K-12, online learning</p>
          </div>
        </div>

        <div className="bg-dreh-bg p-8 rounded-lg border border-lavender mb-16">
          <h3 className="font-head text-xl text-grape uppercase mb-6 text-center">Global Reach & Impact</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-head text-violet mb-2">50+</div>
              <p className="text-indigo">Countries served</p>
            </div>
            <div>
              <div className="text-3xl font-head text-violet mb-2">500+</div>
              <p className="text-indigo">Projects delivered</p>
            </div>
            <div>
              <div className="text-3xl font-head text-violet mb-2">$5B+</div>
              <p className="text-indigo">Client value generated</p>
            </div>
            <div>
              <div className="text-3xl font-head text-violet mb-2">98%</div>
              <p className="text-indigo">Client retention rate</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-card border border-lavender mb-16">
          <h3 className="font-head text-xl text-grape uppercase mb-6 text-center">Why Choose Drehill Consulting</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-head text-grape uppercase mb-3">Proven Track Record</h4>
              <ul className="space-y-2 text-sm text-indigo">
                <li>• 15+ years of consulting excellence</li>
                <li>• Fortune 500 client portfolio</li>
                <li>• Industry-leading success rates</li>
                <li>• Award-winning transformations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-head text-grape uppercase mb-3">Expert Team</h4>
              <ul className="space-y-2 text-sm text-indigo">
                <li>• MBA and PhD-level consultants</li>
                <li>• Industry-specific expertise</li>
                <li>• Global delivery capabilities</li>
                <li>• Continuous learning culture</li>
              </ul>
            </div>
            <div>
              <h4 className="font-head text-grape uppercase mb-3">Innovation Focus</h4>
              <ul className="space-y-2 text-sm text-indigo">
                <li>• Cutting-edge methodologies</li>
                <li>• AI-powered insights</li>
                <li>• Digital-first approach</li>
                <li>• Emerging technology expertise</li>
              </ul>
            </div>
            <div>
              <h4 className="font-head text-grape uppercase mb-3">Results Driven</h4>
              <ul className="space-y-2 text-sm text-indigo">
                <li>• Measurable ROI guarantees</li>
                <li>• Performance-based contracts</li>
                <li>• Continuous monitoring</li>
                <li>• Long-term partnerships</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-violet/5 p-8 rounded-lg border-2 border-violet/20">
          <h3 className="font-head text-xl text-violet uppercase mb-4 text-center">Ready to Transform Your Business?</h3>
          <p className="text-center text-indigo mb-6">
            Partner with Drehill's consulting experts to unlock your organization's full potential. 
            Schedule a strategic consultation to discuss your unique challenges and opportunities.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="inline-block px-10 py-4 rounded bg-violet text-white font-head uppercase shadow-lg hover:bg-grape transition text-lg"
            >
              Schedule Executive Consultation
            </a>
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

export default Consulting;
