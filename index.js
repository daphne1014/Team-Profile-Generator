const inquirer = require('inquirer');
const path = require("path");
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const team = []

const promptManager = () => {
    console.log("Let's create the team");
    inquirer.prompt([
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
    ]).then(answers => {
        let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager);
        promptMain();
    });
};

const promptEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter enginner\'s name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer\'s employee ID?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter engineer\'s employee ID!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer\'s email?",
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
            name: 'github',
            message: 'What is the enginner\'s GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter enginner\'s GitHub username!');
                    return false;
                }
            }
        }
    ])
        .then((answers) => {
            let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team.push(engineer);
            promptMain();
        });
};
const promptIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter intern\'s name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s employee ID?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter intern\'s employee ID!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern\'s email?",
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
            name: 'school',
            message: 'What is the intern\'s school?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter intern\'s school!');
                    return false;
                }
            }
        }
    ])
        .then((answers) => {
            let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            team.push(intern);
            promptMain();
        });
};
const promptMain = () => {
    inquirer.prompt({
        type: 'list',
        name: 'main',
        message: 'Add team members to your team',
        choices: ['add an engineer', 'add an intern', 'finish building my team']
    })
        .then((answers) => {
            if (answers.main === 'add an engineer') {
                console.log(answers.main)
                return promptEngineer();
            } else if (answers.main === 'add an intern') {
                return promptIntern();
            } else {
                return console.log(team);
            }
        })
};


// TODO: Create a function to initialize app
// const init = () => {
//     promptManager()
//         .then(promptMain)
//         .then(data => {
//             return generateProfile(data);
//         })
//         .then(fileContent => {
//             return writeToFile('./dist/index.html', fileContent)
//         })
//         .then(writeFileResponse => {
//             console.log(writeFileResponse);
//         })
//         .catch(err => {
//             console.log(err);
//         })
// };

// Function call to initialize app

function init() {
    promptManager()
    // .then(data => {
    //     return generateProfile(data);
    // })
    // .then(fileContent => {
    //     return writeToFile('./dist/index.html', fileContent)
    // })
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    // })
    // .catch(err => {
    //     console.log(err);
    // });
};

init();

// module.exports = { writeToFile };
