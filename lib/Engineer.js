// Import parent class
const Employee = require('./Employee');

// Child class
class Engineer extends Employee{
    constructor (name, email, id, role, gitHub) {
        // Passing in the parent class parameters to this function
        super(name, email, id, role)
        this.gitHub = gitHub;

      
        
    }

    getGitHub(){
        return this.gitHub;
    }
}



module.exports = Engineer;