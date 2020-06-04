const Movie = require('../models/Movie');
const Quiz = require('../models/Quiz');


const QuizController = function () { }

QuizController.prototype.Add = function (req, res) {
    const movie = req.body;
    new Quiz(movie).save().then(() => {
        res.json({ status: 1 })
        addMovie(movie.title);
    }).catch(() => console.log('oops'));
}
QuizController.prototype.Index = function (req, res) {
    const quiz = Quiz.find().then((data) => {
        res.json({ status: 1, quiz: data })
    })
}

QuizController.prototype.Update = function (req, res) {
    const { quizID, title, answers } = req.body;
    let quiz = Quiz.findById(quizID)
    quiz.updateOne({ title, answers }).then(() => {
        res.json({ status: 1 })
    })
}



function addMovie(title) {
    Movie.findOne({ title }).then((data) => {
        console.log(data)
        if (!data) {
            console.log('object')
            new Movie({ title }).save()
        }
    })
}



module.exports = new QuizController();