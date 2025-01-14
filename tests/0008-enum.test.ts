import { Customer, CustomerType } from "../src/0003-enum";

describe('Enum', () => {
    it('should support in typescript', () => {
        const customer: Customer = {
            id: '1',
            name: 'John',
            type: CustomerType.REGULAR
        };

        customer.id = '123';
        customer.name = 'John Doe';
        customer.type = CustomerType.GOLD;

        expect(customer).toEqual({ id: '123', name: 'John Doe', type: CustomerType.GOLD });
    });
});