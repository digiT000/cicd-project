import { test } from 'vitest';
import { render } from 'vitest-browser-react';
import ProductCartWrapper from '../../components/shared/ProductCartWrapper';
import type { ProductInterface } from '../../components/product-wrapper/ProductWrapper';

test('Product Wrapper - Add to Cart button click', async () => {
  const products: ProductInterface[] = [
    { id: 1, name: 'Wireless Headphones', price: 59.99 },
    { id: 2, name: 'Mechanical Keyboard', price: 120.5 },
    { id: 3, name: 'Gaming Mouse', price: 45.0 },
    { id: 4, name: 'USB-C Hub', price: 25.99 },
  ];

  const screen = await render(<ProductCartWrapper />);

  await screen.getByTestId('product-wrapper-container');
  const cart = await screen.getByTestId('cart-wrapper-container');

  const addToCartButtons = [];
  for (const product of products) {
    await screen.getByText(product.name);
    await screen.getByText(`$${product.price.toFixed(2)}`);
    const button = await screen.getByTestId(`add-to-cart-button-${product.id}`);
    addToCartButtons.push(button);
  }

  // Simulate adding each product to the cart
  await addToCartButtons[0].click();
  await addToCartButtons[1].click();

  await cart.getByText(products[0].name);
  await cart.getByText(products[1].name);
});
