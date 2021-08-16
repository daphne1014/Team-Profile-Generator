const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

class Team {
    constructor() {
        this.manager;
        this.engineers = [];
        this.interns = [];
    };
    promptManager() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the team manager\'s name?',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter team manager\'s name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the team manager\'s employee ID?',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter team manager\'s employee ID!');
                            return false;
                        }
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the team manager\'s email?",
                    default: () => { },
                    validate: function (email) {

                        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                        if (valid) {
                            return true;
                        } else {
                            console.log("Please enter a valid email")
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is the team manager\'s office number?',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter team manager\'s office number!');
                            return false;
                        }
                    }
                }
            ])
            .then(({ name,id, email, officeNumber }) => {
                this.manager = new Manager(name, id, email, officeNumber);
          
                this.startNewBattle();
              });
    }
};
