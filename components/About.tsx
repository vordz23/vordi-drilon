
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">About Me</h2>
        <div className="w-20 h-1 bg-[#1DB954] mt-2 rounded-full"></div>
      </div>
      <p className="text-gray-300 leading-relaxed max-w-4xl text-lg">
        Experienced SEO Specialist with a proven track record in driving organic growth through
        comprehensive on-page, off-page, and technical SEO strategies. Specializing in high-quality
        backlink acquisition, with demonstrated success in securing placements on authoritative
        domains. Proficient in e-commerce SEO, including optimizing Shopify product pages and
        developing keyword-driven blog content.
      </p>
      <p className="text-gray-300 leading-relaxed max-w-4xl text-lg">
        My background as a Senior Data Management Specialist provides a strong analytical
        foundation, enabling me to interpret performance data, identify trends, and make data-driven
        decisions to improve campaign results. Highly skilled with industry-standard tools including
        Ahrefs, SEMrush, and Google Search Console. A proactive and detail-oriented professional
        dedicated to delivering measurable results and contributing to a team's long-term success.
      </p>
    </section>
  );
};

export default About;
