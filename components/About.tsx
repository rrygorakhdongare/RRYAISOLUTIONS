import React from 'react';
import { ABOUT_CONTENT } from '../constants';
import { Target, Zap, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Who We Are</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {ABOUT_CONTENT.title}
          </p>
          <div className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto space-y-4">
             {ABOUT_CONTENT.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-primary mb-4">
                    <Target className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
                <p className="mt-2 text-base text-gray-500">Helping businesses automate operations and improve efficiency through intelligent systems.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-primary mb-4">
                    <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Innovation</h3>
                <p className="mt-2 text-base text-gray-500">Technology-driven solutions specializing in AI, IoT, and modern software practices.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-primary mb-4">
                    <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Excellence</h3>
                <p className="mt-2 text-base text-gray-500">Delivering secure, scalable, and performance-focused digital products.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;