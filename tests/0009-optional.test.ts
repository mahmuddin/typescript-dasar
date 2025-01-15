describe('Optional Parameter', () => {
    it('should support null and undefined', () => {
        function sayHello(name?: string | null) {
            if (name) {
                return `Hello ${name}`;

            } else {
                return 'Hello';
            }
        }

        sayHello("Mahmuddin");
        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);

        expect(sayHello("Mahmuddin")).toBe('Hello Mahmuddin');
        expect(sayHello(undefined)).toBe('Hello');
        expect(sayHello(null)).toBe('Hello');
    })
});