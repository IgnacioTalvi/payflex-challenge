import React, { useState } from 'react';
import { faqData } from '../data/faqData';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 scroll-mt-28">
        <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-slab font-semibold mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
                <div
                    key={index}
                    className="bg-white shadow-lg rounded-xl transition-all duration-300 overflow-hidden"
                    >
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-800 font-semibold text-base md:text-lg"
                    >
                        {item.question}
                        <span className="text-2xl font-light">
                        {openIndex === index ? '×' : '+'}
                        </span>
                    </button>

                    <div
                        className={`px-6 text-sm md:text-base text-gray-600 transition-all duration-500 ease-in-out overflow-hidden will-change-transform ${
                        openIndex === index
                            ? 'max-h-[500px] opacity-100'
                            : 'max-h-0 opacity-0'
                        } text-left`}
                    >
                        <div className="py-2">{item.answer}</div>
                    </div>
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;