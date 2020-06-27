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
    const { id } = req.params;
    const { title, answers, image } = req.body;
    Quiz.findOneAndUpdate({_id: id}, req.body, { new: true }).then((question) => {
        res.status(200).json({ message: "question has been updated", question })
    }).catch((e) => res.status(404).json({message: 'error', e}))
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

QuizController.prototype.Show = function (req, res) {
    const { id } = req.params;
    Quiz.findById(id)
        .then((quiz) => res.status(200).json(quiz))
        .catch(e => res.status(404).json({ message: 'error' }));
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