import { Category, Product } from '../src/0002-type-alias';

describe('Type Alias', () => {
    it('should support in typescript', () => {
        const category: Category = {
            id: '1',
            name: 'Electronics'
        }

        const product: Product = {
            id: 2,
            name: 'iPhone',
            price: 10000,
            category: category
        }

        expect(product.category.id).toBe('1');
        expect(product.id).toBe(2);
        expect(product.category.name).toBe('Electronics');
    })
})