import React from 'react';
import { Images } from '../assets/assets'; // Asegúrate de tener los logos aquí

const PartnersSection = () => {
  return (
    <section
      id="partners"
      className="py-20 bg-white relative z-10"
    >
      <div className="container mx-auto px-4 md:px-8 text-center pt-16">
        <h5 className="text-2xl md:text-2xl font-slab font-regular text-gray-800 mb-8 pb-10">
          Trusted by Industry Leaders
        </h5>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="w-40 h-20 flex items-center justify-center">
            <img
              src={Images.microsoftLogo}
              alt="Microsoft"
              className="max-h-full max-w-full object-contain scale-110 transition-transform duration-300 ease-in-out hover:scale-115"
            />
          </div>
          <div className="w-40 h-20 flex items-center justify-center">
            <img
              src={Images.appleLogo}
              alt="Apple"
              className="max-h-full max-w-full object-contain transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <div className="w-40 h-20 flex items-center justify-center">
            <img
              src={Images.googleLogo}
              alt="Google"
              className="max-h-full max-w-full object-contain transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;