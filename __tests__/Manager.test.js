const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Sylvia', 293923891, 'sshim@spigen.com', 123345);

    expect(manager.name).toBe('Sylvia');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('gets manager role as object', () => {
    const manager = new Manager('Sylvia', 293923891, 'sshim@spigen.com', 123345);

    expect(manager.getRole()).toBe("Manager");
})