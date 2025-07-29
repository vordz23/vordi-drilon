
import React from 'react';

const Hero: React.FC = () => {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Completed' },
    { value: '10+', label: 'Happy Clients' },
  ];

  return (
    <section id="home" className="min-h-[60vh] flex flex-col justify-center">
      <div className="lg:hidden flex justify-center mb-8">
        <a href="Vordi_Drilon_Resume.pdf" download="Vordi_Drilon_Resume.pdf" className="bg-[#1DB954] text-black font-bold py-3 px-6 rounded-full text-base flex items-center gap-2 hover:bg-[#1ed760] transition-transform hover:scale-105">
            Download Resume
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        </a>
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
        Vordi Drilon
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-[#1DB954] mt-2">
        SEO Specialist
      </h2>
      <div className="mt-12 flex flex-col md:flex-row gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-4xl lg:text-5xl font-bold text-[#1DB954]">{stat.value}</p>
            <p className="text-sm text-gray-400 tracking-widest mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
