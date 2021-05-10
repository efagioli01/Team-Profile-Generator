//link to HTML page
const generateHTML = require('./src/generateHTML');

//team profiles
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

//node
const fs = require('fs');
const inquirer = require('inquirer');
// const { validate } = require('@babel/types');

//array to build team
const teamArray = [];

//prompts
const addManager = () => {
    return inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is the name of the manager of this team?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("please enter the managers name to continue");
                        return false;
                    }
                }
            },
            {
                name: "id",
                type: "input",
                message: "Enter the managers ID number",
                validate: nameInput => {
                    if (isNaN(nameInput)) {
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "please enter the managers email to continue",
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log("please enter managers email to continue")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "what is the managers office number?",
                validate: nameInput => {
                    if (isNaN(nameInput)) {
                        console.log('please enter numbers to continue')
                        return false;
                    } else {
                        return true;
                    }
                }
            }

        ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            console.log(manager);
        })
};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "choose the employees role",
            choices: ['engineer', 'intern',]

        },
        {
            type: "input",
            name: "name",
            message: "what is the employees name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("please enter employees name to continue")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "enter employees ID number",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("please enter numbers to continue")
                    return false;
                } else {
                    return true;
                }

            }
        },
        {
            type: "input",
            name: "email",
            message: "please enter the employees email to continue",
            validate: email => {
                if (emailInput) {
                    return true
                } else {
                    console.log("please enter employees email to continue")
                    return false;
                }
            }
        },
        {
            type: "input",
                name: "github",
                message: "please enter the employees github username to continue",
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log("please enter employees github username to continue")
                    }
                }
             },

    ])