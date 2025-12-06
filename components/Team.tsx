import React from 'react';
import { TEAM_DATA } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Our Team
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet the Experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_DATA.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Updated Image Wrapper */}
              <div className="w-full h-64 bg-white flex items-center justify-center overflow-hidden p-4">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="h-full w-auto object-contain rounded-lg"
                />
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-semibold mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
