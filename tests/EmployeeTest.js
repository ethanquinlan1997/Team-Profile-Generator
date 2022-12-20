const Employee = require('/lib/Employee')

// Validation for Name, Email, ID, and Role.
// const obj = new Employee ("Ethan", "ethan.quinlan2016@gmail.com", 2, "Employee");

describe('Employee', () => {
    // Positive Test for name
    it("Should have a name", () => {
        // Arrange
        const name = 'Ethan';

        // Act
        const obj = new Employee(name);

        // Assert
        expect(obj.name).toEqual(name);
        expect(obj.name).toEqual(expect.any(String))
    });

    // Exception Test for name
    it("Should throw an error if not provided a 'text' value", () => {
        // Arrange
        const cb = () => new Employee();
        const err = new Error(
            "Expected parameter 'text' to be a non empty string"
        );

        // Assert
        expect(cb).toThrowError(err);
    });

    // Positive Test for email
    it("Has an email address", () => {
             // Arrange
             const email = 'ethan.quinlan2016@gmail.com';

             // Act
             const obj = new Employee(email);
     
             // Assert
             expect(obj.email).toEqual(email);
             expect(obj.email).toEqual(expect.stringContaining('@'))
    });

    // Positive Test for ID
    it("Has a number as an ID", () => {
         // Arrange
         const id = 2;

         // Act
         const obj = new Employee(id);
 
         // Assert
         expect(obj.id).toEqual(id);
         expect(obj.id).toEqual(expect.any(Number))
    });

    // Expection Test for ID
    it("Should throw an error if not provided a 'number' value", () => {
        // Arrange
        const cb = () => new Employee();
        const err = new Error(
            "Expected parameter 'number' to be a non empty string"
        );

        // Assert
        expect(cb).toThrowError(err);
    });

    // Positive Test for Role
    it("Should have the role of an Employee", () => {
          // Arrange
          const role = 'Employee';

          // Act
          const obj = new Employee(role);
  
          // Assert
          expect(obj.role).toBe(role);
    });
});

