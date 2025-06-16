
import React from "react";
import { SEO } from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StickyCTA from "../../components/StickyCTA";
import { Cpu, Brain, Database, Zap, Shield, Globe } from "lucide-react";

const AiDevelopment = () => (
  <>
    <SEO
      title="AI Development Services | Enterprise AI Solutions | Drehill"
      description="Transform your business with custom AI solutions. LLMs, RAG systems, NLP, computer vision, and enterprise AI integration. ISO-certified AI development services."
    />
    <Navbar />
    <main className="w-full min-h-screen bg-white">
      <section className="bg-dreh-bg py-16 md:py-24 border-b border-lavender">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4 text-5xl text-violet">
              <Cpu />
              <span className="font-head uppercase text-violet text-headline">AI Development</span>
            </div>
            <p className="font-body text-xl text-indigo mb-6 leading-relaxed">
              Unlock transformative business value with enterprise-grade AI solutions. We specialize in custom LLMs, 
              intelligent automation, and AI-powered decision systems that drive measurable ROI and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-block px-8 py-4 rounded bg-violet text-white font-head uppercase shadow-lg hover:bg-grape transition text-lg"
              >
                Start AI Transformation
              </a>
              <a
                href="/projects"
                className="inline-block px-8 py-4 rounded border-2 border-violet text-violet font-head uppercase hover:bg-lavender/60 transition text-lg"
              >
                View AI Case Studies
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
              alt="AI Development Visualization"
              className="w-full rounded-lg shadow-card border border-lavender object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core AI Services */}
      <section className="container max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-head text-title text-indigo uppercase mb-12 text-center">Core AI Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Brain className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">Large Language Models</h3>
            <p className="text-indigo font-body">Custom LLM fine-tuning, prompt engineering, and enterprise chatbots with domain-specific knowledge integration.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Database className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">RAG Systems</h3>
            <p className="text-indigo font-body">Retrieval-Augmented Generation for intelligent document search, knowledge management, and contextual AI responses.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
            <Zap className="text-violet mb-4" size={48} />
            <h3 className="font-head text-xl text-grape uppercase mb-4">Process Automation</h3>
            <p className="text-indigo font-body">AI-powered workflow automation, intelligent document processing, and decision support systems.</p>
          </div>
        </div>

        <h2 className="font-head text-title text-indigo uppercase mb-8">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <h3 className="font-head text-lg text-grape uppercase mb-4">AI/ML Technologies</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>LLM Platforms:</strong> OpenAI GPT-4, Anthropic Claude, Google PaLM, Hugging Face Transformers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>ML Frameworks:</strong> TensorFlow, PyTorch, Scikit-learn, XGBoost</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>Vector Databases:</strong> Pinecone, Weaviate, Chroma, FAISS</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>MLOps:</strong> MLflow, Kubeflow, AWS SageMaker, Azure ML</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-head text-lg text-grape uppercase mb-4">Integration & Deployment</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>Cloud Platforms:</strong> AWS, Azure, GCP with enterprise security</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>API Development:</strong> RESTful APIs, GraphQL, real-time WebSocket connections</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>Data Pipeline:</strong> Apache Kafka, Apache Airflow, real-time data processing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-head text-violet">•</span>
                <span><strong>Security:</strong> SOC 2 compliance, GDPR, data encryption, access controls</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="font-head text-title text-indigo uppercase mb-8">Industry Applications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Healthcare</h4>
            <p className="text-sm text-indigo">Medical imaging analysis, drug discovery, patient data insights</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Finance</h4>
            <p className="text-sm text-indigo">Risk assessment, fraud detection, algorithmic trading</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Manufacturing</h4>
            <p className="text-sm text-indigo">Predictive maintenance, quality control, supply chain optimization</p>
          </div>
          <div className="text-center p-6 bg-lavender/30 rounded-lg">
            <h4 className="font-head text-grape uppercase mb-2">Retail</h4>
            <p className="text-sm text-indigo">Personalization engines, demand forecasting, customer analytics</p>
          </div>
        </div>

        <h2 className="font-head text-title text-indigo uppercase mb-8">Our AI Development Process</h2>
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">1</div>
            <h4 className="font-head text-grape uppercase mb-2">Discovery & Strategy</h4>
            <p className="text-sm text-indigo">AI readiness assessment, use case identification, ROI modeling</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">2</div>
            <h4 className="font-head text-grape uppercase mb-2">Data & Architecture</h4>
            <p className="text-sm text-indigo">Data audit, model architecture design, infrastructure planning</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">3</div>
            <h4 className="font-head text-grape uppercase mb-2">Development & Training</h4>
            <p className="text-sm text-indigo">Model development, training, validation, and performance optimization</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-head">4</div>
            <h4 className="font-head text-grape uppercase mb-2">Deployment & Scale</h4>
            <p className="text-sm text-indigo">Production deployment, monitoring, continuous improvement</p>
          </div>
        </div>

        <div className="bg-dreh-bg p-8 rounded-lg border border-lavender">
          <h3 className="font-head text-xl text-grape uppercase mb-4 text-center">Success Metrics</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-head text-violet mb-2">85%</div>
              <p className="text-indigo">Average efficiency improvement</p>
            </div>
            <div>
              <div className="text-3xl font-head text-violet mb-2">$2.5M</div>
              <p className="text-indigo">Average annual cost savings</p>
            </div>
            <div>
              <div className="text-3xl font-head text-violet mb-2">6 months</div>
              <p className="text-indigo">Typical ROI realization</p>
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

export default AiDevelopment;
