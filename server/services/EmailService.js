const nodemailer = require('nodemailer');
const Token = require('../models/Token');

const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '4f6f129c5f4a01',
        pass: '756d60e07d3e93'
    }
});



function sendAccountVerificationEmail(user) {
    let token = new Token({user: user, type: 'ACCOUNT_ACTIVATION' });

    return token.save()
        .then((token) => {
            const mailOptions = {
                from: 'muthawamunene@gmail.com',
                to: user.email,
                subject: 'Account Creation on Fake CRB',
                text: 'http://localhost:3000/users/activate/' + token._id
            }

            transporter.sendMail(mailOptions, (err, info) => {
                if (err)
                    console.log(err);
                else {
                    console.log('email sent')
                }
            });
        });
}

module.exports = {
    sendAccountVerificationEmail: sendAccountVerificationEmail
}