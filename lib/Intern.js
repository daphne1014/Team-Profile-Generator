const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school){
        super()
        this.school = school;
    }
    getschool(){};
    getRole(){};
}

module.exports = Intern;