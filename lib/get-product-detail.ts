export interface ProductImage {
  Src: string;
  [key: string]: any;
}
export interface ProductOption {
  CatName: string;
  Items: Array<{ ItemName: string; BcolorHex?: string }>;
}
export interface ProductDetail {
  Id: number;
  Name: string;
  Description: string;
  Caprice: number;
  SPrice: number;
  Code: string | null;
  CoverImg: string;
  IsDiscounted: boolean;
  IsPreOrder: boolean;
  IsVariant: boolean;
  NoQtySell: boolean;
  ProductImages: Array<ProductImage>;
  ProductOptions: Array<ProductOption>;
  Sku: string | null;
  StockQuantity: number;
  Wazn: string | null;
}

export interface RelatedProduct {
  Id: number;
  Name: string;
  Sprice: number | string;
  Caprice: number | string;
  Qty: number;
}

export interface ProductDetailResponse {
  Product: ProductDetail;
  RelatedProducts: Array<RelatedProduct>;
}

export async function getProductDetail(id: string, sId: string): Promise<ProductDetailResponse> {
  if (!sId) {
    throw new Error('Missing sId for product fetch');
  }

  const res = await fetch(`https://shop-api-test-v2.ezone.ly/ShopProducts/ProductDetail/${id}`, {
    headers: {
      sId: sId.toString(),
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product ${id}, status: ${res.status}`);
  }

  const data = await res.json();

  return data?.Data as ProductDetailResponse;
}
