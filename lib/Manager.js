const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }; // Overridden to return 'Manager'
}

module.exports = Manager;