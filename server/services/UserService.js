const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const EmailService = require('./EmailService');
const Token = require('../models/Token');


function encryptPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 512, 'sha512').toString('hex');
    return { salt: salt, hash: hash };
}

function validatePassword(user, password) {
    const hash = crypto.pbkdf2Sync(password, user.salt, 1000, 512, 'sha512').toString('hex');
    return hash == user.hash;
}

function generateJWT(user) {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        email: user.email,
        id: user._id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret')
}

function validateToken(tokenId){
    return Token.findById(tokenId).populate('user')
    .then((token)=>{
        if(token){
            return token.user;
        }
        else{
            return null
        }
    });
}


function createUser(user){

    return User.create(user)
    .then((user)=>{
        EmailService.sendAccountVerificationEmail(user)
        .finally(()=>{
            return user;
        })
       
    })
    .catch((err)=>{
        console.log('error while creating user ' + err);
        throw err;
    })
}

function findUserByEmail(email){
    return User.findOne({email: email});
}

function updateUser(user){
    return User.findById(user._id)
    .then((userFromDb)=>{
        if(user.password){
            let saltandHash = encryptPassword(user.password);
            userFromDb.salt = saltandHash.salt;
            userFromDb.hash = saltandHash.hash;
        }
        return userFromDb.save();
    });
}



module.exports = {
    encryptPassword : encryptPassword,
    validatePassword: validatePassword,
    generateJWT: generateJWT,
    createUser: createUser,
    findUserByEmail: findUserByEmail,
    updateUser: updateUser,
    validateToken: validateToken
}