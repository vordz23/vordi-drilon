
import React from 'react';
import { CORE_SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="space-y-6">
       <div>
        <h2 className="text-3xl font-bold text-white">Core Skills</h2>
        <div className="w-20 h-1 bg-[#1DB954] mt-2 rounded-full"></div>
      </div>
      <div className="flex flex-wrap gap-3">
        {CORE_SKILLS.map((skill, index) => (
          <div
            key={index}
            className="bg-green-500/10 border border-green-500/30 text-green-300 font-medium rounded-full px-4 py-2 text-sm transition-all hover:bg-green-500/20 hover:border-green-500/60 cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
