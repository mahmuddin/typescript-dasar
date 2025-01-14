describe('Union Type', () => {
    it('should must declare union type', () => {
        let name: string | number = 'Mahmuddin Nurul Fajri';
        let age: number | string = 30;
        let isVip: number | boolean | string = true;

        isVip = 'true';

        expect(typeof name).toBe('string');
        expect(typeof age).toBe('number');
        expect(typeof isVip).toBe('string');
    });

    it('should support union type', () => {
        function process(value: number | string | boolean) {
            if (typeof value === 'number') {
                return value + 2;
            }
            else if (typeof value === 'string') {
                return value.toUpperCase();
            }
            else if (typeof value === 'boolean') {
                return !value;
            }
        }

        expect(process("mahmuddin")).toBe('MAHMUDDIN');
        expect(process(true)).toBe(false);
        expect(process(10)).toBe(12);
    });
})