
import React from "react";
import { SEO } from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";

const About = () => (
  <>
    <SEO
      title="About Us | Drehill Private Limited"
      description="Learn about Drehill's story, mission, vision, leadership, and culture."
    />
    <Navbar />
    <main className="w-full min-h-screen bg-dreh-bg">
      <section className="bg-white py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-head text-headline text-violet uppercase mb-5">About Drehill</h1>
          <p className="font-body text-lg text-indigo mb-8">
            Founded in 2023 and headquartered in India, Drehill Private Limited serves global enterprises with AI engineering, ServiceNow solutions, automation, and digital consulting. Our mission is to deliver measurable innovation and transformative results for organizations worldwide.
          </p>
        </div>
      </section>
      <section className="container max-w-4xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-lavender rounded shadow-card flex flex-col items-center text-center">
            <div className="text-4xl mb-3" aria-hidden>🚀</div>
            <h2 className="font-head text-lg text-grape uppercase mb-1">Mission</h2>
            <p className="font-body text-indigo">
              Accelerate enterprise transformation through cutting-edge AI and digital technology.
            </p>
          </div>
          <div className="p-6 bg-lavender rounded shadow-card flex flex-col items-center text-center">
            <div className="text-4xl mb-3" aria-hidden>🌐</div>
            <h2 className="font-head text-lg text-grape uppercase mb-1">Vision</h2>
            <p className="font-body text-indigo">
              Build intelligent futures for leading organizations—globally.
            </p>
          </div>
          <div className="p-6 bg-lavender rounded shadow-card flex flex-col items-center text-center">
            <div className="text-4xl mb-3" aria-hidden>🤝</div>
            <h2 className="font-head text-lg text-grape uppercase mb-1">Values</h2>
            <p className="font-body text-indigo">
              Innovation. Velocity. Trust. A relentless focus on client success.
            </p>
          </div>
        </div>
      </section>
      <section className="container max-w-5xl mx-auto px-4 py-12">
        <h2 className="font-head text-title text-indigo uppercase mb-8 text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          <div className="flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/men/43.jpg"
              alt="Amit Sharma"
              className="w-24 h-24 rounded-full mb-3 object-cover border-2 border-violet"
            />
            <div className="font-head uppercase text-grape mb-1">Amit Sharma</div>
            <div className="text-xs text-indigo mb-1">Founder & CEO</div>
            <a href="https://linkedin.com" className="text-violet underline text-xs">LinkedIn</a>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/women/60.jpg"
              alt="Sana Verma"
              className="w-24 h-24 rounded-full mb-3 object-cover border-2 border-violet"
            />
            <div className="font-head uppercase text-grape mb-1">Sana Verma</div>
            <div className="text-xs text-indigo mb-1">Head of AI Engineering</div>
            <a href="https://linkedin.com" className="text-violet underline text-xs">LinkedIn</a>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/men/23.jpg"
              alt="Raj Patel"
              className="w-24 h-24 rounded-full mb-3 object-cover border-2 border-violet"
            />
            <div className="font-head uppercase text-grape mb-1">Raj Patel</div>
            <div className="text-xs text-indigo mb-1">ServiceNow Lead</div>
            <a href="https://linkedin.com" className="text-violet underline text-xs">LinkedIn</a>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/women/21.jpg"
              alt="Neha Jaiswal"
              className="w-24 h-24 rounded-full mb-3 object-cover border-2 border-violet"
            />
            <div className="font-head uppercase text-grape mb-1">Neha Jaiswal</div>
            <div className="text-xs text-indigo mb-1">Director, Consulting</div>
            <a href="https://linkedin.com" className="text-violet underline text-xs">LinkedIn</a>
          </div>
        </div>
      </section>
      <section className="bg-lavender py-12">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h3 className="font-head uppercase text-grape text-title mb-2">Culture</h3>
          <p className="font-body text-indigo text-lg italic">"Innovation. Velocity. Trust."</p>
        </div>
      </section>
      <div className="flex justify-center py-10">
        <a
          href="/services"
          className="px-8 py-3 rounded bg-violet text-white font-head uppercase shadow hover:bg-grape transition"
        >
          Explore Our Expertise
        </a>
      </div>
    </main>
    <Footer />
    <StickyCTA />
  </>
);

export default About;
