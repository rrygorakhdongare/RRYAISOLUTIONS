import React from 'react';
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">What We Do</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Comprehensive technology solutions tailored to drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-50 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {iconMap[service.iconKey]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;