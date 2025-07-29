
import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { Star } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="space-y-6">
       <div>
        <h2 className="text-3xl font-bold text-white">Certifications</h2>
        <div className="w-20 h-1 bg-[#1DB954] mt-2 rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((cert, index) => (
          <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg flex items-center gap-4 border border-gray-800/50 hover:border-gray-700 transition-all">
            <Star className="text-[#1DB954] flex-shrink-0" size={40} />
            <div>
              <h3 className="text-lg font-bold text-white">{cert.name}</h3>
              <p className="text-gray-400">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
