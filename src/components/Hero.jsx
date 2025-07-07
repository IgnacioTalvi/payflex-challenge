import React from 'react';
import { Images } from '../assets/assets';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-[rgba(248,248,255,0.5)] overflow-hidden pt-16 md:pt-24"
    >
      <div className="container mx-auto max-w-screen-lg flex flex-col-reverse md:flex-row items-center justify-between gap-x-8 px-8 md:px-8 relative z-10">
        {/* Texto principal */}
        <div className="w-full text-center md:text-left mb-8 md:mb-0">
          <h1 className="font-slab text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            Boost Employee Retention and Attract Top Talent
          </h1>
          <p className="max-w-xl text-base sm:text-lg text-gray-600 mb-6 mx-auto md:mx-0">
            Provide your employees immediate access to their earned wages and other valuable benefits, at no cost to your company.
          </p>
          <a
            href="#request-demo"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 text-md font-regular shadow-lg shadow-blue-400/40"
          >
            Request a demo
          </a>
        </div>

        {/* Imagen del teléfono */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
          <img
            src={Images.phoneHeroMockup}
            alt="PayFlex App on Phone"
            className="w-[40%] sm:w-[50%] md:w-full max-w-[180px] sm:max-w-[260px] md:max-w-xs h-auto drop-shadow-md"          />
        </div>
      </div>

      {/* Mesh gradients */}
      <div className="absolute -top-40 -left-48 w-[600px] h-[600px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 z-0"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 z-0"></div>
    </section>
  );
};

export default HeroSection;