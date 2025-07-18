'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuUser, LuShoppingCart, LuSearch } from 'react-icons/lu';

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-gray-200 px-[50px] py-[10px] h-[190px] flex flex-col md:flex-row md:items-center md:justify-between"
      role="banner"
    >
      {/* Logo */}
      <div className="flex items-center justify-between md:justify-start">
        <Link href="/" className="shrink-0">
          <Image src="/EzoneLogo.png" alt="شعار Ezone" width={100} height={100} priority />
        </Link>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center gap-3">
          <button className="p-2 bg-gray-100 rounded-md" aria-label="حساب المستخدم">
            <LuUser size={24} />
          </button>
          <button className="p-2 bg-gray-100 rounded-md" aria-label="سلة التسوق">
            <LuShoppingCart size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Icons + Search Wrapper */}
      <div className="flex flex-col md:flex-row md:items-center md:flex-1 md:justify-center w-full gap-4 mt-4 md:mt-0">
        {/* Search Bar */}
        <form className="w-full flex justify-center md:justify-center" aria-label="بحث المنتجات">
          <div className="relative w-[90%] min-w-[200px] max-w-[550px]">
            <input
              type="text"
              placeholder="إبحث بإسم أو كود المنتج"
              className="w-full border border-gray-300 rounded-full py-1 pr-10 pl-4 outline-none text-[20px] md:text-[25px] text-right"
              aria-label="حقل البحث"
            />
            <LuSearch
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
              size={20}
              aria-label="زر البحث"
            />
          </div>
        </form>
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:flex items-center gap-3">
        <button className="p-2 bg-gray-100 rounded-md" aria-label="حساب المستخدم">
          <LuUser size={24} />
        </button>
        <button className="p-2 bg-gray-100 rounded-md" aria-label="سلة التسوق">
          <LuShoppingCart size={24} />
        </button>
      </div>
    </header>
  );
}
