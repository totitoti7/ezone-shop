import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  images: string[];
};

export default function ProductImageSlider({ images }: Props) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  // Fallback image and alt text if images is empty or missing
  const hasImages = images && images.length > 0;
  const IMAGEKIT_URL = process.env.NEXT_PUBLIC_IMAGEKIT_URL || '';
  const PLACEHOLDER_IMG = '/placeholder.svg';
  const imageSrc = hasImages ? `${IMAGEKIT_URL}${images[index]}` : PLACEHOLDER_IMG;
  const altText = hasImages ? `صورة المنتج ${index + 1}` : 'صورة افتراضية للمنتج';

  return (
    <div
      className="relative w-full flex items-center justify-center rounded-lg p-2"
      role="region"
      aria-label="صور المنتج"
    >
      <Image
        src={imageSrc}
        alt={altText}
        width={600}
        height={600}
        className="rounded-lg object-contain"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 600px"
      />
      {hasImages && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 text-blue-500"
            aria-label="الصورة السابقة"
          >
            <ChevronLeft size={50} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 text-blue-500"
            aria-label="الصورة التالية"
          >
            <ChevronRight size={50} />
          </button>
          <div className="absolute bottom-8 flex gap-2" aria-label="مؤشر الصور">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i === index ? 'bg-blue-600' : 'bg-gray-400'}`}
                aria-label={`صورة رقم ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
