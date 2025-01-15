describe('Function', () => {
    it('should support function', () => {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello('Mahmuddin')).toBe('Hello Mahmuddin');

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }

        printHello('Mahmuddin');
        expect(printHello('Mahmuddin')).toBe(undefined);
    });

    it('should support default value', () => {
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`;
        }

        expect(sayHello('Mahmuddin')).toBe('Hello Mahmuddin');
        expect(sayHello()).toBe('Hello Guest');
    });

    it('should support rest parameter', () => {
        function sum(...numbers: number[]): number {
            let total = 0;
            for (const number of numbers) {
                total += number;
            }
            return total;
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

    it('should support optional parameter', () => {
        function sayHello(fistName: string, lastName?: string): string {
            if (lastName) {
                return `Hello ${fistName} ${lastName}`;
            } else {
                return `Hello ${fistName}`;
            }
        }

        sayHello("Mahmuddin", "Nurul");
        expect(sayHello("Mahmuddin", "Nurul")).toBe('Hello Mahmuddin Nurul');
        expect(sayHello("Mahmuddin")).toBe('Hello Mahmuddin');
    });

    it('should support function overloading', () => {
        function callMe(value: string): string;
        function callMe(value: number): number;
        function callMe(value: any): any {
            if (typeof value === 'string') {
                return value.toUpperCase();
            } else if (typeof value === 'number') {
                return value * 10;
            }
        }

        expect(callMe(10)).toBe(100);
        expect(callMe('Hello')).toBe('HELLO');
    });

    it('should support function as parameter', () => {
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`;
        }

        function toUpper(name: string): string {
            return name.toUpperCase();
        }

        expect(sayHello('Mahmuddin', toUpper)).toBe('Hello MAHMUDDIN');
    });

    it('should support anonymous function', () => {
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`;
        }

        expect(sayHello('Mahmuddin', function (name: string): string {
            return name.toUpperCase();
        })).toBe('Hello MAHMUDDIN');

        expect(sayHello('Mahmudin', (name: string): string => name.toUpperCase())).toBe('Hello MAHMUDIN');
    });

});