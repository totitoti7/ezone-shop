'use client';

import { useState } from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProductImageSlider from './image-slider';
import { ProductDetail } from '@/lib/get-product-detail';

type Props = {
  product: ProductDetail;
};

export default function ProductDetailsCard({ product }: Props) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<number>(0);

  let sizes: string[] = [];
  let colors: string[] = [];

  // Add sizes and colors from ProductOptions if present
  if (Array.isArray(product.ProductOptions)) {
    const sizeOption = product.ProductOptions.find((opt) => opt.CatName === 'رقم');
    if (sizeOption && Array.isArray(sizeOption.Items)) {
      sizes = sizes.concat(sizeOption.Items.map((item) => item.ItemName));
    }
    const colorOption = product.ProductOptions.find((opt) => opt.CatName.includes('ألوان'));
    if (colorOption && Array.isArray(colorOption.Items)) {
      colors = colors.concat(
        colorOption.Items.map((item) => item.BcolorHex.trim() || item.ItemName)
      );
    }
  }

  // Defensive fallback for images
  const images =
    product && product.ProductImages ? product.ProductImages.map((img) => img.Src) : [];
  return (
    <section
      className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-12 flex flex-col md:flex-row gap-12"
      aria-label="تفاصيل المنتج"
    >
      {/* Product Image */}
      <div className="w-full md:w-1/2">
        <ProductImageSlider images={images} />
      </div>
      {/* Product Details */}
      <div className="w-full md:w-1/2 space-y-6 text-right">
        <h2 className="text-4xl" tabIndex={0} aria-label="سعر المنتج">
          <span className="text-gray-500 line-through ml-2">{product?.Caprice ?? ''} د.ل </span>
          <span className="text-red-600 font-bold">{product?.SPrice ?? ''} د.ل </span>
        </h2>
        <div className="flex flex-col items-start gap-2">
          <div className="flex gap-1" aria-label="تقييم المنتج">
            {[...Array(5)].map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedRating(i + 1)}
                className="bg-transparent border-none p-0 cursor-pointer"
                aria-label={`اختر تقييم ${i + 1} نجوم`}
              >
                <Star
                  className={`w-5 h-5 ${
                    selectedRating >= i + 1 ? 'text-yellow-400' : 'text-gray-400'
                  }`}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
          <span className="text-xl text-black-500">0 التقييمات | كتابة تعليق</span>
        </div>
        <hr className="my-4 border-t border-gray-300" />
        {sizes.length > 0 && (
          <div>
            <p className="text-xl text-black font-bold mb-4">رقم</p>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    'p-1 rounded-full cursor-pointer',
                    selectedSize === size && 'border-[2px] border-red-600 border-dashed'
                  )}
                  aria-label={`اختيار المقاس ${size}`}
                  title={size}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-400 text-sm px-2">
                    {size}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
        {colors.length > 0 && (
          <div>
            <p className="text-xl text-black font-bold mb-4">ألوان متاحة</p>
            <div className="flex gap-3">
              {colors.map((color) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={cn(
                    'p-1 rounded-full cursor-pointer',
                    selectedColor === color && 'border-[2px] border-red-600 border-dashed'
                  )}
                  aria-label={`اختيار اللون ${color}`}
                >
                  <div
                    className={cn(
                      'w-12 h-12 rounded-full',
                      selectedColor === color ? '' : 'border border-gray-400'
                    )}
                    style={{
                      backgroundColor: color,
                      border: selectedColor === color ? `4px solid ${color}` : '1px solid #ccc',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        <button
          className="mt-10 w-full bg-gray-100 border border-gray-300 py-4 rounded text-black text-xl font-semibold hover:bg-gray-200 transition flex items-center justify-center gap-2"
          aria-label="إضافة المنتج للسلة"
        >
          أضف للسلة
          <ShoppingCart className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
