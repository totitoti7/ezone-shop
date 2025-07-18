'use client';

import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white shadow-2xl rounded-t-3xl pt-10 pb-4 px-6 md:px-20">
      <div className="grid md:grid-cols-3 gap-8 text-center md:text-right">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">ezone</h2>
          <p className="text-xl mb-4">متجر الكتروني مختص بمنتجات الهواتف وكمالياته</p>
          <div className="flex justify-center md:justify-start gap-4 text-gray text-xl">
            <FaInstagram />
            <FaFacebookF />
          </div>
        </div>
        {/* Contact Us */}
        <div>
          <h2 className="text-lg font-bold mb-4">تواصل معنا</h2>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <PhoneIcon className="h-5 w-5 text-gray-600" />
            <span>0920000000</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <PhoneIcon className="h-5 w-5 text-gray-600" />
            <span>0910000000</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <EnvelopeIcon className="h-5 w-5 text-gray-600" />
            <span>sephax.walou@gmail.com</span>
          </div>
        </div>
        {/* Payment Methods */}
        <div>
          <h2 className="text-lg font-bold mb-4">طرق الدفع</h2>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            {/* Payment logos - placeholders */}
            <div className="w-16 h-10 bg-gray-100 rounded" />
            <div className="w-16 h-10 bg-gray-100 rounded" />
            <div className="w-16 h-10 bg-gray-100 rounded" />
            <div className="w-16 h-10 bg-gray-100 rounded" />
            <div className="w-16 h-10 bg-gray-100 rounded" />
            <div className="w-16 h-10 bg-gray-100 rounded" />
            <div className="w-16 h-10 bg-gray-100 rounded" />
            <div className="w-16 h-10 bg-gray-100 rounded" />
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="border-t border-gray-200 mt-10 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-2">
        <div className="flex items-center gap-2">
          <span>جميع الحقوق محفوظة ©</span>
          <span>2025</span>
        </div>
        <div className="flex items-center gap-4">
          <span>سياسة الإستبدال والإسترجاع</span>
        </div>
      </div>
    </footer>
  );
}
