const backgroundImage = document.getElementById('background_image')
const questionImage = document.getElementById('question_image')
const scoreText = document.getElementById('score')
const resultContainer = document.getElementById('result_container')
const submitButton = document.getElementById('submit_button')
const logoutButton = document.getElementById('logoutButton')
const loginButton = document.getElementById('loginButton')
const userInfo = document.getElementById('userInfo')
const userImage = document.getElementById('userImage')
const userName = document.getElementById('userName')
const scoreList = document.getElementById('scoreList')
const imageLink = document.getElementById('image_link')
const resultTitle = document.getElementById('result_title')
const answers = document.getElementsByClassName('answer_text')
const answersButtons = document.getElementsByClassName('answer_item')
const lifes = document.getElementsByClassName('life')
const lines = document.getElementsByTagName('hr')




let access_token = null
let user_id = null

async function Post(url, params) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
        const question = await response.json()
        return question
    } catch (e) {
        console.error(e)
    }
}

let mistakeCount = 0
let score = 0

let question = null

async function GetQuestion() {
    return await (await fetch('/movies')).json()
}

async function CheckQuestion(question_id, answer_id) {
    let params = new FormData()
    return await Post('/check_question', { question_id, answer_id, user_id })
}

async function SubmitAnswer(answerID) {
    const { correct_answer, scores } = await CheckQuestion(question.id, answerID)

    let correct = answerID === correct_answer

    for (let i = 0; i < question.answers.length; i++) {
        if (question.answers[i].id === answerID) {
            answersButtons[i].classList.add('answer_item_wrong')
        }
        if (question.answers[i].id === correct_answer) {
            answersButtons[i].classList.add('answer_item_correct')
        }
    }


    resultContainer.classList.toggle("hidden")
    resultTitle.innerHTML = correct ? "Correct" : "Wrong"
    submitButton.onclick = () => {
        NextQuestion()
    }

    if (correct) {
        score++
        scoreText.innerHTML = score
    }


    if (!correct) {
        mistakeCount++

        if (mistakeCount == 3) {
            resultTitle.style.color = 'white'
            resultTitle.innerHTML = "Game Over :("
            submitButton.innerHTML = "Restart"
            submitButton.onclick = () => {
                Reset()
            }
        }

        resultTitle.classList.add('result_title_wrong')
        for (line of lines) {
            line.style.backgroundColor = '#FF631D'
        }

        for (life of [...lifes].reverse()) {
            if (life.classList.contains('life_filled')) {
                life.classList.toggle('life_filled')
                break;
            }
        }
    }

    // UpdateScores(scores)
}

function UpdateView() {


    const image = new Image()
    image.src = question.image

    backgroundImage.src = question.image
    questionImage.src = question.image
    imageLink.href = question.image

    for (let i = 0; i < question.answers.length; i++) {
        answersButtons[i].className = "answer_item answer_item_active"
        answersButtons[i].onclick = () => {
            SubmitAnswer(question.answers[i].id)
            for (let i = 0; i < answers.length; i++) {
                answersButtons[i].onclick = null
                answersButtons[i].className = "answer_item"
            }
            answersButtons[i].classList.add('answer_item_clicked')
        }
        answers[i].innerHTML = question.answers[i].label
    }

}

async function NextQuestion() {
    for (line of lines) {
        line.style.backgroundColor = ''
    }
    resultContainer.classList.toggle("hidden")
    resultTitle.classList.remove('result_title_wrong')

    questionImage.src = ""
    question = await GetQuestion()
    // console.log(question);
}

function Reset() {
    for (element of lifes) {
        element.classList.add('life_filled')
    }
    mistakeCount = 0
    score = 0
    resultTitle.innerHTML = "Correct"
    submitButton.innerHTML = "Next"
    scoreText.innerHTML = "-"
    resultTitle.style.color = ''
    resultContainer.classList.remove("hidden")

    NextQuestion()
}

NextQuestion()

function checkLoginState() {
    FB.getLoginStatus(async function ({ authResponse }) {
        if (authResponse) {

            user_id = authResponse.userID
            access_token = authResponse.accessToken

            const res = await Post('/login', { access_token: authResponse.accessToken })
            userImage.src = res.avatar;
            userName.innerHTML = res.firstName;
        }

        userInfo.style = authResponse ? "display:flex" : "display:none"
        loginButton.style = authResponse ? "display:none" : "display:flex"
    });
}

logoutButton.onclick = () => {
    FB.logout(() => {
        checkLoginState()
        user_id = null
        access_token = null
        NextQuestion()
    })
}



/*
paralax
button
input
title
*/