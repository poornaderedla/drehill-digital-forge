
import React from "react";
import { SEO } from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StickyCTA from "../../components/StickyCTA";
import { 
  Users, 
  Target, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  GitBranch,
  Clock,
  Shield,
  Lightbulb,
  Workflow
} from "lucide-react";

const agileMethodologies = [
  {
    icon: <Users className="w-12 h-12" />,
    title: "SCRUM",
    description: "Iterative framework for managing product development with defined roles, events, and artifacts.",
    features: ["Sprint Planning", "Daily Standups", "Sprint Reviews", "Retrospectives", "Product Backlog Management"],
    benefits: "Improved team collaboration, faster delivery cycles, enhanced product quality"
  },
  {
    icon: <GitBranch className="w-12 h-12" />,
    title: "SAFe (Scaled Agile)",
    description: "Enterprise-scale agile framework for large organizations managing complex software development.",
    features: ["Program Increment Planning", "Agile Release Trains", "Portfolio Management", "Value Stream Mapping"],
    benefits: "Enterprise alignment, faster time-to-market, improved quality and productivity"
  },
  {
    icon: <BarChart3 className="w-12 h-12" />,
    title: "KANBAN",
    description: "Visual workflow management method that helps teams visualize work and optimize flow.",
    features: ["Visual Board Management", "Work in Progress Limits", "Flow Metrics", "Continuous Improvement"],
    benefits: "Enhanced visibility, reduced waste, improved flow efficiency"
  },
  {
    icon: <Workflow className="w-12 h-12" />,
    title: "Lean Agile",
    description: "Combination of Lean and Agile principles focusing on value delivery and waste elimination.",
    features: ["Value Stream Analysis", "Continuous Delivery", "DevOps Integration", "Lean Portfolio Management"],
    benefits: "Faster value delivery, reduced costs, improved customer satisfaction"
  }
];

const transformationServices = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Agile Assessment & Strategy",
    description: "Comprehensive evaluation of current state and development of tailored agile transformation roadmap."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Formation & Training",
    description: "Building high-performing agile teams with comprehensive training and coaching programs."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Agile Coaching & Mentoring",
    description: "Ongoing support and guidance to ensure successful adoption and continuous improvement."
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Cultural Transformation",
    description: "Fostering agile mindset and cultural change across the organization."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Metrics & Performance Tracking",
    description: "Implementing agile metrics and KPIs to measure progress and drive continuous improvement."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "DevOps Integration",
    description: "Seamless integration of development and operations for continuous delivery."
  }
];

const transformationSteps = [
  {
    step: "01",
    title: "Current State Assessment",
    description: "Comprehensive evaluation of existing processes, team dynamics, and organizational readiness for agile transformation."
  },
  {
    step: "02",
    title: "Strategy & Roadmap Development",
    description: "Creating customized transformation strategy with clear milestones, timelines, and success criteria."
  },
  {
    step: "03",
    title: "Pilot Implementation",
    description: "Starting with select teams to validate approach, gather feedback, and refine processes before scaling."
  },
  {
    step: "04",
    title: "Organization-wide Rollout",
    description: "Systematic deployment across the organization with continuous support and adjustment."
  },
  {
    step: "05",
    title: "Continuous Improvement",
    description: "Ongoing optimization, coaching, and refinement to ensure sustained agile excellence."
  }
];

const industryStats = [
  { number: "85%", label: "Faster Time-to-Market" },
  { number: "70%", label: "Improved Team Productivity" },
  { number: "60%", label: "Reduced Development Costs" },
  { number: "90%", label: "Enhanced Customer Satisfaction" }
];

