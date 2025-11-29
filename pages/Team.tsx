
import React from 'react';
import PageHeader from '../components/PageHeader';
import { TEAM_DATA } from '../constants';
import { Linkedin, Twitter, Mail } from 'lucide-react';

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
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-w-4 aspect-h-3 bg-gray-200 overflow-hidden relative h-80">
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors z-10 transition-all duration-300"></div>
                    <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">{member.role}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="flex space-x-4 border-t border-gray-100 pt-6">
                      <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                          <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                          <Twitter className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                          <Mail className="h-5 w-5" />
                      </a>
                  </div>
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
