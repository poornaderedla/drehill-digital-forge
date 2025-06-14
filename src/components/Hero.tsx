
import React from "react";

const Hero = () => (
  <section
    className="relative min-h-[60vh] flex items-center justify-center overflow-x-hidden bg-[linear-gradient(90deg,#837fd8_0%,#a29fe2_100%)]"
    style={{ borderRadius: "0 0 64px 64px / 0 0 48px 48px" }}
  >
    {/* Simple animated mesh background placeholder */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg width="100%" height="100%" viewBox="0 0 1024 370" preserveAspectRatio="none" style={{position:"absolute", left:0, top:0, width:"100%", height:"100%"}}>
        <defs>
          <radialGradient id="globeGrad" cx="55%" cy="40%" r="65%" fx="60%" fy="43%" gradientTransform="rotate(10)">
            <stop offset="0%" stopColor="#c7c3f6" stopOpacity="0.5"/>
            <stop offset="80%" stopColor="#837fd8" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <ellipse cx="55%" cy="40%" rx="420" ry="190" fill="url(#globeGrad)" />
      </svg>
      {/* Add animated mesh/circles if desired */}
    </div>
    <div className="z-10 w-full px-4 md:px-0 max-w-4xl text-center py-20">
      <h1 className="text-display font-head text-white mb-6 drop-shadow font-bold uppercase tracking-tight">
        Building Intelligent Futures with AI & ServiceNow
      </h1>
      <p className="text-xl md:text-2xl font-body text-white/85 mb-8 animate-fade-in">
        Enterprise-grade innovation. Delivered globally.
      </p>
      <div className="flex gap-6 justify-center">
        <a href="/contact" className="font-head uppercase text-base px-8 py-3 rounded-md bg-violet text-white shadow-lg hover:bg-grape focus:bg-grape transition-all">
          Talk to an Expert
        </a>
        <a href="/services" className="font-head uppercase text-base px-8 py-3 rounded-md border-2 border-lavender text-white bg-transparent hover:bg-lavender/25 transition-all">
          Explore Our Services
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
