import React from 'react';
import { Images } from '../assets/assets';

const HeroSection = () => {
  return (
    <section
    id="home"
    className="relative min-h-screen w-full flex items-center justify-center bg-[rgba(248,248,255,0.5)] overflow-hidden pt-16 md:pt-24"
  >
      <div className="container mx-auto max-w-screen-lg flex flex-col-reverse md:flex-row items-center justify-between gap-x-8 px-4 md:px-8 relative z-10">
        {/* Texto principal */}
        <div className="w-full text-left mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            Boost Employee Retention and Attract Top Talent
          </h1>
          <p className="max-w-xl text-lg text-gray-600 mb-8">
            Provide your employees immediate access to their earned wages and other valuable benefits, at no cost to your company.
          </p>
          <a
            href="#request-demo"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 text-lg font-regular shadow-lg shadow-blue-400/40"
          >
            Request a demo
          </a>
        </div>

        {/* Imagen del teléfono */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={Images.phoneHeroMockup}
            alt="PayFlex App on Phone"
            className="w-full max-w-xs h-auto drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;