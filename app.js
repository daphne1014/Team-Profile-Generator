const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateProfile.js');

//TODO: Create an array of questions for user input

const promptManager = () => {
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
                name: 'number',
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
};


const promptEngineer = engineerData => {
    if (!engineerData.engineers) {
        engineerData.engineers = [];
    };
    return inquirer
        .prompt([
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
                name: 'number',
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
};

const promptIntern = internData => {
    if (!internData.interns) {
        internData.interns = [];
    };
    return inquirer
        .prompt([
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
                name: 'number',
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
};

const promptMain = mainData => {
    return inquirer
        .prompt(
            {
                type: 'list',
                name: 'main',
                message: 'Add team members to your team',
                choices: ['add an engineer', 'add an intern', 'finish building my team']
            })
        .then(data => {
            if (data === "add an engineer") {
                return promptEngineer(engineerData);
            } else if (data === "add an intern") {
                return promptIntern(internData)
            } else {
                return mainData;
            }
        })
};

//TODO : Create a function to write HTML file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'HTML File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {
    promptManager()
    .then(promptMain)
    .then(data =>{
        return generateProfile(data);
    })
    .then(fileContent =>{
        return writeToFile('./dist/index.html', fileContent)
      })
      .then(writeFileResponse => {
        console.log(writeFileResponse);
      })
      .catch(err => {
        console.log(err);
      })
};

// Function call to initialize app
init();

module.exports = { writeToFile };