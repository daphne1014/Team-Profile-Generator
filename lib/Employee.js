class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName(){
        return this.name;
    };
    getId(){
        return this.id;
    };
    getEmail(){
        return this.email;
    };
    getRole(){
        return {
            name: this.name,
            id: this.id,
            email: this.email}
    };// Returns 'Employee'
}

module.exports = Employee;