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

app.use(bodyParser.json({ limit: '5mb' }));
app.use(express.static('public'));
app.use(cors());


app.route('/quiz')
    .get(QuizController.Index)
    .post(QuizController.Add)
    .delete(QuizController.Delete)

app.route('/get_question')
    .post(GameController.GetNewQuestion)

app.route('/check_question')
    .post(GameController.CheckQuestion)

app.route('/quiz/:id')
    .put(QuizController.Update)
    .get(QuizController.Show)

app.route('/movies')
    .get(MovieController.Index)
    .post(MovieController.Create)

app.route('/movies/autocomplete')
    .post(MovieController.Autocomplete)

app.route('/movies/:id')
    .get(MovieController.Show)
    .put(MovieController.Update)
    .delete(MovieController.Delete)

app.route('/login')
    .post(UserController.Login)

app.route('/manage/login')
    .post(AdminController.Login)

app.route('/manage/add')
    .post(AdminController.Add)

app.route('/manage/get')
    .post(AdminController.Get)

const httpsOptions = {
    key: fs.readFileSync('./security/key.pem'),
    cert: fs.readFileSync('./security/cert.pem')
}

const server = https.createServer(httpsOptions, app);
const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log('server started on port ' + 4000)
});

