import React from 'react';
import { Images } from '../assets/assets';

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="max-w-screen-xl mx-auto px-8 md:px-10 lg:px-38 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Texto */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-slab font-semibold text-gray-900 leading-snug mb-10 text-center md:text-left">
            How <span className="text-blue-600">PayFlex</span> Empowers <br className="hidden md:block" /> Your Business
          </h2>

          <div className="space-y-10">
            {/* Benefit 1 */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 text-center md:text-left">
              <div className="mx-auto md:mx-0 p-4 bg-gray-100 rounded-xl flex items-center justify-center w-16 h-16 md:w-22 md:h-14">
                <img src={Images.benefitsIcon1} alt="Flexible Wage Access" className="w-6 h-6 md:w-5 md:h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Flexible Earned Wage Access</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Provide your employees immediate access to their earned wages, helping them manage unexpected expenses and reduce financial stress.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 text-center md:text-left">
              <div className="mx-auto md:mx-0 p-4 bg-gray-100 rounded-xl flex items-center justify-center w-16 h-16 md:w-22 md:h-14">
                <img src={Images.benefitsIcon2} alt="Zero Cost HR" className="w-6 h-6 md:w-5 md:h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Zero Cost & Streamlined HR Operations</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  PayFlex assumes all administrative and financial responsibilities for these benefits, ensuring no cost or additional burden for your company or HR department.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 text-center md:text-left">
              <div className="mx-auto md:mx-0 p-4 bg-gray-100 rounded-xl flex items-center justify-center w-16 h-16 md:w-22 md:h-14">
                <img src={Images.benefitsIcon3} alt="Employee Perks" className="w-6 h-6 md:w-5 md:h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Exclusive Employee Perks & Savings</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Enhance your compensation package with access to exclusive discounts with partner companies, preferential quotes, and special rates on travel insurance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="w-full md:w-1/2 justify-center md:justify-end hidden sm:flex">
          <img
            src={Images.benefitsImage}
            alt="Benefits visual"
            className="rounded-none h-full object-cover max-h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;