// Import all files and constructor functions
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML')

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamMembers = [];

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

    
}




