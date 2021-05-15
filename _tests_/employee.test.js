const Employee = require("../lib/employee")
describe('Employee', () => {
    it('can instantiate Employee instance', () => {
        const employee = new Employee()
        expect(employee).toBeTruthy();
    })
    it('can set name, id, and e-mail via constructor arguments', () => {
        const employee = new Employee('Michael Williams', 777, 'michaelwilliams@gmail.com');
        expect(employee.name).toEqual('Michael Williams');
        expect(employee.id).toEqual(777);
        expect(employee.email).toEqual('michaelwilliams@gmail.com')
    })
    it('can get name via getName() function', () => {
        const employee = new Employee('Michael Williams', 777, 'michaelwilliams@gmail.com');
        expect(employee.getName()).toEqual('Michael Williams');
    })
    it('can get id via getId() function', () => {
        const employee = new Employee('Michael Williams', 777, 'michaelwilliams@gmail.com');
        expect(employee.getId()).toEqual(777);
    })
    it('can get email via getEmail() function', () => {
        const employee = new Employee('Michael Williams', 777, 'michaelwilliams@gmail.com');
        expect(employee.getEmail()).toEqual('michaelwilliams@gmail.com')
    })
    it('getRole() should return Employee', () => {
        const employee = new Employee();
        expect(employee.getRole()).toEqual('Employee')
    })
})