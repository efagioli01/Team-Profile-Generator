const Engineer = require('../lib/engineer')
describe('github', () => {
    it('should return a github URL via getGithub()', () => {
        const engineer = new Engineer('Erica Fagioli', 123, 'efagioli01@gmail.com', 'efagioli01')
        expect(engineer.getGithub()).toEqual('https://github.com/efagioli01')
    })
    it('can set GitHub account via constructor', () => {
        const engineer = new Engineer('Erica Fagioli', 123, 'efagioli01@gmail.com', 'efagioli01')
        expect (engineer.github).toEqual('efagioli01')
    })
})
describe('getRole', () => {
    it('getRole() should return Engineer', () => {
        const engineer = new Engineer();
        expect(engineer.getRole()).toEqual('Engineer');
    })
})