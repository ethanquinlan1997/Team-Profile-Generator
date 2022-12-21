// Import Parent Class
const Employee = require('./Employee');

// Child class
class Intern extends Employee {
    constructor(name, email, id, role, school) {
     // Passing in the parent class parameters to this function
        super(name, email,id, role)
        this.school = school;


       
    }


    getSchool() {
        return this.school;
    }

}


module.exports = Intern;