// Import parent class
const Employee = require('./Employee');

// Child class
class Engineer extends Employee{
    constructor (name, email, id, role, gitHub) {
        this.gitHub = gitHub;

        // Passing in the parent class parameters to this function
        super(name, email, id, role)
        
    }

    getGitHub(){
        return this.gitHub;
    }
}



module.exports = Engineer;