import React from 'react'; 
import PageHeader from '../components/PageHeader';
import { ABOUT_CONTENT } from '../constants';
import { Target, Zap, Shield } from 'lucide-react';
import innerOffice from '../assets/inner_office.jpg'; // <-- ADDED

const About: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Empowering businesses with next-generation technology." 
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT TEXT */}
            <div>
              <h2 className="text-3xl font-extrabold text-secondary mb-6 leading-tight">
                {ABOUT_CONTENT.paragraphs[0]}
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                {ABOUT_CONTENT.paragraphs.slice(1).map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>
            
            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-xl transform rotate-3"></div>
              <img
                src={innerOffice}
                alt="Modern Tech Office"
                className="relative rounded-xl shadow-lg w-full object-cover h-[400px]"
              />
            </div>

          </div>

          {/* 3 Boxes */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-primary mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To help businesses automate operations, improve efficiency, and adopt intelligent systems for smarter decision-making.
              </p>
            </div>

            <div className="flex flex-col p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-primary mb-6">
                <Zap className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of the curve, utilizing deep technical expertise and modern development practices.
              </p>
            </div>

            <div className="flex flex-col p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-primary mb-6">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Delivering secure, scalable, and performance-focused digital products for businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
