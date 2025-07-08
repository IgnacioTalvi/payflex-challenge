import React from 'react';
import { Images } from '../assets/assets';

const DownloadAppSection = () => {
  return (
    <section className="py-10 px-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8">
        
        {/* Imagen arriba */}
        <img
            src={Images.downloadAppImage}
            alt="Download App"
            className="w-40 md:w-48"
        />

        {/* Contenido centrado */}
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-slab font-semibold mb-4">
            Download Our App!
          </h2>
          <p className="text-gray-600 text-base font-light leading-relaxed mb-6">
          Get instant access to your earnings, anytime. Download PayFlex and take control of your finances — fast, simple, and secure.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
  href="https://play.google.com/store/apps/details?id=com.anonymous.blank"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src={Images.googlePlayIcon} alt="Google Play" className="h-12" />
</a>

     <a
        href="https://apps.apple.com/uy/app/payflex/id6651822569"
        target="_blank"
        rel="noopener noreferrer"
        >
  <img src={Images.appStoreIcon} alt="App Store" className="h-12" />
    </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;