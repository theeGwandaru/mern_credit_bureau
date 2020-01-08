const Institution = require('../models/Institution');
const userService = require('./UserService');
const User = require('../models/User');

function createInstitution(institution) {

    return Institution.create({
        name: institution.name,
        registrationNumber: institution.registrationNumber,
    }).then((inst) => {
        if (institution.users && institution.users.length > 0) {
            let userPromises = institution.users.map((user) => {
                return userService.createUser({
                    surname: user.surname,
                    otherNames: user.otherNames,
                    email: user.email,
                    institution: inst
                });
            });
            return Promise.all(userPromises)
                .then((values) => {
                    return inst;
                });
        }
    })

}

module.exports = {
    createInstitution: createInstitution
}