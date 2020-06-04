const Movie = require('../models/Movie');
const ErrorParser = require('../helpers/errorParser');

const Moviecontroller = function () { }

function okRsponse(res, data) {
    if (!data) return res.json({ status: 0, message: 'object not found' })
    res.status(200).json({ status: 1, data })
}

function errorRsponse(res, code, e) {
    res.status(500).json({ status: 0, code, message: ErrorParser.GetErrorObject(e.message, e.name) })
}

Moviecontroller.prototype.Index = function (req, res) {
    Movie.find()
        .then((movies) => okRsponse(res, movies))
        .catch(e => errorRsponse(res, 101, e));
}

Moviecontroller.prototype.Create = function (req, res) {
    let bodyArray = Array.isArray(req.body) ? req.body : [req.body]
    bodyArray.forEach((item => {
        new Movie(item).save()
            .then((movies) => okRsponse(res, movies))
            .catch(e => errorRsponse(res, 101, e));
    }))
}

Moviecontroller.prototype.Show = function (req, res) {
    const { id } = req.params;
    Movie.findById(id)
        .then((movies) => okRsponse(res, movies))
        .catch(e => errorRsponse(res, 101, e));
}

Moviecontroller.prototype.Update = function (req, res) {
    const { id } = req.params;
    Movie.findOneAndUpdate({ _id: id }, req.body, { new: true })
        .then((movies) => okRsponse(res, movies))
        .catch(e => errorRsponse(res, 101, e));
}

Moviecontroller.prototype.Delete = function (req, res) {
    const { id } = req.params;
    Movie.deleteOne({ _id: id })
        .then((data) => {
            if (data.n < 1) return res.status(400).json({ status: 0, message: 'object not found' });
            res.status(200).json({ status: 1, message: `${data.n} object was deleted` })
        })
        .catch(e => errorRsponse(res, 101, e));
}

Moviecontroller.prototype.Autocomplete = function (req, res) {
    const { title } = req.body;
    Movie.find({ title: { $regex: title, $options: 'i' } }).limit(5).then((result) => {
        console.log(result);
        res.json({ result })
    }).catch( e => console.log(e))
}


module.exports = new Moviecontroller();