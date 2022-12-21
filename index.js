// Import all files and constructor functions
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML')

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Variable containing user input
const userEmployee = [];

function newMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Select Role: ',
            choices: ["Intern", "Manager", "Engineer"]

        },

        {
            type: 'input',
            name: 'name',
            message: 'Type in your name',
            validate: function (employeeName) {
                if (employeeName) {
                    return true;
                } else {
                    return 'Type in a name please!'
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter in your email address',
            validate: function (employeeEmail) {
                if (employeeEmail) {
                    return true;
                } else {
                    return 'Please enter in an email address!'
                }
            }
        },

        {
            type: 'input',
            message: 'Type in Employee ID ',
            name: 'id',
            validate: function (employeeID) {
                if (employeeID) {
                    return true;
                } else {
                    return 'Please enter in an Employee ID!';
                }
            }
        },
    ])


    .then(answers => {

        if (answers.role === 'Manager') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'office',
                    message:'Enter office number:',
                    validate: officeInput => {
                        if (officeInput) {
                            return true;
                        } else {
                            return 'Please enter office No.';
                        }
                    }
                    
                }
            ])
            .then(response => {
                console.log(response.office);
                const ManagerTeam = new Manager (answers.name, answers.email, answers.id, answers.role, response.office)
                userEmployee.push(ManagerTeam);
                addOption()
            })
        }else if(answers.role === 'Engineer' ){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'gitHub',
                    message:'Enter Github name:',
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            return 'Please enter gitHub username.';
                        }
                    }
                }
            ])
            .then(response => {
                console.log(response.gitHub);
                const EngineerTeam = new Engineer (answers.name, answers.email, answers.id, answers.role, response.gitHub)
                userEmployee.push(EngineerTeam);
                addOption()
            })
        } else if (answers.role === 'Intern'){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message:'Enter School name:', 
                    validate: function (schoolInput) {
                        if (schoolInput) {
                            return true;
                        } else {
                            return 'Please enter school  name.';
                        }
                    }

                }
            ])
            .then(response =>{
                console.log(response.school);
                const internTeam = new Intern (answers.name,  answers.email, answers.id, answers.role, response.school)
                userEmployee.push(internTeam);
                addOption()
            })
        }

        else {
            const employeeTeam = new Employee (answers.name, answers.email, answers.id, answers.role);
            userEmployee.push(employeeTeam);
            addOption()

        }

        //add option 

        function addOption() {
            inquirer.prompt([
                {
                    type:'confirm',
                    name: 'addMore',
                    message:'Would you like to add another Employee?'
                }
            ])
          
        }
    })

}
// function to write file

newMember()


