const express = require('express');
const app = express();
const connection = require('./connection');
const MovieController = require('./src/controllers/MovieController');
const QuizController = require('./src/controllers/QuizController');
const UserController = require('./src/controllers/UserController');
const AdminController = require('./src/controllers/AdminController');
const bodyParser = require('body-parser');
const Movie = require('./src/models/Movie');
const https = require('http');
const fs = require('fs');
var cors = require('cors');
const GameController = require('./src/controllers/GameController');
const authorize = require('./src/middlewares/authorize');

app.use(bodyParser.json({ limit: '5mb' }));
app.use(express.static('public'));
app.use(cors());

app.get('/play', (req, res) => res.sendFile('/public/game/index.html', { root: __dirname }));

app.route('/quiz')
    .get(authorize, QuizController.Index)
    .post(authorize, QuizController.Add)
    .delete(authorize, QuizController.Delete)

app.route('/delete_quiz')
    .post(authorize, QuizController.Delete)

app.route('/get_question')
    .post(GameController.GetNewQuestion)

app.route('/check_question')
    .post(GameController.CheckQuestion)

app.route('/quiz/:id')
    .put(authorize, QuizController.Update)
    .get(authorize, QuizController.Show)

app.route('/movies')
    .get(authorize, MovieController.Index)
    .post(authorize, MovieController.Create)

app.route('/movies/autocomplete')
    .post(authorize, MovieController.Autocomplete)

app.route('/quiz/autocomplete')
    .post(authorize, QuizController.Autocomplete)

app.route('/movies/:id')
    .get(authorize, MovieController.Show)
    .put(authorize, MovieController.Update)
    .delete(authorize, MovieController.Delete)

app.route('/login')
    .post(UserController.Login)

app.route('/manage/login')
    .post(AdminController.Login)

app.route('/manage/refresh')
    .post(AdminController.RefreshToken)

app.route('/manage/add')
    .post(authorize, AdminController.Add)

app.route('/manage/get')
    .post(authorize, AdminController.Get)

const httpsOptions = {
    key: fs.readFileSync('./security/key.pem'),
    cert: fs.readFileSync('./security/cert.pem')
}

const server = https.createServer(httpsOptions, app);
const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log('server started on port ' + 4000)
});

