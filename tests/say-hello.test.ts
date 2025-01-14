import { sayHello } from '../src/say-hello';

describe('sayHello', () => {
    it('should return Hello World', () => {
        expect(sayHello('World')).toBe('Hello World');
    });
});