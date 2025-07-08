import React from 'react';
import { testimonialsData } from '../data/testimonialsData';
import { Images } from '../assets/assets';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="scroll-mt-24 py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-slab font-semibold mb-12">
          What Our Clients Say About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map(({ id, name, title, text, image, rating }) => (
            <div
            key={id}
            className="p-6 text-center flex flex-col items-center
                       md:text-left md:items-start 
                       md:bg-white md:rounded-xl md:shadow-xl"
          >
            {/* Avatar + Name */}
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={image}
                alt={name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-medium">{name}</p>
                <p className="text-sm text-gray-500">{title}</p>
              </div>
            </div>
          
            {/* Stars */}
            <div className="mb-4">
              <img
                src={Images.reviewIcon}
                alt="5 stars"
                className="h-4 mx-auto md:mx-0"
              />
            </div>
          
            {/* Testimonial */}
            <p className="text-gray-700 text-base font-light leading-relaxed text-center md:text-left">
              “{text}”
            </p>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;