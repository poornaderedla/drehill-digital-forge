
import React from "react";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
};

export const ServiceCard = ({ icon, title, desc, href }: ServiceCardProps) => (
  <a
    href={href}
    className="relative group flex flex-col bg-white rounded-lg shadow-card border border-lavender px-7 py-8 min-h-[230px] transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-violet"
    tabIndex={0}
  >
    <div className="flex items-center gap-3 mb-3 text-3xl text-violet">{icon}</div>
    <div className="font-head text-xl text-grape mb-2 uppercase">{title}</div>
    <p className="font-body text-indigo text-base transition-all max-h-20 group-hover:max-h-none overflow-hidden">
      {desc}
    </p>
    <span className="absolute right-6 bottom-5 text-grape text-sm opacity-0 group-hover:opacity-100 transition">Read more &rarr;</span>
  </a>
);
