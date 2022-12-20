const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    // Positive Test for name
    it("Should have a name", () => {
        // Arrange
        const name = 'John';

        // Act
        const obj = new Engineer(name);

        // Assert
        expect(obj.name).toEqual(name);
        expect(obj.name).toEqual(expect.any(String))
    });

    // Exception Test for name
    it("Should throw an error if not provided a 'text' value", () => {
        // Arrange
        const cb = () => new Engineer();
        const err = new Error(
            "Expected parameter 'text' to be a non empty string"
        );

        // Assert
        expect(cb).toThrowError(err);
    });

    // Positive Test for email
    it("Has an email address", () => {
             // Arrange
             const email = 'john2016@gmail.com';

             // Act
             const obj = new Engineer(email);
     
             // Assert
             expect(obj.email).toEqual(email);
             expect(obj.email).toEqual(expect.stringContaining('@'))
    });

    // Positive Test for ID
    it("Has a number as an ID", () => {
         // Arrange
         const id = 3;

         // Act
         const obj = new Engineer(id);
 
         // Assert
         expect(obj.id).toEqual(id);
         expect(obj.id).toEqual(expect.any(Number))
    });

       // Expection Test for ID
    it("Should throw an error if not provided a 'number' value", () => {
        // Arrange
        const cb = () => new Engineer();
        const err = new Error(
            "Expected parameter 'number' to be a non empty string"
        );

        // Assert
        expect(cb).toThrowError(err);
    });

    
    // Positive Test for Role
    it("Should have the role of an Engineer", () => {
          // Arrange
          const role = 'Engineer';

          // Act
          const obj = new Engineer(role);
  
          // Assert
          expect(obj.role).toBe(role);
    });

    // Positive Test for Github Name
    
    // Positive Test for Role
    it("Should have a github username", () => {
          // Arrange
          const github = 'Johnny1997';

          // Act
          const obj = new Engineer(github);
  
          // Assert
          expect(obj.github).toBe(github);
          expect(obj.github).toEqual(expect.any(String))
    });
})