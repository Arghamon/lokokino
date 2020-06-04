const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function arrayValidator(array) {
    return array.every((v) => v.length > 0);
}

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
    },
    tag: {
        type: [String],
    },
    genre: {
        type: [String],
    },
    images: {
        type: [String],
        validate: {
            validator: arrayValidator,
        }
    }
})

module.exports = mongoose.model('Movie', MovieSchema);