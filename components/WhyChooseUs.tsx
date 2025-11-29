import React from 'react';
import { WHY_CHOOSE_US } from '../constants';
import { BadgeCheck } from 'lucide-react';
import logoVideo from '../assets/logo.mp4'; // ← FIXED VIDEO IMPORT

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-secondary text-white relative overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* Left text */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6">
              Why Choose Us?
            </h2>

            <p className="text-lg text-gray-300 mb-8">
              We partner with you to deliver technical excellence and sustainable growth through innovative software solutions.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {WHY_CHOOSE_US.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <BadgeCheck className="h-6 w-6 text-green-400" />
                  <p className="ml-4 text-lg font-medium leading-6 text-gray-200">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — video */}
          <div className="mt-12 lg:mt-0 flex justify-center">
            <video
              src={logoVideo}
              autoPlay
              loop
              muted
              playsInline
              className="relative rounded-xl shadow-2xl border border-gray-700 w-full max-w-lg object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
