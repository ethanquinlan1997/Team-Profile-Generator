// Import Parent Class
const Employee = require ('./Employee');

// Child Class
class Manager extends Employee {
    constructor (name, email, id, role, officeNum){
        // Passing in the parent class parameters to this function
        super (name, email, id, role)
        this.officeNum = officeNum;

 
        
    }

    getOfficeNumber(){
        return this.officeNum;
    }
}



module.exports = Manager; 