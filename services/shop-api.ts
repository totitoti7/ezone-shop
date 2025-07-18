export async function getShopId(referer: string): Promise<number> {
  const res = await fetch('https://shop-api-test-v2.ezone.ly/shop/getRequestShopId', {
    headers: {
      Referer: `http://${referer}`,
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error('Failed to fetch sId:', res.status);
    throw new Error('Unable to retrieve sId');
  }

  const data = await res.json();
  return data?.data?.sId;
}

export async function getProductDetail(id: string, sId: string) {
  const res = await fetch(`https://shop-api-test-v2.ezone.ly/ShopProducts/ProductDetail/${id}`, {
    headers: {
      sId,
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error('Failed to fetch product detail:', res.status);
    throw new Error('Unable to fetch product detail');
  }

  const data = await res.json();
  return data?.data;
}
