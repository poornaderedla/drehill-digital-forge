
import React from "react";
import { SEO } from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StickyCTA from "../../components/StickyCTA";
import { BookUser, Globe, TrendingUp, Users, Target, Lightbulb, Shield, Briefcase, BarChart, Zap, Ship, DollarSign } from "lucide-react";

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
              Transform your enterprise with strategic consulting services that deliver sustainable competitive advantage. 
              Our Fortune 500 advisors provide data-driven insights, digital transformation roadmaps, and operational 
              excellence frameworks that generate measurable ROI and accelerate growth.
            </p>
            <div className="bg-violet/10 p-4 rounded-lg mb-6">
              <p className="text-violet font-head uppercase text-sm">Primary Revenue Driver</p>
              <p className="text-indigo text-sm">Consulting services represent 78% of our revenue, serving 200+ global enterprises with $2.8B+ in value delivered since 2009.</p>
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
        <h2 className="font-head text-title text-indigo uppercase mb-4 text-center">Comprehensive Consulting Portfolio</h2>
        <p className="text-center text-indigo mb-12 max-w-4xl mx-auto">
          Our consulting practice spans 12 specialized domains, delivering transformational outcomes across industries. 
          Each engagement is backed by proven methodologies, industry expertise, and measurable success metrics.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
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
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
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
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
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
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
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
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Lightbulb className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">Innovation & R&D Strategy</h3>
            <p className="text-indigo font-body mb-4">Innovation frameworks, R&D portfolio optimization, technology commercialization, and intellectual property strategy for competitive differentiation.</p>
            <ul className="text-sm text-indigo space-y-1">
              <li>• Innovation ecosystem development</li>
              <li>• Technology scouting & trend analysis</li>
              <li>• R&D portfolio & pipeline optimization</li>
              <li>• IP strategy & patent portfolio management</li>
              <li>• Open innovation & partnership strategies</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Shield className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">Risk Management & Governance</h3>
            <p className="text-indigo font-body mb-4">Enterprise risk assessment, regulatory compliance frameworks, cybersecurity governance, and business continuity planning for operational resilience.</p>
            <ul className="text-sm text-indigo space-y-1">
              <li>• Enterprise risk assessment & mitigation</li>
              <li>• Regulatory compliance & audit preparation</li>
              <li>• Cybersecurity strategy & governance</li>
              <li>• Business continuity & disaster recovery</li>
              <li>• Internal controls & SOX compliance</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <DollarSign className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">Financial Advisory & Restructuring</h3>
            <p className="text-indigo font-body mb-4">Financial planning, capital optimization, merger & acquisition advisory, and corporate restructuring for enhanced shareholder value creation.</p>
            <ul className="text-sm text-indigo space-y-1">
              <li>• Financial planning & analysis optimization</li>
              <li>• Capital structure & financing strategy</li>
              <li>• M&A advisory & due diligence</li>
              <li>• Corporate restructuring & turnaround</li>
              <li>• Valuation & investment banking services</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
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
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
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
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Globe className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">Sustainability & ESG Strategy</h3>
            <p className="text-indigo font-body mb-4">Environmental, Social, and Governance strategy development, sustainability reporting, carbon footprint management, and responsible business practices.</p>
            <ul className="text-sm text-indigo space-y-1">
              <li>• ESG strategy & materiality assessment</li>
              <li>• Sustainability reporting & metrics</li>
              <li>• Carbon footprint & net-zero strategies</li>
              <li>• Circular economy & waste reduction</li>
              <li>• Stakeholder engagement & communication</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Briefcase className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">Market Entry & Expansion</h3>
            <p className="text-indigo font-body mb-4">Geographic expansion strategies, market entry planning, competitive analysis, and go-to-market strategy development for sustainable growth.</p>
            <ul className="text-sm text-indigo space-y-1">
              <li>• Market research & opportunity assessment</li>
              <li>• Geographic expansion strategy</li>
              <li>• Go-to-market & channel strategy</li>
              <li>• Joint venture & partnership structuring</li>
              <li>• Regulatory & compliance navigation</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Target className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">Performance Management & KPI</h3>
            <p className="text-indigo font-body mb-4">Balanced scorecard development, KPI framework design, performance measurement systems, and dashboard creation for strategic alignment.</p>
            <ul className="text-sm text-indigo space-y-1">
              <li>• Balanced scorecard & KPI framework</li>
              <li>• Performance measurement system design</li>
              <li>• Executive dashboard & reporting</li>
              <li>• Strategic alignment & cascading</li>
              <li>• Incentive compensation design</li>
            </ul>
          </div>
        </div>

        <h2 className="font-head text-title text-indigo uppercase mb-8">Proven Consulting Methodology</h2>
        <div className="grid md:grid-cols-5 gap-4 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">1</div>
            <h4 className="font-head text-grape uppercase mb-2 text-sm">Discovery & Assessment</h4>
            <p className="text-xs text-indigo">Comprehensive business assessment, stakeholder interviews, current state analysis, and baseline establishment</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">2</div>
            <h4 className="font-head text-grape uppercase mb-2 text-sm">Strategy Development</h4>
            <p className="text-xs text-indigo">Strategic framework development, solution design, best practice benchmarking, and roadmap creation</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">3</div>
            <h4 className="font-head text-grape uppercase mb-2 text-sm">Implementation Planning</h4>
            <p className="text-xs text-indigo">Detailed implementation planning, resource allocation, risk mitigation, and change management preparation</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">4</div>
            <h4 className="font-head text-grape uppercase mb-2 text-sm">Execution & Support</h4>
            <p className="text-xs text-indigo">Solution implementation, change management execution, training delivery, and progress monitoring</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">5</div>
            <h4 className="font-head text-grape uppercase mb-2 text-sm">Optimization & Transfer</h4>
            <p className="text-xs text-indigo">Performance measurement, continuous improvement, knowledge transfer, and sustainable capability building</p>
          </div>
        </div>

        <h2 className="font-head text-title text-indigo uppercase mb-8">Industry Specialization</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Financial Services</h4>
            <p className="text-sm text-indigo">Banking, insurance, asset management, fintech</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Healthcare & Life Sciences</h4>
            <p className="text-sm text-indigo">Pharmaceuticals, medical devices, biotechnology</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Manufacturing</h4>
            <p className="text-sm text-indigo">Automotive, aerospace, industrial equipment</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Technology & Telecom</h4>
            <p className="text-sm text-indigo">Software, hardware, telecommunications, SaaS</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Energy & Utilities</h4>
            <p className="text-sm text-indigo">Oil & gas, renewable energy, power generation</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Consumer & Retail</h4>
            <p className="text-sm text-indigo">E-commerce, FMCG, fashion, luxury goods</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Public Sector</h4>
            <p className="text-sm text-indigo">Government, defense, public utilities</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Transportation</h4>
            <p className="text-sm text-indigo">Logistics, aviation, shipping, rail</p>
          </div>
        </div>

        <div className="bg-dreh-bg p-8 rounded-lg border border-lavender mb-16">
          <h3 className="font-head text-xl text-grape uppercase mb-6 text-center">Global Impact & Credentials</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-head text-violet mb-2">65+</div>
              <p className="text-indigo">Countries served</p>
            </div>
            <div>
              <div className="text-3xl font-head text-violet mb-2">850+</div>
              <p className="text-indigo">Projects completed</p>
            </div>
            <div>
              <div className="text-3xl font-head text-violet mb-2">$2.8B+</div>
              <p className="text-indigo">Client value generated</p>
            </div>
            <div>
              <div className="text-3xl font-head text-violet mb-2">96%</div>
              <p className="text-indigo">Client satisfaction rate</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-card border border-lavender mb-16">
          <h3 className="font-head text-xl text-grape uppercase mb-6 text-center">Why Drehill Stands Apart</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-head text-grape uppercase mb-3">Proven Expertise</h4>
              <ul className="space-y-2 text-sm text-indigo">
                <li>• 15+ years of consulting excellence</li>
                <li>• Fortune 500 & Global 2000 client base</li>
                <li>• 92% project success rate</li>
                <li>• Industry-recognized thought leadership</li>
                <li>• Multiple consulting awards & certifications</li>
              </ul>
            </div>
            <div>
              <h4 className="font-head text-grape uppercase mb-3">Elite Consulting Team</h4>
              <ul className="space-y-2 text-sm text-indigo">
                <li>• Top-tier MBA & PhD consultants</li>
                <li>• Ex-McKinsey, BCG, Bain professionals</li>
                <li>• Deep industry & functional expertise</li>
                <li>• Global delivery with local presence</li>
                <li>• Continuous learning & certification</li>
              </ul>
            </div>
            <div>
              <h4 className="font-head text-grape uppercase mb-3">Innovation Leadership</h4>
              <ul className="space-y-2 text-sm text-indigo">
                <li>• Proprietary consulting methodologies</li>
                <li>• AI-powered analytics & insights</li>
                <li>• Digital-first transformation approach</li>
                <li>• Emerging technology expertise</li>
                <li>• Research & development investment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-head text-grape uppercase mb-3">Results Guarantee</h4>
              <ul className="space-y-2 text-sm text-indigo">
                <li>• Measurable ROI commitments</li>
                <li>• Performance-based fee structures</li>
                <li>• Real-time progress monitoring</li>
                <li>• Long-term strategic partnerships</li>
                <li>• Success metrics accountability</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-violet/5 p-8 rounded-lg border-2 border-violet/20">
          <h3 className="font-head text-xl text-violet uppercase mb-4 text-center">Transform Your Enterprise Today</h3>
          <p className="text-center text-indigo mb-6">
            Join 200+ global enterprises that have transformed their business with Drehill's strategic consulting expertise. 
            Schedule a confidential consultation with our senior partners to explore your transformation opportunities.
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
