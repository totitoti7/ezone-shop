'use client';

import Image from 'next/image';

export default function RelatedProducts({ products }) {
  return (
    <div className="max-w-7xl mx-auto mt-10 bg-white p-6 rounded shadow space-y-6">
      <h2 className="text-2xl font-bold text-right">منتجات شبيهة</h2>
      <div className="flex flex-col items-center gap-6 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {products.map((product) => {
          const discount =
            product.IsDiscounted && product.Caprice && product.Sprice
              ? Math.round(((+product.Caprice - +product.Sprice) / +product.Caprice) * 100)
              : 0;

          return (
            <div
              key={product.Id}
              className="w-full max-w-[280px] border rounded-lg p-2 relative overflow-hidden bg-white shadow"
            >
              {discount > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-sm px-2 py-1 rounded-bl-lg">
                  %{discount}
                </span>
              )}

              <div className="w-full h-48 flex items-center justify-center bg-white">
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL || ''}${product.CoverImg}`}
                  alt={product.Name}
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>

              <div className="mt-2 text-right text-sm font-semibold">{product.Name}</div>

              <div className="text-right mt-1">
                {+product.Caprice !== +product.Sprice && (
                  <span className="text-gray-500 line-through ml-2 text-sm">
                    {+product.Caprice} د.ل
                  </span>
                )}
                <span className="text-red-600 font-bold text-md">{+product.Sprice} د.ل</span>
              </div>

              <div className="absolute bottom-0 left-0 bg-green-600 p-2 rounded-tr-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 5.2a1 1 0 001 .8h11a1 1 0 001-.8L17 13M7 13l.4-2M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
