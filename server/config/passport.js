const passport = require('passport');
const userService = require('../services/UserService');
const LocalStrategy = require('passport-local');


passport.use(new LocalStrategy({usernameField: 'email', passwordField: 'password'}, (email, password, done)=>{
    userService.findUserByEmail(email)
    .then((user)=>{
        if(!user || !userService.validatePassword(user, password)){
            return done(null, false, {errors: {'email or password': 'is invalid'}});
        }
        return done(null, user);
    })
    .catch((err)=>{
        done(err);
    })
}));
