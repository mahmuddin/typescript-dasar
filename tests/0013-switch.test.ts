describe('Switch statement', () => {
    it('should support switch statement', () => {
        function sayHello(name: string): string {
            switch (name) {
                case 'Mahmuddin':
                    return 'Hello Mahmuddin';
                case 'Nurul':
                    return 'Hello Nurul';
                default:
                    return 'Hello';
            }
        }

        expect(sayHello('Mahmuddin')).toBe('Hello Mahmuddin');
        expect(sayHello('Nurul')).toBe('Hello Nurul');
        expect(sayHello('Fajri')).toBe('Hello');
    });
});