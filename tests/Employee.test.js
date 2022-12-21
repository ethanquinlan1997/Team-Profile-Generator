const Employee = require('../lib/Employee')

// Validation for Name, Email, ID, and Role.

const employeeTest = new Employee ("Ethan", "ethan@gmail.com", 2 , "Employee");


describe('Employee', () => {
    it('Should have a name', () => {
        expect(employeeTest.name).toEqual(expect.any(String))
    })

    it('Should have an email address', () =>{
        expect(employeeTest.email).toEqual(expect.stringContaining('@'))
    })

    it('Should have a number for an id', () => {
        expect(employeeTest.id).toEqual(expect.any(Number))
    })

    it('Should have a role of Employee', () => {
        expect(employeeTest.role).toBe('Employee')
    })

})

