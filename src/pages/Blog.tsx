
import React from "react";
import { SEO } from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";

const posts = [
  {
    title: "What RAG Really Means for Enterprise Search",
    slug: "/blog/rag-enterprise-search",
    category: "AI",
    excerpt: "Delve into Retrieval-Augmented Generation (RAG) and its impact on search and knowledge workflows for large organizations.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "How to Integrate LLMs with ServiceNow Workflows",
    slug: "/blog/llms-servicenow",
    category: "ServiceNow",
    excerpt: "A technical deep dive on embedding Large Language Models into enterprise workflow automation using ServiceNow's Now Platform.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Enterprise Automation: Cost Reduction with RPA",
    slug: "/blog/rpa-cost-reduction",
    category: "Automation",
    excerpt: "Real-world case studies showing how automation platforms decrease costs and increase reliability in business-critical processes.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
];

const Blog = () => (
  <>
    <SEO
      title="Insights & Blog | Drehill Private Limited"
      description="Read the latest articles and insights on AI, automation, and enterprise digital transformation."
    />
    <Navbar />
    <main className="w-full min-h-screen bg-white">
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="font-head text-headline text-indigo uppercase mb-10 text-center">
            Insights &amp; Blog
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map(post => (
              <a href={post.slug} key={post.slug} className="rounded-lg overflow-hidden shadow-card border border-lavender flex flex-col hover:scale-105 transition group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs uppercase mb-2 text-grape font-semibold">{post.category}</div>
                  <div className="font-head text-lg mb-2 group-hover:text-violet transition">{post.title}</div>
                  <div className="font-body text-indigo text-sm flex-1">{post.excerpt}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <a href="/blog" className="inline-block border-2 border-violet px-8 py-2 rounded font-head text-violet uppercase text-base bg-white hover:bg-lavender/60 transition">View All Insights</a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <StickyCTA />
  </>
);

export default Blog;
