
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="space-y-6">
       <div>
        <h2 className="text-3xl font-bold text-white">What My Clients Say</h2>
        <div className="w-20 h-1 bg-[#1DB954] mt-2 rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800/50 hover:border-gray-700 transition-all">
            <Quote className="text-[#1DB954] mb-4" size={32} />
            <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
            <div className="text-right">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
