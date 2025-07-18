import Link from 'next/link';
import Image from 'next/image';
import { getShopId } from '@/lib/get-shop-id';
import { getProductDetail } from '@/lib/get-product-detail';
import { headers } from 'next/headers';

export default async function SaleSection() {
  const reqHeaders = await headers();
  const referer = reqHeaders.get('host') ?? 'localhost:58961';
  const sId = await getShopId(referer);

  if (!sId) {
    return (
      <section className="text-center text-red-600 font-bold py-10">
        فشل تحميل العروض بسبب مشكلة في الاتصال بالخادم.
      </section>
    );
  }

  const discountedProductIds = ['5516', '5517'];
  const products = await Promise.all(
    discountedProductIds.map(async (id) => {
      try {
        const data = await getProductDetail(id, String(sId));
        if (data?.Product) {
          return { ...data.Product, id };
        }
        return null;
      } catch (error) {
        console.error(`Failed to fetch product ${id}`, error);
        return null;
      }
    })
  );

  return (
    <section className="px-4 sm:px-6 md:px-20 space-y-4" aria-label="قسم التخفيضات">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold" tabIndex={0}>
          تخفيضات
        </h2>
        <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">حصرية</span>
      </div>
      <hr className="border border-gray-200 w-[100%] mx-auto md:w-full" />

      {products.filter(Boolean).length === 0 ? (
        <div className="text-center text-gray-500 py-8">لا توجد منتجات متوفرة حالياً.</div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 md:grid md:grid-cols-4 lg:grid-cols-5 md:gap-6 scrollbar-hide">
          {products.filter(Boolean).map((product) => {
            const discount =
              product.IsDiscounted && product.Caprice && product.SPrice
                ? Math.round(((+product.Caprice - +product.SPrice) / +product.Caprice) * 100)
                : 0;

            return (
              <Link
                key={product.Id}
                href={`/product/${product.Id}`}
                className="border rounded-lg p-2 relative overflow-hidden bg-white shadow hover:shadow-md transition  w-70 h-70 md:w-auto md:h-auto"
                aria-label={`عرض تفاصيل المنتج ${product.Name || product.Id}`}
              >
                {/* Discount Badge */}
                {discount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-sm px-2 py-1 rounded-bl-lg">
                    %{discount}
                  </span>
                )}

                {/* Product Image */}
                <div className="w-full h-48 flex items-center justify-center bg-white">
                  <Image
                    src={
                      product.CoverImg
                        ? `${process.env.NEXT_PUBLIC_IMAGEKIT_URL || ''}${product.CoverImg}`
                        : '/products/test-image.png'
                    }
                    alt={product.Name}
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>

                {/* Name */}
                <div className="mt-2 text-right text-sm font-semibold">{product.Name}</div>

                {/* Prices */}
                <div className="text-right mt-1">
                  {+product.Caprice !== +product.SPrice && (
                    <span className="text-gray-500 line-through ml-2 text-sm">
                      {+product.Caprice} د.ل
                    </span>
                  )}
                  <span className="text-red-600 font-bold text-md">{+product.SPrice} د.ل</span>
                </div>

                {/* Cart Icon */}
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
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
