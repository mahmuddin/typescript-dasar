import { Seller } from "../src/0004-seller"
import { Employee, Manager } from "../src/0005-employee";
import { Person } from "../src/0006-person";

describe('Interface', () => {
    it('should support in typescript', () => {
        const seller: Seller = {
            id: 1,
            name: 'Seller 1',
            nib: '123456789',
            npwp: '987654321'
        }

        seller.name = 'Seller 2';

        expect(seller.id).toBe(1);
        expect(seller.name).toBe('Seller 2');
    });

    it('should support function interface', () => {
        interface AddFunction {
            (a: number, b: number): number;
        }

        const add: AddFunction = (a: number, b: number): number => {
            return a + b;
        }

        expect(add(1, 2)).toBe(3);
    });

    it('should support indexable interface', () => {
        interface StringArray {
            [index: number]: string;
        }

        const names: StringArray = ['Mahmuddin', 'Nurul'];

        expect(names[0]).toBe('Mahmuddin');
        expect(names[1]).toBe('Nurul');
    });

    it('should support indexable interface for non number index', () => {
        interface StringDictionary {
            [key: string]: string;
        }

        const dictionary: StringDictionary = {
            "name": 'Mahmuddin',
            "age": "30"
        }

        expect(dictionary["name"]).toBe('Mahmuddin');
        expect(dictionary["age"]).toBe('30');
    });

    it('should support extend interface', () => {
        const Employee: Employee = {
            id: 1,
            name: 'Mahmuddin',
            division: 'IT'
        }

        const Manager: Manager = {
            ...Employee,
            numberOfEmployees: 10
        }

        expect(Manager.id).toBe(1);
        expect(Manager.name).toBe('Mahmuddin');
        expect(Manager.division).toBe('IT');
        expect(Manager.numberOfEmployees).toBe(10);
    });

    it('should support function in interface', () => {

        const person: Person = {
            name: 'Mahmuddin',
            sayHello(name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        expect(person.sayHello('Nurul')).toBe('Hello Nurul, my name is Mahmuddin');
    });

    it('should support intersection type', () => {
        interface Person {
            name: string;
            age: number;
        }

        interface Employee {
            id: number;
            name: string;
            division: string;
        }

        type PersonEmployee = Person & Employee;

        const personEmployee: PersonEmployee = {
            id: 1,
            name: 'Mahmuddin',
            age: 30,
            division: 'IT'
        }

        expect(personEmployee.id).toBe(1);
        expect(personEmployee.name).toBe('Mahmuddin');
        expect(personEmployee.age).toBe(30);
        expect(personEmployee.division).toBe('IT');
    });

    it('should support type assertion', () => {
        const person: any = {
            name: 'Mahmuddin',
            age: 30
        }
        console.log(person);

        const person2: Person = person as Person;

        console.log(person2);

        person2.name = 'Fajri';

        person.age = 41;
        person.name = 'Nurul';

        expect(person.name).toBe('Nurul');
        expect(person.age).toBe(41);

        expect(person2.name).toBe('Nurul');

    })
});