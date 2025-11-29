import React from 'react';
import PageHeader from '../components/PageHeader';
import { SERVICES_DATA } from '../constants';
import { Brain, Code, Layout, Wifi, Cloud, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="h-8 w-8" />,
  code: <Code className="h-8 w-8" />,
  layout: <Layout className="h-8 w-8" />,
  wifi: <Wifi className="h-8 w-8" />,
  cloud: <Cloud className="h-8 w-8" />,
};

const Services: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive technology solutions tailored to drive your business forward." 
      />

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-sm border border-gray-100 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 space-y-4 md:space-y-6 w-full">
                   <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-xl text-primary">
                      {iconMap[service.iconKey]}
                   </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-base md:text-lg text-gray-600">
                    We leverage cutting-edge technology to deliver superior {service.title.toLowerCase()} solutions that scale with your business.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 md:mt-6">
                    {service.items.map((item, idx) => (
                        <div key={idx} className="flex items-start">
                             <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                             <span className="text-gray-700 font-medium text-sm md:text-base">{item}</span>
                        </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex-1 w-full mt-4 lg:mt-0">
                     <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video bg-gray-100 group">
                         <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors z-10"></div>
                         <img 
                            src={service.imageUrl || `https://picsum.photos/seed/${service.iconKey}/800/600`}
                            alt={service.title} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
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

export default Services;