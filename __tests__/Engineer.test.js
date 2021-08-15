const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Daphne', 293923891, 'daphnesong1014@gmail.com', 'daphne1014');

    expect(engineer.name).toBe('Daphne');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test("gets engineer's github id", () => {
    const engineer = new Engineer('Daphne', 293923891, 'daphnesong1014@gmail.com', 'daphne1014');

    expect(engineer.getGithub()).toEqual(expect.any(String));
})


test('gets engineer role as object', () => {
    const engineer = new Engineer('Daphne', 293923891, 'daphnesong1014@gmail.com', 'daphne1014');

    expect(engineer.getRole()).toHaveProperty('name');
    expect(engineer.getRole()).toHaveProperty('id');
    expect(engineer.getRole()).toHaveProperty('email');
    expect(engineer.getRole()).toHaveProperty('github');
})