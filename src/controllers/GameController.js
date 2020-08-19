const Quiz = require('../models/Quiz');

const GameController = function () { }

GameController.prototype.GetNewQuestion = async function (req, res) {
    const movies = await Quiz.find()
    let index = Math.floor(Math.random() * movies.length)
    let movie = movies[index]

    const answers = []

    const correctAnswerIndex = parseInt(Math.random() * 4)

    movie.answers.forEach((label, id) => {
        answers.push({ id: id + 1, label })
    });

    answers.splice(correctAnswerIndex, 0, { label: movie.title, id: movie._id })

    res.status(200).json({ id: movie._id, answers, image: movie.image })
}

GameController.prototype.CheckQuestion = async function (req, res) {
    console.log(req.body)
    const { question_id, answer_id } = req.body
    try {
        const question = await Quiz.findById(question_id)

        let is_correct = false

        if (question._id == answer_id) {
            is_correct = true
        }

        res.status(200).json({ is_correct, correct_answer: question._id })
    } catch (e) {
        res.status(404).json({ message: 'not found' })
    }

}

module.exports = new GameController()