
import React from "react";

const StickyCTA = () => (
  <div className="fixed inset-x-0 bottom-0 z-40">
    <div className="mx-auto max-w-xl md:max-w-2xl shadow-card bg-violet rounded-t-lg flex items-center justify-between gap-6 px-6 py-4 border-t-2 border-lavender">
      <span className="font-head text-white text-lg uppercase">Let’s Build the Future Together</span>
      <a
        href="/contact"
        className="px-6 py-2 rounded bg-grape text-white font-head uppercase shadow hover:bg-indigo transition"
      >
        Contact Us
      </a>
    </div>
  </div>
);

export default StickyCTA;
