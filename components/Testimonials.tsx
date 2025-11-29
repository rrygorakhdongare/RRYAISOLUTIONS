import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-12">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 relative">
               <Quote className="absolute top-4 left-4 h-8 w-8 text-white/20" />
               <p className="text-lg text-white font-medium italic relative z-10 pt-4">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;