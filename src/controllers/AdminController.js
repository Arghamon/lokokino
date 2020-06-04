const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const AdminController = function () { }

function encryptPassword(password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash
}

AdminController.prototype.Login = function (req, res) {
    const { email, password } = req.body;
    Admin.findOne({ email }).then((user) => {
        if (!user)
            return res.json({ status: 0, message: 'email incorrect' })

        if (!bcrypt.compareSync(password, user.password))
            return res.json({ status: 0, message: 'password incorrect' });

        delete user['password'];
        return res.json({ status: 1, id: user._id });
    }).catch(e => console.log(e))
}

AdminController.prototype.Get = function (req, res) {
    Admin.findById(req.body.id).then(user => {
        if (!user) return res.status(404).json({ status: 0, message: 'user not found' })
        user = user.toObject();
        delete user.password;
        res.json({ status: 1, user })
    })
}

AdminController.prototype.Add = function (req, res) {
    const user = req.body;
    const hash = encryptPassword(user.password)
    user['password'] = hash;
    new Admin(user).save().then(user => {
        if (!user) return res.json({ status: 0, message: 'could not add user' })
        res.json({ status: 1 })
    }).catch((err) => res.json({ status: 0, message: "email already exists", err }))
}



module.exports = new AdminController();