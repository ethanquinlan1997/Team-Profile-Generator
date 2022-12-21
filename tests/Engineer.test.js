const Engineer = require('../lib/Engineer');

const eTest = new Engineer ('Ethan', 'ethan@gmail.com', 3, 'Engineer', 'Ethanquinlan1997')

describe("Engineer", () =>{
    it('Should have a name', () =>{
        expect(eTest.name).toEqual(expect.any(String))

    })
    it('Should have an email address', () =>{
        expect(eTest.email).toEqual(expect.stringContaining('@'))
    })

    it('Should have a number for an id', () => {
        expect(eTest.id).toEqual(expect.any(Number))
    })

    it('Should have a role of engineer', () => {
        expect(eTest.role).toBe('Engineer')
    })

    it('Should have a github username', () => {
        keys = Object.keys(eTest)
        optionKey = keys[4]
        expect(optionKey).toBe('gitHub')
        expect(eTest.gitHub).toEqual(expect.any(String))
    })


})