describe('Any', () => {
    it('should must declare any', () => {
        const person: any = { name: 'Mahmuddin Nurul Fajri', age: 30, isVip: true };

        person.age = 31;
        person.name = 'Mahmud Nurul Fajri';
        person.isVip = false;
        expect(person.age).toBe(31);
        expect(person.name).toBe('Mahmud Nurul Fajri');
        expect(person.isVip).toBe(false);
    });
})