const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email)
        this.github = github;
    }
    getGithub(){
        return this.github
    };
    getRole(){
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            github: this.github
        };
    }; // Overridden to return 'Engineer'
}

module.exports = Engineer;