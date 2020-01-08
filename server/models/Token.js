const mongoose = require('mongoose');
const TokenSchema = new mongoose.Schema({
    type: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Token', TokenSchema);