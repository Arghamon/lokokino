const User = require('../models/User');
const graph = require('fbgraph');

const UserController = function () { }


UserController.prototype.Login = function (req, res) {

    const { access_token } = req.body;

    graph.get('me', { fields: "id,first_name,last_name,picture,email", access_token }, (err, data) => {

        if (err) {
            console.error(err)
            return
        }

        const user = {
            firstName: data.first_name,
            lastName: data.last_name,
            avatar: data.picture.data.url,
            email: data.email,
            fbUserId: data.id
        }

        User.findOneAndUpdate({ fbUserId: data.id }, user, { upsert: true, new: true, rawResult: true })
            .then(response => {
                res.status(200).json(response.value)
            }).catch(e => {
                res.send(500).json({ response })
            })
    })
}

module.exports = new UserController();