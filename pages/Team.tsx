import React from 'react';
import PageHeader from '../components/PageHeader';
import { TEAM_DATA } from '../constants';

const Team: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Our Team" 
        subtitle="Meet the visionary minds driving innovation at RRY AI SOLUTIONS." 
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {TEAM_DATA.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Updated Image Wrapper */}
                <div className="h-80 w-full bg-white flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors z-10"></div>

                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="h-full w-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
