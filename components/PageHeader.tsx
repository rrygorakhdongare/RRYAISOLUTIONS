import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="relative bg-secondary py-16 md:py-28 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-[50%] -right-[20%] w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full bg-primary blur-[100px] md:blur-[150px]"></div>
        <div className="absolute bottom-[0%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-indigo-500 blur-[80px] md:blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3 md:mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto font-light px-2">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;