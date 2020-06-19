const Movie = require('../models/Movie');
const Quiz = require('../models/Quiz');


const QuizController = function () { }

QuizController.prototype.Add = function (req, res) {
    const movie = req.body;
    new Quiz(movie).save().then(() => {
        res.status(200).json({ message: 'movie hsa been added' })
        addMovie(movie.title);
    }).catch(() => console.log('oops'));
}
QuizController.prototype.Index = function (req, res) {
    const quiz = Quiz.find().then((data) => {
        res.status(200).json({ quiz: data })
    })
}

QuizController.prototype.Update = function (req, res) {
    const { quizID, title, answers } = req.body;
    let quiz = Quiz.findById(quizID)
    quiz.updateOne({ title, answers }).then(() => {
        res.status(200).json({ message: "movie title has been updated" })
    })
}

QuizController.prototype.Delete = function (req, res) {
    const { id } = req.body;
    Quiz.deleteOne({ _id: id })
        .then((data) => {
            if (data.n < 1) return res.status(404).json({ message: 'object not found' });
            res.status(200).json({ message: `${data.n} object was deleted` })
        })
        .catch(e => errorRsponse(res, 101, e));
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