const Intern = require('../lib/Intern');

describe('Intern', () => {
    // Positive Test for name
    it("Should have a name", () => {
        // Arrange
        const name = 'Terry';

        // Act
        const obj = new Intern(name);

        // Assert
        expect(obj.name).toEqual(name);
        expect(obj.name).toEqual(expect.any(String))
    });

     // Exception Test for name
     it("Should throw an error if not provided a 'text' value", () => {
        // Arrange
        const cb = () => new Intern();
        const err = new Error(
            "Expected parameter 'text' to be a non empty string"
        );

        // Assert
        expect(cb).toThrowError(err);
    });

    // Positive Test for email
    it("Has an email address", () => {
        // Arrange
        const email = 'terry@gmail.com';

        // Act
        const obj = new Intern(email);

        // Assert
        expect(obj.email).toEqual(email);
        expect(obj.email).toEqual(expect.stringContaining('@'))
    });

     // Positive Test for ID
     it("Has a number as an ID", () => {
        // Arrange
        const id = 4;

        // Act
        const obj = new Intern(id);

        // Assert
        expect(obj.id).toEqual(id);
        expect(obj.id).toEqual(expect.any(Number))
   });

    // Expection Test for ID
    it("Should throw an error if not provided a 'number' value", () => {
        // Arrange
        const cb = () => new Intern();
        const err = new Error(
            "Expected parameter 'number' to be a non empty string"
        );

        // Assert
        expect(cb).toThrowError(err);
    });

    // Positive Test for Role
    it("Should have the role of an Intern", () => {
        // Arrange
        const role = 'Intern';

        // Act
        const obj = new Intern(role);

        // Assert
        expect(obj.role).toBe(role);
  });

  // Positive Test for School
  it("Should have a school name", () => {
    // Arrange
    const school = 'UNCC';

    // Act
    const obj = new Intern(school);

    // Assert
    expect(obj.school).toBe(school);
    expect(obj.school).toEqual(expect.any(String))
});

})