const Intern = require('../lib/Intern');

const iTest = new Intern ('Ethan', 'ethan@gmail.com', 1 , 'Intern', 'UNCC')

describe('Intern', () => {
    it('Should have a name', () =>{
        expect(iTest.name).toEqual(expect.any(String))
     

    })
    it('Should have an email address', () =>{
        expect(iTest.email).toEqual(expect.stringContaining('@'))
    })

    it('Should have a number as an id', () => {
        expect(iTest.id).toEqual(expect.any(Number))
    })

    it('Should have a role as an Intern', () => {
        expect(iTest.role).toBe('Intern')
    })

    it('Should have a school name', () => {
        keys = Object.keys(iTest )
        optionKey = keys[4]
        expect(optionKey).toBe('school')
        expect(iTest.school).toEqual(expect.any(String))
    })
})