import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import { ArrowRight, Brain, Code, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      
      {/* Mini Services Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Innovating across domains</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">We provide end-to-end solutions customized for your industry needs.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-blue-50/50">
                    <Brain className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
                    <p className="text-gray-600 mb-4">Advanced analytics and automation systems.</p>
                    <Link to="/services" className="text-primary font-semibold flex items-center hover:underline">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>
                <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-blue-50/50">
                    <Cpu className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">IoT Solutions</h3>
                    <p className="text-gray-600 mb-4">Smart connectivity for home and industry.</p>
                    <Link to="/services" className="text-primary font-semibold flex items-center hover:underline">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>
                <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-blue-50/50">
                    <Code className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Custom Software</h3>
                    <p className="text-gray-600 mb-4">Tailored applications for web and mobile.</p>
                    <Link to="/services" className="text-primary font-semibold flex items-center hover:underline">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to transform your business?</h2>
              <p className="text-xl text-gray-600 mb-8">Let's discuss how our intelligent solutions can drive your growth.</p>
              <Link to="/contact" className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                  Get Started Today
              </Link>
          </div>
      </section>
    </div>
  );
};

export default Home;