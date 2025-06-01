export enum CustomerType {
    REGULAR = 'REGULAR',
    GOLD = 'GOLD',
    PLATINUM = 'PLATINUM'
}

export type Customer = {
    id: string;
    name: string;
    type: CustomerType;
}