const Movie = require('../models/Movie');
const Quiz = require('../models/Quiz');


const QuizController = function () { }

QuizController.prototype.Add = function (req, res) {
    const movie = req.body;
    new Quiz(movie).save().then((question) => {
        res.status(200).json({ message: 'movie has been added', question })
        addMovie(movie.title);
    }).catch((e) => res.status(400).json({ message: e.message }));
}

QuizController.prototype.Index = function (req, res) {
    const { page } = req.query;
    const skip = 10 * (page - 1);
    const limit = 10;

    const quiz = Quiz.find().sort({ '_id': -1 }).skip(skip).limit(limit).then((data) => {
        Quiz.countDocuments().then(count => {
            let pageCount = Math.ceil(count / 30)
            res.status(200).json({ quiz: data, pageCount, count })
        });
    })
}

QuizController.prototype.Update = function (req, res) {
    const { id } = req.params;
    const { title, answers, image, tags } = req.body;
    console.log('update', req.body, id)
    Quiz.findOneAndUpdate({ _id: id }, req.body, { new: true }).then((question) => {
        console.log(question)
        res.status(200).json({ message: "question has been updated", question })
    }).catch((e) => res.status(400).json({ message: 'error', e }))
}

QuizController.prototype.Delete = function (req, res) {
    const { ids } = req.body;
    Quiz.deleteMany({ _id: { $in: ids } })
        .then((data) => {
            if (data.n < 1) return res.status(404).json({ message: 'object not found' });
            res.status(200).json({ message: `${data.n} object was deleted` })
        })
        .catch(e => res.status(400).json({ message: e }));
}

QuizController.prototype.Show = function (req, res) {
    const { id } = req.params;
    Quiz.findById(id)
        .then((quiz) => res.status(200).json(quiz))
        .catch(e => res.status(404).json({ message: 'error' }));
}



function addMovie(title) {
    Movie.findOne({ title }).then((data) => {
        if (!data) {
            new Movie({ title }).save()
        }
    })
}



module.exports = new QuizController();