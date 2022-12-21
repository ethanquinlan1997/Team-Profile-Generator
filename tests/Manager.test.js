const Manager = require('../lib/Manager');

const mTest = new Manager ('Ethan', 'ethan@gmail.com', 8 , 'Manager', 85)

describe('Manager', () => {
    it('Should have a name', () =>{
        expect(mTest.name).toEqual(expect.any(String))
        

    })
    it('Should have an email address', () =>{
        expect(mTest.email).toEqual(expect.stringContaining('@'))
    })

    it('Should have an id that is a num', () => {
        expect(mTest.id).toEqual(expect.any(Number))
    })

    it('Should have a role of manager', () => {
        expect(mTest.role).toBe('Manager')
    })

    it('Should have a office number', () => {
        keys = Object.keys(mTest)
        optionKey = keys[4]
        expect(optionKey).toBe('officeNum')
    })
})