const Manager = require("../lib/Manager")
describe('officeNumber', () => {
    it('should set office number via constructor', () => {
        const manager = new Manager('Nicole Adams', 456, 'nicoleadams@gmail.com', 12)
        expect(manager.officeNumber).toEqual(12);
    })
    it('getOfficeNumber should return an office number', () => {
        const manager = new Manager('Nicole Adams', 456, 'nicoleadams@gmail.com', 12);
        expect(manager.getOfficeNumber()).toEqual(12);
    })
}) 
describe('getRole', () => {
    it('should return "Manager"', () => {
        const manager = new Manager('Nicole Adams', 456, 'nicoleadams@gmail.com', 12);
        expect(manager.getRole()).toEqual('Manager')
    })
})