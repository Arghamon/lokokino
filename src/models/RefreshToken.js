const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const RefreshTokenSchema = new Schema({
    token: {
        type: String,
        required: true,
    },
    expireDate: {
        type: Date,
        required: true,
    },
    user: {
        type: Schema.ObjectId,
        required: true,
    }
})



RefreshTokenSchema.plugin(uniqueValidator);
module.exports = mongoose.model('RefreshToken', RefreshTokenSchema);