import { cache } from 'react';

export const getShopId = cache(async (referer: string): Promise<number | null> => {
  const fullUrl = `http://${referer}`;

  const res = await fetch(
    process.env.NEXT_PUBLIC_SHOP_API_URL ||
      'https://shop-api-test-v2.ezone.ly/shop/getRequestShopId',
    {
      headers: {
        Referer: fullUrl,
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    // Optionally, throw or handle error here
    return null;
  }

  const data = await res.json();
  // Defensive: check shape
  if (!data?.Data?.Id || typeof data.Data.Id !== 'number') {
    return null;
  }
  return data.Data.Id;
});
