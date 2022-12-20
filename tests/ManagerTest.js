const Manager = require('../lib/Manager');

describe('Manager', () => {
      // Positive Test for name
      it("Should have a name", () => {
        // Arrange
        const name = 'Andrew';

        // Act
        const obj = new Manager(name);

        // Assert
        expect(obj.name).toEqual(name);
        expect(obj.name).toEqual(expect.any(String))
    });

      // Exception Test for name
      it("Should throw an error if not provided a 'text' value", () => {
        // Arrange
        const cb = () => new Manager();
        const err = new Error(
            "Expected parameter 'text' to be a non empty string"
        );

        // Assert
        expect(cb).toThrowError(err);
    });

       // Positive Test for email
       it("Has an email address", () => {
        // Arrange
        const email = 'instructorandrew@gmail.com';

        // Act
        const obj = new Manager(email);

        // Assert
        expect(obj.email).toEqual(email);
        expect(obj.email).toEqual(expect.stringContaining('@'))
    });

      // Positive Test for ID
      it("Has a number as an ID", () => {
        // Arrange
        const id = 6;

        // Act
        const obj = new Manager(id);

        // Assert
        expect(obj.id).toEqual(id);
        expect(obj.id).toEqual(expect.any(Number))
   });

    // Expection Test for ID
    it("Should throw an error if not provided a 'number' value", () => {
        // Arrange
        const cb = () => new Manager();
        const err = new Error(
            "Expected parameter 'number' to be a non empty string"
        );

        // Assert
        expect(cb).toThrowError(err);
    });

    
    // Positive Test for Role
    it("Should have the role of an Manager", () => {
        // Arrange
        const role = 'Manager';

        // Act
        const obj = new Manager(role);

        // Assert
        expect(obj.role).toBe(role);
  });

    // Positive Test for Office Number
    it("Should have the role of an Employee", () => {
        // Arrange
        const officeNum = 95;

        // Act
        const obj = new Manager(officeNum);

        // Assert
        expect(obj.officeNum).toBe(officeNum);
        expect(obj.officeNum).toEqual(expect.any(Number))
  });
});