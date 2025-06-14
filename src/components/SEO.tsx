
import React from "react";

type SEOProps = {
  title: string;
  description: string;
};

export const SEO = ({ title, description }: SEOProps) => {
  React.useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);
  }, [title, description]);
  return null;
};
