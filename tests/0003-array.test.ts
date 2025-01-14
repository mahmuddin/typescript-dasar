describe('Array', () => {
    it('should must declare array', () => {
        let array: string[] = ['Mahmuddin Nurul Fajri', 'Muhammad'];
        let array2: number[] = [1, 2, 3, 4, 5];
        let array3: boolean[] = [true, false];

        expect(typeof array).toBe('object');
        expect(typeof array2).toBe('object');
        expect(typeof array3).toBe('object');
    });

    it('should support readonly array', () => {
        const hobbies: ReadonlyArray<string> = ['reading', 'cooking', 'coding'];

        expect(hobbies.length).toBe(3);
        expect(hobbies[0]).toBe('reading');
        expect(hobbies[1]).toBe('cooking');
        expect(hobbies[2]).toBe('coding');
    });

    it('should support tuple', () => {
        const person: readonly [string, number, boolean] = ['Mahmuddin', 1000, true];

        expect(person[0]).toBe('Mahmuddin');
        expect(person[1]).toBe(1000);
        expect(person[2]).toBe(true);
    });
});
