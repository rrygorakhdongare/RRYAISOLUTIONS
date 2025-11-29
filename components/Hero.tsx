
import React from 'react';
import { HERO_CONTENT } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-secondary pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-60"
                poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            >
                {/* Reliable Pexels Video URL - Abstract Blue Network */}
                <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Lighter gradient to ensure video is visible */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary/90"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none z-0">
            <div className="absolute -top-[20%] -right-[10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-primary blur-[80px] md:blur-[120px]"></div>
            <div className="absolute top-[40%] -left-[10%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-indigo-500 blur-[60px] md:blur-[100px]"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Adjusted mobile font size to text-4xl for better impact */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 md:mb-8 leading-tight">
          {HERO_CONTENT.title}
        </h1>
        <p className="text-lg md:text-2xl text-blue-200 font-medium mb-8 md:mb-10 max-w-3xl mx-auto px-2">
          {HERO_CONTENT.subtitle}
        </p>
        <p className="text-base md:text-lg text-gray-300 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          {HERO_CONTENT.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-primary hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto"
          >
            Explore Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-base font-semibold rounded-lg text-gray-200 hover:bg-gray-800 transition-colors bg-white/5 backdrop-blur-sm w-full sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
