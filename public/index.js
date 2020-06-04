// firebase
var storage = firebase.storage();
var storageRef = firebase.storage().ref();

// html tags
const image = document.getElementById('file');
const container = document.getElementById('container');
const title = document.getElementById('title');
const answers = document.getElementsByClassName('answer')
const button = document.querySelector('button');
const imageContainer = document.getElementById('image')


//variables
let movie = {
    title: '',
    image: '',
    answers: []
}

button.addEventListener('click', addMovie)

image.addEventListener('change', ({target}) => {
    console.log(target.files[0]);
    const file = target.files[0];
    var imageRef = storageRef.child(`images/${file.name}`);
    imageRef.put(file).then( (snapshot) => {
        console.log(snapshot);
        return imageRef.getDownloadURL();
    }).then( url => {
        let image = document.createElement('img');
        image.src = url;    
        imageContainer.appendChild(image);
        image.value = null;
        movie.image = url

    });
});


async function addMovie() { 
    movie.title = title.value;
    for (let item of answers) {
        movie.answers.push(item.value)
    }
    //http://localhost:4000/test
    let res = await fetch('quiz', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(movie)
    });
    let json = await res.json();
    console.log(json);
    movie = {
        title: '',
        image: '',
        answers: []
    }
}