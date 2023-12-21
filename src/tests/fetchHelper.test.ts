// api.test.ts
import { expect, test, vi } from 'vitest';
import api from '../plugins/api';
import { fetchHelper } from '../plugins/fetchHelper';
import { ProductsResponse }from '../plugins/api';

// Mock the fetchHelper module
vi.mock('../plugins/fetchHelper', () => ({
    fetchHelper: vi.fn()
}));

test('getProductsUsingHelper successfully fetches products', async () => {
    // Mock data to simulate a successful response
    const mockProducts: ProductsResponse = {
        limit: 10,
        products: [],
        skip: 0,
        total: 50
    };

    // Mock implementation of fetchHelper
    (fetchHelper as vi.Mock).mockResolvedValue(mockProducts);

    // Perform the API call
    const result = await api.getProductsUsingHelper();

    // Assertions
    expect(fetchHelper).toHaveBeenCalledWith('https://dummyjson.com/products');
    expect(result).toEqual(mockProducts);
});

test('getProductsUsingHelper handles fetch error', async () => {
    // Mock implementation of fetchHelper to throw an error
    (fetchHelper as vi.Mock).mockRejectedValue(new Error('Network error'));

    // Perform the API call and handle the potential error
    try {
        await api.getProductsUsingHelper();
        throw new Error('Expected getProductsUsingHelper to throw');
    } catch (error) {
        // Assertions for error handling
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('Network error');
    }
});
