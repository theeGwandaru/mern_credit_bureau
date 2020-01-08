const mongoose = require('mongoose');

const InstitutionSchema = new mongoose.Schema({
    name: {type: String, required: true, unique:true},
    registrationNumber: {type:String, required: true, unique: true},
    //users: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}]
});


module.exports = mongoose.model('Institution',InstitutionSchema);