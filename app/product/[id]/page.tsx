import Link from 'next/link';
import { getShopId } from '@/lib/get-shop-id';
import { getProductDetail } from '@/lib/get-product-detail';
import { headers } from 'next/headers';
import ProductDetailsCard from '@/components/product/details-card';
import ProductDescriptionCard from '@/components/product/description-card';
import RelatedProducts from '@/components/product/related-products';
import CopyShareActions from '@/components/product/copy-share-actions';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const reqHeaders = await headers();
  const referer = reqHeaders.get('host') ?? 'localhost:58961';
  const sId = await getShopId(referer);

  if (!sId) throw new Error('getShopId failed. No sId received.');

  const { Product: product, RelatedProducts: relatedProducts } = await getProductDetail(
    id,
    sId.toString()
  );

  return (
    <div className="bg-[var(--background)] min-h-screen p-4 space-y-8">
      <div className="max-w-7xl mx-auto flex items-center gap-6 text-right mt-12 mb-6">
        {/* Back Button */}
        <Link
          href="/"
          className="flex items-center gap-2 border border-gray-300 px-3 py-2 md:px-4 md:py-3 rounded hover:bg-gray-100"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-6 md:h-6 rotate-180">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </Link>

        {/* Title & Actions */}
        <div className="flex items-center gap-6 text-gray-500 font-semibold text-4xl ml-6">
          <span className="text-xl md:text-4xl">{product?.Name || 'المنتج'}</span>
          <CopyShareActions url={`https://${referer}/product/${id}`} />
        </div>
      </div>

      <ProductDetailsCard product={product} />
      <ProductDescriptionCard description={product?.Description || ''} />
      <RelatedProducts products={relatedProducts} />
    </div>
  );
}
