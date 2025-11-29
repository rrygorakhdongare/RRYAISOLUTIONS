import React from 'react';
import PageHeader from '../components/PageHeader';
import { EDUCATION_PROGRAMS } from '../constants';
import { GraduationCap, BookOpen, Users, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Education: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader 
        title="Education & Training" 
        subtitle="Empowering the next generation of tech leaders through world-class training and mentorship." 
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Programs</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              We offer comprehensive learning paths for students, professionals, and corporate teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {EDUCATION_PROGRAMS.map((program, index) => (
              <div key={index} className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-secondary/20 z-10 hover:bg-secondary/0 transition-colors duration-300"></div>
                  <img 
                    src={program.imageUrl} 
                    alt={program.title} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{program.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full mt-auto bg-gray-50 text-primary font-semibold py-3 px-4 rounded-lg border border-gray-200 hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="lg:text-center mb-16">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Why Choose RRY Academy?</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Learning Beyond Textbooks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-primary rounded-full mb-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industry-Ready Skills</h3>
              <p className="text-gray-600">Our curriculum is designed by industry experts to ensure you learn technologies that are in demand.</p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-primary rounded-full mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Practical Learning</h3>
              <p className="text-gray-600">Focus on hands-on projects, code-alongs, and real-world case studies rather than just theory.</p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-primary rounded-full mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Mentorship</h3>
              <p className="text-gray-600">Get guidance from experienced developers and engineers who are currently working in the field.</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Education;
