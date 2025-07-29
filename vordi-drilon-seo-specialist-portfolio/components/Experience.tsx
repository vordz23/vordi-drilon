
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="space-y-8">
       <div>
        <h2 className="text-3xl font-bold text-white">Work Experience</h2>
        <div className="w-20 h-1 bg-[#1DB954] mt-2 rounded-full"></div>
      </div>
      <div className="space-y-10">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="pl-6 border-l-2 border-gray-700 relative">
             {index === 0 ? (
                <>
                  <div className="absolute -left-[7px] top-1.5 w-3 h-3 bg-[#1DB954] rounded-full border-2 border-[#121212]"></div>
                  <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-[#1DB954] rounded-full animate-ping opacity-75"></div>
                </>
             ) : (
                <div className="absolute -left-[7px] top-1.5 w-3 h-3 bg-gray-600 rounded-full border-2 border-[#121212]"></div>
             )}

            <p className="text-xs text-gray-400 font-semibold">{exp.period}</p>
            <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
            <p className="text-md text-[#1DB954] font-semibold">{exp.company}</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-gray-300">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
