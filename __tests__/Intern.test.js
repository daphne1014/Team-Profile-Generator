const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Daphne', 293923891, 'daphnesong1014@gmail.com', 'UCI');

    expect(intern.name).toBe('Daphne');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test("gets intern's school", () => {
    const intern = new Intern('Daphne', 293923891, 'daphnesong1014@gmail.com', 'UCI');

    expect(intern.getschool()).toEqual(expect.any(String));
})


test('gets intern role as object', () => {
    const intern = new Intern('Daphne', 293923891, 'daphnesong1014@gmail.com', 123345);

    expect(intern.getRole()).toBe("Intern");
})