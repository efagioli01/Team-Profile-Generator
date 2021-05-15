const Intern = require("../lib/intern")
describe("getRole", () => {
    it('should return the string "Intern"', () => {
        const intern = new Intern('William', 789, 'william@gmail.com', 'Salem State University')
        expect(intern.getRole()).toEqual('Intern')
    })
})
describe("getSchool", () => {
    it('should return Salem State University when getSchool() is run', () => {
        const intern = new Intern('William', 789, 'william@gmail.com', 'Salem State University');
        expect(intern.getSchool()).toEqual('Salem State University')
    })
    it('should set school via constructor', () => {
        const intern = new Intern('William', 789, 'william@gmail.com', 'Salem State University');
        expect(intern.school).toEqual('Salem State University')
    })
})