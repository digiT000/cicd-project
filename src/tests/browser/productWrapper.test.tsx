import { describe, test, beforeEach, afterEach, vi, expect } from 'vitest';

import { SWRConfig } from 'swr';
import ProductCartWrapper from '../../components/shared/ProductCartWrapper';
import { render } from 'vitest-browser-react';

const SWRTestWrapper = ({ children }: { children: React.ReactNode }) => (
  <SWRConfig value={{ provider: () => new Map(), dedupingInterval: 0 }}>
    {children}
  </SWRConfig>
);

describe('Product Wrapper Component Tests', () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test('Product Wrapper - Displays loading state', async () => {
    // Mock a slow response to catch loading state
    globalThis.fetch = vi.fn().mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                ok: true,
                json: async () => ({
                  products: [{ id: 1, title: 'Test Product', price: 100 }],
                }),
              }),
            1000
          )
        )
    );

    const screen = render(
      <SWRTestWrapper>
        <ProductCartWrapper />
      </SWRTestWrapper>
    );

    // Check if loading message appears
    const loadingMessage = (await screen).getByTestId('loading-products');
    expect(loadingMessage).toBeTruthy();
    expect((await screen).getByText('Loading products...')).toBeTruthy();
  });

  test('Product Wrapper - Loads and displays products from API', async () => {
    // CORRECT: Mock response should match the API structure with 'products' key
    const mockResponse = {
      products: [
        { id: 1, title: 'Wireless Headphones', price: 59.99 },
        { id: 2, title: 'Mechanical Keyboard', price: 120.5 },
        { id: 3, title: 'Gaming Mouse', price: 45.0 },
        { id: 4, title: 'USB-C Hub', price: 25.99 },
      ],
    };

    globalThis.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const screen = render(
      <SWRTestWrapper>
        <ProductCartWrapper />
      </SWRTestWrapper>
    );

    // Initially should show loading
    expect((await screen).getByTestId('loading-products')).toBeTruthy();

    // Wait for products to load
    const productItems = await (await screen).getByTestId('product-item').all();

    expect(productItems.length).toBe(4);
    expect(globalThis.fetch).toHaveBeenCalledWith(
      'https://dummyjson.com/products?limit=10&skip=10&select=title,price'
    );
  });

  test('Product Wrapper - Handles empty products array', async () => {
    globalThis.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        products: [],
      }),
    });

    const screen = render(
      <SWRTestWrapper>
        <ProductCartWrapper />
      </SWRTestWrapper>
    );

    // Wait for loading to finish
    await (await screen).getByTestId('product-wrapper-container');

    // Should not have any product items
    const productItems = (await screen).getByTestId('product-item').all();
    expect(productItems.length).toBe(0);
  });
});
