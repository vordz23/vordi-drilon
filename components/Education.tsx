
import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="space-y-6">
       <div>
        <h2 className="text-3xl font-bold text-white">Education</h2>
        <div className="w-20 h-1 bg-[#1DB954] mt-2 rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800/50 hover:border-gray-700 transition-all">
            <GraduationCap className="text-[#1DB954] mb-3" size={32} />
            <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
            <p className="text-gray-300">{edu.degree}</p>
            {edu.achievement && <p className="text-gray-400 italic text-sm mt-1">{edu.achievement}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
