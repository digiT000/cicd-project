import { test, expect, vi } from 'vitest';
import Product from '../../components/product/Product';
import { render } from 'vitest-browser-react';
import type { ProductInterface } from '../../components/product-wrapper/ProductWrapper';
import '../../App.css';
import '../../index.css';

test('Product Component - Renders product details', async () => {
  const mockProduct: ProductInterface = {
    id: 1,
    name: 'Test Product',
    price: 29.99,
  };

  const mockHandleAddToCart = vi.fn();

  const screen = await render(
    <Product
      inCart={false}
      product={mockProduct}
      handleAddToCart={mockHandleAddToCart}
    />
  );

  // Test that product name is displayed
  await screen.getByText('Test Product');

  // Test that price is displayed with proper formatting
  await screen.getByText('$29.99');

  // Test that Add to Cart button is present
  await screen.getByText('Add to Cart');
});

test('Product Component - Price Formatting', async () => {
  const mockProduct: ProductInterface = {
    id: 2,
    name: 'Expensive Item',
    price: 100,
  };

  const mockHandleAddToCart = vi.fn();

  const screen = await render(
    <Product
      inCart={false}
      product={mockProduct}
      handleAddToCart={mockHandleAddToCart}
    />
  );

  // Test price formatting for whole numbers
  await screen.getByText('$100.00');
});

test('Product Component - Add to Cart button click', async () => {
  const mockProduct: ProductInterface = {
    id: 3,
    name: 'Interactive Product',
    price: 15.5,
  };

  const mockHandleAddToCart = vi.fn();

  const screen = await render(
    <Product
      inCart={false}
      product={mockProduct}
      handleAddToCart={mockHandleAddToCart}
    />
  );

  const addButton = await screen.getByRole('button', { name: /add to cart/i });

  // Click the button
  await addButton.click();

  // Verify handleAddToCart was called with the correct product
  expect(mockHandleAddToCart).toHaveBeenCalledTimes(1);
  expect(mockHandleAddToCart).toHaveBeenCalledWith(mockProduct);
});

// test('Product Component - In Cart state shows "In Cart" text', async () => {
//   const mockProduct: ProductInterface = {
//     id: 4,
//     name: 'Product In Cart',
//     price: 25.99,
//   };

//   const mockHandleAddToCart = vi.fn();

//   const screen = await render(
//     <Product
//       inCart={true}
//       product={mockProduct}
//       handleAddToCart={mockHandleAddToCart}
//     />
//   );

//   // Test that product details are still displayed
//   await screen.getByText('Product In Cart');
//   await screen.getByText('$25.99');

//   // // Test button text changes when item is in cart
//   // await screen.getByText('In Cart');

//   // Verify "Add to Cart" text is not present
//   expect(() => screen.getByText('Add to Cart')).toThrow();
// });

// test('Product Component - Button text changes based on inCart prop', async () => {
//   const mockProduct: ProductInterface = {
//     id: 5,
//     name: 'State Test Product',
//     price: 12.5,
//   };

//   const mockHandleAddToCart = vi.fn();

//   // Test with inCart = false
//   const screenNotInCart = await render(
//     <Product
//       inCart={false}
//       product={mockProduct}
//       handleAddToCart={mockHandleAddToCart}
//     />
//   );
//   await screenNotInCart.getByText('Add to Cart');

//   // // Test with inCart = true
//   // const screenInCart = await render(
//   //   <Product
//   //     inCart={true}
//   //     product={mockProduct}
//   //     handleAddToCart={mockHandleAddToCart}
//   //   />
//   // );
//   // await screenInCart.getByText('In Cart');
// });

// test('Product Component - Button click still works when in cart', async () => {
//   const mockProduct: ProductInterface = {
//     id: 6,
//     name: 'Clickable In Cart',
//     price: 49.99,
//   };

//   const mockHandleAddToCart = vi.fn();

//   const screen = await render(
//     <Product
//       inCart={true}
//       product={mockProduct}
//       handleAddToCart={mockHandleAddToCart}
//     />
//   );

//   const button = await screen.getByRole('button', { name: /in cart/i });
//   await button.click();

//   // Verify handler is still called even when in cart
//   expect(mockHandleAddToCart).toHaveBeenCalledTimes(1);
//   expect(mockHandleAddToCart).toHaveBeenCalledWith(mockProduct);
// });

test('Product Component - Decimal price formatting', async () => {
  const mockProduct: ProductInterface = {
    id: 7,
    name: 'Decimal Price Product',
    price: 9.5,
  };

  const mockHandleAddToCart = vi.fn();

  const screen = await render(
    <Product
      inCart={false}
      product={mockProduct}
      handleAddToCart={mockHandleAddToCart}
    />
  );

  // Test that single decimal is formatted to two decimals
  await screen.getByText('$9.50');
});
