
import React from "react";
import { SEO } from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StickyCTA from "../../components/StickyCTA";
import { Cpu } from "lucide-react";

const AiDevelopment = () => (
  <>
    <SEO
      title="AI Development | Drehill Private Limited"
      description="Enterprise AI engineering: LLMs, NLP, RAG, Assistants, custom solutions and integration."
    />
    <Navbar />
    <main className="w-full min-h-screen bg-white">
      <section className="bg-dreh-bg py-14 md:py-20 border-b border-lavender">
        <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2 text-4xl text-violet">
              <Cpu />
              <span className="font-head uppercase text-violet text-title">AI Development</span>
            </div>
            <p className="font-body text-lg text-indigo mb-4">
              Unlock business value with tailored AI, LLMs, RAG, and NLP solutions for your organization. We specialize in designing, deploying, and integrating state-of-the-art AI systems—fine-tuned for enterprise needs.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded bg-violet text-white font-head uppercase shadow hover:bg-grape transition"
            >
              Talk to an AI Expert
            </a>
          </div>
          <div className="flex-1 pr-2">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80"
              alt="AI Abstract"
              className="w-full rounded-lg shadow-card border border-lavender object-cover"
            />
          </div>
        </div>
      </section>
      <section className="container max-w-5xl mx-auto px-4 py-16">
        <h2 className="font-head text-title text-indigo uppercase mb-6">Expertise & Capabilities</h2>
        <ul className="grid md:grid-cols-2 gap-7">
          <li>
            <span className="font-head text-violet">LLMs & Custom Chatbots:</span>
            {" "}Fine-tune OpenAI, Hugging Face, or proprietary models for conversational enterprise use.
          </li>
          <li>
            <span className="font-head text-violet">NLP & Text Analytics:</span>
            {" "}Automate insights, summaries, and document processing.
          </li>
          <li>
            <span className="font-head text-violet">Retrieval-Augmented Generation (RAG):</span>
            {" "}Enhance enterprise search and knowledge workflows using advanced context retrieval.
          </li>
          <li>
            <span className="font-head text-violet">Integration & Deployment:</span>
            {" "}Embed AI into workflows, SaaS, or on-prem, including ServiceNow and custom stacks.
          </li>
        </ul>
        <h3 className="font-head text-lg text-grape uppercase mt-10 mb-2">AI Stack</h3>
        <div className="flex flex-wrap gap-3 text-indigo text-sm">
          <span className="bg-lavender px-3 py-1 rounded">OpenAI</span>
          <span className="bg-lavender px-3 py-1 rounded">LangChain</span>
          <span className="bg-lavender px-3 py-1 rounded">Hugging Face</span>
          <span className="bg-lavender px-3 py-1 rounded">Pinecone</span>
          <span className="bg-lavender px-3 py-1 rounded">VectorDBs</span>
        </div>
        <h3 className="font-head text-lg text-grape uppercase mt-10 mb-2">Sample Use Cases</h3>
        <ul className="list-disc list-inside text-indigo font-body ml-3">
          <li>Enterprise knowledge assistants for employees or clients</li>
          <li>Domain-specific document Q&A and insight mining</li>
          <li>Process automation and classification using AI</li>
          <li>Automated customer support bots</li>
        </ul>
      </section>
      <div className="container max-w-5xl mx-auto px-4 pb-14">
        <a href="/services" className="text-violet font-head uppercase text-base hover:underline">&larr; Back to Services</a>
      </div>
    </main>
    <Footer />
    <StickyCTA />
  </>
);

export default AiDevelopment;