const AgileTransformation = () => (
  <>
    <SEO
      title="Agile Consulting & Transformation | Drehill Private Limited"
      description="Transform your organization with expert Agile consulting covering SCRUM, SAFe, KANBAN, and enterprise-scale agile methodologies."
    />
    <Navbar />
    <main className="w-full min-h-screen bg-dreh-bg">
      {/* Hero Section */}
      <section className="py-16 md:py-28 bg-gradient-to-br from-violet to-grape text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="font-head text-display text-white uppercase mb-6">
              Agile Consulting & Transformation
            </h1>
            <p className="text-xl md:text-2xl text-lavender/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Accelerate your digital transformation journey with proven agile methodologies including SCRUM, SAFe, KANBAN, and enterprise-scale frameworks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 rounded bg-white text-violet font-head uppercase text-lg shadow-lg hover:bg-lavender/20 hover:text-white border-2 border-white transition-all duration-300"
              >
                Start Your Transformation
              </a>
              <a
                href="#methodologies"
                className="px-8 py-4 rounded border-2 border-white text-white font-head uppercase text-lg hover:bg-white hover:text-violet transition-all duration-300"
              >
                Explore Methodologies
              </a>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-head text-white mb-2">{stat.number}</div>
                <div className="text-lavender/80 font-body uppercase text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agile Methodologies Section */}
      <section id="methodologies" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-head text-headline text-indigo uppercase mb-6">
              Agile Methodologies We Master
            </h2>
            <p className="text-lg text-grape max-w-3xl mx-auto">
              Our expertise spans across all major agile frameworks, ensuring the right approach for your organization's unique needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {agileMethodologies.map((methodology, index) => (
              <div key={index} className="bg-dreh-bg rounded-lg p-8 shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
                <div className="text-violet mb-6 flex justify-center">{methodology.icon}</div>
                <h3 className="font-head text-2xl text-grape uppercase mb-4 text-center">{methodology.title}</h3>
                <p className="text-indigo mb-6 text-center">{methodology.description}</p>
                <div className="mb-6">
                  <h4 className="font-head text-lg text-grape uppercase mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {methodology.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-indigo">
                        <CheckCircle className="w-5 h-5 text-violet mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-head text-sm text-grape uppercase mb-2">Benefits:</h4>
                  <p className="text-indigo text-sm">{methodology.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Services */}
      <section className="py-20 md:py-28 bg-dreh-bg">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-head text-headline text-indigo uppercase mb-6">
              Our Transformation Services
            </h2>
            <p className="text-lg text-grape max-w-3xl mx-auto">
              Comprehensive services designed to guide your organization through every stage of agile transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformationServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
                <div className="text-violet mb-4 flex justify-center">{service.icon}</div>
                <h3 className="font-head text-xl text-grape uppercase mb-3">{service.title}</h3>
                <p className="text-indigo font-body">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Process */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-head text-headline text-indigo uppercase mb-6">
              Our Proven Transformation Process
            </h2>
            <p className="text-lg text-grape max-w-3xl mx-auto">
              A systematic, phased approach that ensures successful agile adoption with minimal disruption to your operations
            </p>
          </div>
          <div className="space-y-12">
            {transformationSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-violet to-grape rounded-full flex items-center justify-center text-white font-head text-2xl">
                  {step.step}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-head text-2xl text-grape uppercase mb-4">{step.title}</h3>
                  <p className="text-indigo text-lg leading-relaxed">{step.description}</p>
                </div>
                {index < transformationSteps.length - 1 && (
                  <div className="hidden md:flex flex-shrink-0 w-12 h-12 items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-violet" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-indigo to-violet text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="font-head text-headline text-white uppercase mb-6">
              Measurable Transformation Results
            </h2>
            <p className="text-xl text-lavender/90 max-w-3xl mx-auto">
              Our agile transformations deliver quantifiable improvements across key performance indicators
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <Clock className="w-12 h-12 text-lavender mx-auto mb-4" />
              <div className="text-4xl font-head text-white mb-2">50%</div>
              <div className="text-lavender/80 uppercase">Faster Delivery</div>
            </div>
            <div className="text-center bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <TrendingUp className="w-12 h-12 text-lavender mx-auto mb-4" />
              <div className="text-4xl font-head text-white mb-2">40%</div>
              <div className="text-lavender/80 uppercase">Quality Improvement</div>
            </div>
            <div className="text-center bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <Users className="w-12 h-12 text-lavender mx-auto mb-4" />
              <div className="text-4xl font-head text-white mb-2">80%</div>
              <div className="text-lavender/80 uppercase">Team Engagement</div>
            </div>
            <div className="text-center bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <Target className="w-12 h-12 text-lavender mx-auto mb-4" />
              <div className="text-4xl font-head text-white mb-2">65%</div>
              <div className="text-lavender/80 uppercase">Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-dreh-bg">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-head text-title text-indigo uppercase mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-grape mb-8 max-w-2xl mx-auto">
            Start your agile transformation journey today with our proven methodologies and expert guidance. Let's build a more agile, responsive, and successful organization together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 rounded bg-gradient-to-r from-violet to-grape text-white font-head uppercase text-lg shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </a>
            <a
              href="/services"
              className="px-8 py-4 rounded border-2 border-violet text-violet font-head uppercase text-lg hover:bg-violet hover:text-white transition-all duration-300"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <StickyCTA />
  </>
);

export default AgileTransformation;
