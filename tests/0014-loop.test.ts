describe('Loop statement', () => {
    it('should support for i statement', () => {
        const numbers = [1, 2, 3, 4, 5];
        let sum = 0;

        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }

        expect(sum).toBe(15);
    });

    it('should support for of statement', () => {
        const numbers = [1, 2, 3, 4, 5];
        let sum = 0;

        for (const number of numbers) {
            sum += number;
        }

        expect(sum).toBe(15);
    });

    it('should support for in statement', () => {
        const names = ["Mahmuddin", "Nurul", "Fajri"];

        for (const index in names) {
            console.log(index);
        }
    });

    it('should support while statement', () => {
        let i = 0;
        while (i < 5) {
            console.log(i);
            i++;
        }
    });

    it('should support do while statement', () => {
        let i = 0;
        do {
            console.log(i);
            i++;
        } while (i < 5);
    });
});