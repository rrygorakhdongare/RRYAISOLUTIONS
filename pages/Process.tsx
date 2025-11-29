import React from 'react';
import PageHeader from '../components/PageHeader';
import { WORK_PROCESS } from '../constants';
import { Settings } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Our Work Process" 
        subtitle="A structured approach ensuring quality and efficiency from concept to deployment." 
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative">
             {/* Vertical Line for mobile - properly positioned through circle centers */}
             <div className="absolute left-[2rem] top-4 bottom-4 w-0.5 bg-gray-100 md:hidden z-0"></div>

            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-16">
                {WORK_PROCESS.map((step, index) => (
                    <div key={index} className="relative flex flex-row md:flex-col items-start md:items-center md:text-center group">
                        
                        {/* Number Circle */}
                        <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-blue-50 text-primary font-bold text-2xl shadow-sm group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mr-6 md:mr-0 md:mb-6">
                            {step.number}
                        </div>
                        
                        {/* Content */}
                        <div className="pt-1 md:pt-0 bg-white rounded-lg flex-1">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                We focus on detailed execution during the {step.title.toLowerCase()} phase to ensure project success.
                            </p>
                        </div>

                         {/* Connector Lines for Desktop Grid */}
                         {index < WORK_PROCESS.length - 1 && (index + 1) % 4 !== 0 && (
                            <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-100 -z-10"></div>
                         )}
                    </div>
                ))}
            </div>
          </div>

          <div className="mt-16 md:mt-24 bg-blue-50 rounded-2xl p-6 md:p-12 text-center">
              <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-sm mb-6">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Agile & Transparent</h3>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                  Our methodology is designed to be flexible and transparent. We keep you in the loop at every stage, ensuring the final product perfectly aligns with your vision.
              </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Process;