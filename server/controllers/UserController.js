const userService = require('../services/UserService');
const passport = require('passport');

module.exports = {

    authenticate: (req, res, next)=>{
        let user = req.body;
        if(!user.email){
            return res.status(422).json({errors: [{email: 'email is required'}]})
        }
        if(!user.password){
            return res.status(422).json({errors: [{password: 'password is required'}]})
        }

        return passport.authenticate('local', {session: false}, (err, passportUser, info)=>{
            if(err){
                return next(err);
            }

            if(passportUser){
                let token = userService.generateJWT(passportUser);
                return res.json({token: token});
            }
            else {
                res.send(info);
            }
        })(req, res, next);
    },
    
    createUser: (req, res, next) => {

    },
    updateUser: (req, res, next) => {
        let user = req.body;
        userService.updateUser(user)
        .then((user)=>{
            res.json(user);
        })
        .catch((err)=>{
            next(err)
        })
    },

    validateToken: (req, res, next) => {
        let token = req.params.token;
        userService.validateToken(token)
            .then((user) => {
                res.json(user);
            })
            .catch((err)=>{
                if(err.name == 'CastError'){
                    res.json({message: 'token expired or not associated with user'});
                }
                else{
                    next(err);
                }
            });
    }
}