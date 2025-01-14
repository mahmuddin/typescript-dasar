describe('Object type', () => {
    it('should support in typescript', () => {
        const person: { id: string, name: string, hobbies?: string[] } = {
            id: '1',
            name: 'John'
        };

        person.id = '123';
        person.name = 'John Doe';

        expect(person).toEqual({ id: '123', name: 'John Doe' });
    });
});