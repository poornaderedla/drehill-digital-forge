
import React from "react";
import { SEO } from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StickyCTA from "../../components/StickyCTA";
import { Cpu, Brain, Database, Zap, Shield, Globe, Target, TrendingUp, Users, CheckCircle } from "lucide-react";

const AiDevelopment = () => (
  <>
    <SEO
      title="AI Development Services | Enterprise AI Solutions | Machine Learning | Drehill"
      description="Transform your business with custom AI solutions. LLMs, RAG systems, NLP, computer vision, predictive analytics, and enterprise AI integration. ISO-certified AI development services delivering measurable ROI."
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
                <Cpu className="text-6xl" />
                <h1 className="font-head uppercase text-white text-display">AI Development Excellence</h1>
              </div>
              <p className="font-body text-xl text-lavender/90 mb-8 leading-relaxed">
                Unlock transformative business value with enterprise-grade AI solutions. We specialize in custom LLMs, 
                intelligent automation, predictive analytics, and AI-powered decision systems that drive measurable ROI 
                and sustainable competitive advantage across industries.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-head text-white mb-1">85%</div>
                  <div className="text-lavender/80 text-sm uppercase">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-head text-white mb-1">$2.5M</div>
                  <div className="text-lavender/80 text-sm uppercase">Avg Annual Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-head text-white mb-1">150+</div>
                  <div className="text-lavender/80 text-sm uppercase">AI Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-head text-white mb-1">6 mos</div>
                  <div className="text-lavender/80 text-sm uppercase">ROI Timeline</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 rounded bg-white text-violet font-head uppercase shadow-lg hover:bg-lavender/20 hover:text-white border-2 border-white transition text-lg"
                >
                  Start AI Transformation
                </a>
                <a
                  href="/projects"
                  className="inline-block px-8 py-4 rounded border-2 border-white text-white font-head uppercase hover:bg-white hover:text-violet transition text-lg"
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
        </div>
      </section>

      {/* Core AI Capabilities */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-head text-title text-indigo uppercase mb-6">Comprehensive AI Solutions Portfolio</h2>
            <p className="text-lg text-grape max-w-3xl mx-auto">
              From foundational machine learning to cutting-edge generative AI, we deliver enterprise-scale solutions 
              that transform operations, enhance decision-making, and create new revenue streams.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <Brain className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">Large Language Models</h3>
              <p className="text-indigo font-body mb-4">Custom LLM fine-tuning, prompt engineering, and enterprise chatbots with domain-specific knowledge integration and multi-modal capabilities.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• GPT-4, Claude, PaLM integration</li>
                <li>• Custom model fine-tuning</li>
                <li>• Prompt optimization frameworks</li>
                <li>• Multi-modal AI applications</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <Database className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">RAG & Knowledge Systems</h3>
              <p className="text-indigo font-body mb-4">Retrieval-Augmented Generation for intelligent document search, enterprise knowledge management, and contextual AI responses with semantic understanding.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Vector database optimization</li>
                <li>• Semantic search engines</li>
                <li>• Knowledge graph construction</li>
                <li>• Document intelligence systems</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <Zap className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">Intelligent Process Automation</h3>
              <p className="text-indigo font-body mb-4">AI-powered workflow automation, intelligent document processing, computer vision, and decision support systems with continuous learning capabilities.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Computer vision & OCR</li>
                <li>• Intelligent document processing</li>
                <li>• Predictive analytics engines</li>
                <li>• Real-time decision systems</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <TrendingUp className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">Predictive Analytics & ML</h3>
              <p className="text-indigo font-body mb-4">Advanced machine learning models for forecasting, anomaly detection, recommendation engines, and business intelligence with real-time insights.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Time series forecasting</li>
                <li>• Anomaly detection systems</li>
                <li>• Recommendation engines</li>
                <li>• Risk assessment models</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <Shield className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">AI Security & Governance</h3>
              <p className="text-indigo font-body mb-4">Responsible AI frameworks, model governance, bias detection, explainable AI, and enterprise-grade security for AI systems with compliance assurance.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• AI governance frameworks</li>
                <li>• Bias detection & mitigation</li>
                <li>• Explainable AI (XAI)</li>
                <li>• Model monitoring & drift detection</li>
              </ul>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg shadow-card border border-lavender hover:scale-105 transition-transform duration-200">
              <Globe className="text-violet mb-4" size={48} />
              <h3 className="font-head text-xl text-grape uppercase mb-4">Edge AI & IoT Integration</h3>
              <p className="text-indigo font-body mb-4">Edge computing AI solutions, IoT data processing, real-time inference, and distributed AI architectures for manufacturing and industrial applications.</p>
              <ul className="text-sm text-indigo space-y-1">
                <li>• Edge device optimization</li>
                <li>• IoT sensor data analytics</li>
                <li>• Real-time inference engines</li>
                <li>• Industrial AI applications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-20 md:py-28 bg-dreh-bg">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title text-indigo uppercase mb-12 text-center">Enterprise AI Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
              <h3 className="font-head text-xl text-grape uppercase mb-6">AI/ML Platforms & Frameworks</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Large Language Models</h4>
                  <p className="text-sm text-indigo">OpenAI GPT-4, Anthropic Claude, Google PaLM, Meta LLaMA, Hugging Face Transformers, Azure OpenAI Service</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Machine Learning</h4>
                  <p className="text-sm text-indigo">TensorFlow, PyTorch, Scikit-learn, XGBoost, LightGBM, CatBoost, Keras, JAX</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Deep Learning</h4>
                  <p className="text-sm text-indigo">CNN, RNN, LSTM, Transformer architectures, GANs, Diffusion models, Neural Architecture Search</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Computer Vision</h4>
                  <p className="text-sm text-indigo">OpenCV, YOLO, R-CNN, Mask R-CNN, ViT, EfficientNet, ResNet, Detectron2</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-card border border-lavender">
              <h3 className="font-head text-xl text-grape uppercase mb-6">Infrastructure & Deployment</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Cloud AI Services</h4>
                  <p className="text-sm text-indigo">AWS SageMaker, Azure Machine Learning, Google AI Platform, IBM Watson, Databricks</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Vector Databases</h4>
                  <p className="text-sm text-indigo">Pinecone, Weaviate, Chroma, FAISS, Qdrant, Milvus, Redis Vector</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">MLOps & Monitoring</h4>
                  <p className="text-sm text-indigo">MLflow, Kubeflow, Weights & Biases, Neptune, Evidently AI, Great Expectations</p>
                </div>
                <div>
                  <h4 className="font-head text-violet uppercase mb-2">Data Processing</h4>
                  <p className="text-sm text-indigo">Apache Spark, Kafka, Airflow, Dask, Ray, Pandas, NumPy, Apache Arrow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Development Methodology */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title text-indigo uppercase mb-8 text-center">Proven AI Development Methodology</h2>
          <p className="text-center text-grape mb-12 max-w-3xl mx-auto">
            Our systematic approach ensures successful AI implementation from concept to production, 
            with continuous optimization and measurable business impact.
          </p>
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">1</div>
              <h4 className="font-head text-grape uppercase mb-3">AI Strategy & Assessment</h4>
              <p className="text-sm text-indigo">AI readiness evaluation, use case prioritization, ROI modeling, data audit, and strategic roadmap development</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">2</div>
              <h4 className="font-head text-grape uppercase mb-3">Data & Architecture</h4>
              <p className="text-sm text-indigo">Data pipeline design, feature engineering, model architecture selection, infrastructure planning, and security framework</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">3</div>
              <h4 className="font-head text-grape uppercase mb-3">Model Development</h4>
              <p className="text-sm text-indigo">Algorithm selection, model training, hyperparameter tuning, validation, and performance optimization</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">4</div>
              <h4 className="font-head text-grape uppercase mb-3">Integration & Testing</h4>
              <p className="text-sm text-indigo">API development, system integration, A/B testing, performance benchmarking, and user acceptance testing</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-violet text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-head">5</div>
              <h4 className="font-head text-grape uppercase mb-3">Production & Optimization</h4>
              <p className="text-sm text-indigo">Production deployment, monitoring setup, continuous learning, model retraining, and performance optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 md:py-28 bg-dreh-bg">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title text-indigo uppercase mb-12 text-center">Industry-Specific AI Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <h4 className="font-head text-grape uppercase mb-4">Healthcare & Life Sciences</h4>
              <ul className="text-sm text-indigo text-left space-y-2">
                <li>• Medical imaging analysis & diagnostics</li>
                <li>• Drug discovery & molecular modeling</li>
                <li>• Clinical decision support systems</li>
                <li>• Patient data insights & personalization</li>
                <li>• Genomics & precision medicine</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <h4 className="font-head text-grape uppercase mb-4">Financial Services</h4>
              <ul className="text-sm text-indigo text-left space-y-2">
                <li>• Fraud detection & risk assessment</li>
                <li>• Algorithmic trading & portfolio optimization</li>
                <li>• Credit scoring & loan underwriting</li>
                <li>• Regulatory compliance automation</li>
                <li>• Customer behavior analytics</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <h4 className="font-head text-grape uppercase mb-4">Manufacturing & Industry 4.0</h4>
              <ul className="text-sm text-indigo text-left space-y-2">
                <li>• Predictive maintenance systems</li>
                <li>• Quality control & defect detection</li>
                <li>• Supply chain optimization</li>
                <li>• Production planning & scheduling</li>
                <li>• Equipment performance monitoring</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-card border border-lavender text-center hover:scale-105 transition-transform duration-200">
              <h4 className="font-head text-grape uppercase mb-4">Retail & E-commerce</h4>
              <ul className="text-sm text-indigo text-left space-y-2">
                <li>• Personalization & recommendation engines</li>
                <li>• Demand forecasting & inventory optimization</li>
                <li>• Price optimization & dynamic pricing</li>
                <li>• Customer sentiment analysis</li>
                <li>• Visual search & product recognition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics & ROI */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title text-indigo uppercase mb-8 text-center">Measurable AI Impact</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-dreh-bg p-8 rounded-lg border border-lavender">
              <h3 className="font-head text-xl text-grape uppercase mb-6 text-center">Business Impact Metrics</h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-head text-violet mb-2">85%</div>
                  <p className="text-indigo text-sm">Average efficiency improvement</p>
                </div>
                <div>
                  <div className="text-4xl font-head text-violet mb-2">$2.5M</div>
                  <p className="text-indigo text-sm">Average annual cost savings</p>
                </div>
                <div>
                  <div className="text-4xl font-head text-violet mb-2">6 mos</div>
                  <p className="text-indigo text-sm">Typical ROI realization</p>
                </div>
                <div>
                  <div className="text-4xl font-head text-violet mb-2">95%</div>
                  <p className="text-indigo text-sm">Model accuracy achievement</p>
                </div>
              </div>
            </div>
            
            <div className="bg-dreh-bg p-8 rounded-lg border border-lavender">
              <h3 className="font-head text-xl text-grape uppercase mb-6 text-center">Technical Excellence</h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-4xl font-head text-violet mb-2">150+</div>
                  <p className="text-indigo text-sm">AI projects delivered</p>
                </div>
                <div>
                  <div className="text-4xl font-head text-violet mb-2">98%</div>
                  <p className="text-indigo text-sm">Client satisfaction rate</p>
                </div>
                <div>
                  <div className="text-4xl font-head text-violet mb-2">24/7</div>
                  <p className="text-indigo text-sm">Model monitoring & support</p>
                </div>
                <div>
                  <div className="text-4xl font-head text-violet mb-2">99.9%</div>
                  <p className="text-indigo text-sm">System uptime guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Drehill */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-indigo to-violet text-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-head text-title uppercase mb-12 text-center">Why Drehill for AI Development</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <CheckCircle className="mx-auto mb-4 text-lavender" size={48} />
              <h3 className="font-head text-xl uppercase mb-4">Proven AI Expertise</h3>
              <p className="text-lavender/90">Deep domain knowledge across ML, NLP, computer vision, and generative AI with 150+ successful implementations</p>
            </div>
            <div className="text-center">
              <Users className="mx-auto mb-4 text-lavender" size={48} />
              <h3 className="font-head text-xl uppercase mb-4">Elite AI Team</h3>
              <p className="text-lavender/90">PhD-level data scientists, ML engineers, and AI researchers with experience at top tech companies and research institutions</p>
            </div>
            <div className="text-center">
              <Target className="mx-auto mb-4 text-lavender" size={48} />
              <h3 className="font-head text-xl uppercase mb-4">Business-First Approach</h3>
              <p className="text-lavender/90">Focus on measurable business outcomes, ROI optimization, and sustainable competitive advantage through AI innovation</p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="font-head text-xl uppercase mb-6">Ready to Transform with AI?</h3>
            <p className="text-xl text-lavender/90 mb-8 max-w-2xl mx-auto">
              Unlock the power of artificial intelligence to drive innovation, optimize operations, and create new revenue streams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-10 py-4 rounded bg-white text-violet font-head uppercase text-lg shadow-lg hover:bg-lavender/20 hover:text-white border-2 border-white transition-all duration-300"
              >
                Start AI Transformation
              </a>
              <a
                href="/projects"
                className="px-10 py-4 rounded border-2 border-white text-white font-head uppercase text-lg hover:bg-white hover:text-violet transition-all duration-300"
              >
                View AI Success Stories
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

export default AiDevelopment;
