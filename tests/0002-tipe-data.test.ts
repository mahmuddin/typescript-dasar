describe('Tipe Data', () => {
    it('should must declare type', () => {
        let name: string = 'Mahmuddin Nurul Fajri';
        let balance: number = 1000;
        let isVip: boolean = true;

        expect(typeof name).toBe('string');
        expect(typeof balance).toBe('number');
        expect(typeof isVip).toBe('boolean');
    });
});