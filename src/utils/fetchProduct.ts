import type { ProductInterface } from '../components/product-wrapper/ProductWrapper';

export async function fetchProducts(): Promise<ProductInterface[]> {
  try {
    const response = await fetch(
      'https://dummyjson.com/products?limit=10&skip=10&select=title,price'
    );
    const data = await response.json();

    if (!data && !data?.products) {
      return [];
    }
    const products: ProductInterface[] = data.products.map(
      (item: { id: number; title: string; price: number }) => ({
        id: item.id,
        name: item.title,
        price: item.price,
      })
    );

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
