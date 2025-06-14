
import React from "react";

const Footer = () => (
  <footer className="w-full border-t border-indigo py-6 mt-24 text-center text-indigo text-base bg-white">
    <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
      <div>
        © {new Date().getFullYear()} Drehill Private Limited. All rights reserved.
      </div>
      <div className="flex gap-6">
        <a href="/privacy" className="hover:text-grape underline">Privacy Policy</a>
        <a href="/terms" className="hover:text-grape underline">Terms</a>
      </div>
    </div>
  </footer>
);

export default Footer;
