const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    surname: {type: String, required: true},
    otherNames: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    hash: String,
    salt: String,
    institution: {type:mongoose.Schema.Types.ObjectId, ref: 'Institution'}
});

module.exports = mongoose.model('User', UserSchema);