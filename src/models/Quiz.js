const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function arrayValidator(array) {
    return array.every((v) => v.length > 0);
}

const QuizSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    answers: {
        type: [String],
        required: true
    },
    tags: {
        type: [String],
        required: true
    }
})

module.exports = mongoose.model('Quiz', QuizSchema);