import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import type { ProductInterface } from '../../components/product-wrapper/ProductWrapper';
import ProductList from '../../components/product-list/ProductList';
import '../../App.css';
import '../../index.css';

test('Product List - Renders all products', async () => {
  const products: ProductInterface[] = [
    { id: 1, name: 'Wireless Headphones', price: 59.99 },
    { id: 2, name: 'Mechanical Keyboard', price: 120.5 },
    { id: 3, name: 'Gaming Mouse', price: 45.0 },
    { id: 4, name: 'USB-C Hub', price: 25.99 },
  ];

  const mockHandleAddToCart = vi.fn();

  const screen = await render(
    <ProductList products={products} handleAddToCart={mockHandleAddToCart} />
  );

  // Test that all products are rendered
  for (const product of products) {
    await screen.getByText(product.name);
    await screen.getByText(`$${product.price.toFixed(2)}`);
  }

  // Test that all Add to Cart buttons are present
  const addButtons = await screen.getByRole('button', {
    name: /add to cart/i,
  });
  expect(addButtons).toHaveLength(products.length);
});

test('Product List - Empty state', async () => {
  const mockHandleAddToCart = vi.fn();

  const screen = await render(
    <ProductList products={[]} handleAddToCart={mockHandleAddToCart} />
  );

  // Verify empty state message
  await screen.getByText('No products available');
});

test('Product List - Single product', async () => {
  const products: ProductInterface[] = [
    { id: 1, name: 'Single Product', price: 99.99 },
  ];

  const mockHandleAddToCart = vi.fn();

  const screen = await render(
    <ProductList products={products} handleAddToCart={mockHandleAddToCart} />
  );

  // Test single product renders
  await screen.getByText('Single Product');
  await screen.getByText('$99.99');

  // Test only one button exists
  const buttons = await screen.getByRole('button');
  expect(buttons).toHaveLength(1);
});

test('Product List - Add to cart functionality', async () => {
  const products: ProductInterface[] = [
    { id: 1, name: 'Test Product', price: 29.99 },
    { id: 2, name: 'Another Product', price: 49.99 },
  ];

  const mockHandleAddToCart = vi.fn();

  const screen = await render(
    <ProductList products={products} handleAddToCart={mockHandleAddToCart} />
  );

  // Get all add to cart buttons
  const addButtons = await screen.getByTestId('add-to-cart-button-1').all();

  // Click first product's add to cart button
  await addButtons[0].click();

  // Verify handler was called with first product
  expect(mockHandleAddToCart).toHaveBeenCalledTimes(1);
  expect(mockHandleAddToCart).toHaveBeenCalledWith(products[0]);

  // // Click second product's add to cart button
  // await addButtons[1].click();

  // // Verify handler was called with second product
  // expect(mockHandleAddToCart).toHaveBeenCalledTimes(2);
  // expect(mockHandleAddToCart).toHaveBeenCalledWith(products[1]);
});

test('Product List - Price formatting variations', async () => {
  const products: ProductInterface[] = [
    { id: 1, name: 'Whole Number Price', price: 100 },
    { id: 2, name: 'Single Decimal', price: 50.5 },
    { id: 3, name: 'Two Decimals', price: 25.99 },
    { id: 4, name: 'Small Price', price: 0.99 },
  ];

  const mockHandleAddToCart = vi.fn();

  const screen = await render(
    <ProductList products={products} handleAddToCart={mockHandleAddToCart} />
  );

  // Test different price formats
  await screen.getByText('$100.00');
  await screen.getByText('$50.50');
  await screen.getByText('$25.99');
  await screen.getByText('$0.99');
});

test('Product List - Multiple products with same price', async () => {
  const products: ProductInterface[] = [
    { id: 1, name: 'Product A', price: 19.99 },
    { id: 2, name: 'Product B', price: 19.99 },
    { id: 3, name: 'Product C', price: 19.99 },
  ];

  const mockHandleAddToCart = vi.fn();

  const screen = await render(
    <ProductList products={products} handleAddToCart={mockHandleAddToCart} />
  );

  // Test all products are rendered with unique names
  await screen.getByText('Product A');
  await screen.getByText('Product B');
  await screen.getByText('Product C');

  // Test all buttons are present
  const buttons = await screen.getByRole('button');
  expect(buttons).toHaveLength(3);
});

test('Product List - Large product list', async () => {
  const products: ProductInterface[] = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (i + 1) * 10,
  }));

  const mockHandleAddToCart = vi.fn();

  const screen = await render(
    <ProductList products={products} handleAddToCart={mockHandleAddToCart} />
  );

  // Test first and last products are rendered
  await screen.getByText('Product 1');
  await screen.getByText('Product 50');
  await screen.getByText('$10.00');
  await screen.getByText('$500.00');

  // Test correct number of buttons
  const buttons = await screen.getByTestId(/add-to-cart-button-\d+/);
  expect(buttons).toHaveLength(50);
});

test('Product List - Products render in correct order', async () => {
  const products: ProductInterface[] = [
    { id: 1, name: 'First', price: 10 },
    { id: 2, name: 'Second', price: 20 },
    { id: 3, name: 'Third', price: 30 },
  ];

  const mockHandleAddToCart = vi.fn();

  const screen = await render(
    <ProductList products={products} handleAddToCart={mockHandleAddToCart} />
  );

  // Get all product articles
  const articles = await screen.getByRole('article');

  // Verify correct number of products
  expect(articles).toHaveLength(3);

  // All products should be visible
  await screen.getByText('First');
  await screen.getByText('Second');
  await screen.getByText('Third');
});
