new Vue({
    el: "#container",
    data: {
        activeId: null,
        items: [],
        pending: false,
        modal: false,
        file: null,
        imageSrc: null,
        storage: null,
        storageRef: null,
        answers: [],
        title: "",
        comment: "",
        addError: "",
        mode: "",
        editId: null,
    },
    mounted: async function () {
        this.storage = firebase.storage();
        this.storageRef = firebase.storage().ref();
        await this.getQuizes();
    },
    methods: {
        toggleActive: function (id) {
            if (this.activeId == id) {
                this.activeId = null;
                return;
            }
            this.activeId = id;
        },
        getQuizes: async function () {
            this.pending = true;
            const result = await fetch('quiz');
            const { quiz } = await result.json();
            this.items = quiz;
            this.pending = false;
        },
        openModal: async function (edit = false, id = null) {
            this.mode = "add";
            this.modal = true;
            if (edit) {
                this.mode = "edit";
                const quiz = await this.getQuiz(id);
                this.title = quiz.title;
                this.imageSrc = quiz.image;
                this.answers = quiz.answers;
                this.editId = id;
            }
        },
        closeModal: function () {
            this.modal = false;
            this.resetQuizData();
        },
        change: function ({ target }) {
            this.addError = false;
            if (target.name == 'answer') return;
            target.name == 'title' ? this.title = target.value : this.comment = target.value
        },
        addQuestion: async function () {
            if (!this.title || !this.answers.length || !this.imageSrc) {
                this.addError = true;
                return;
            }
            movie = {};
            movie.title = this.title;
            movie.answers = this.answers;
            movie.image = this.imageSrc;

            let result = await fetch('quiz', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(movie)
            });
            let response = await result.json();
            this.resetQuizData();
            this.closeModal();
            await this.getQuizes();
        },
        submit: async function () {
            if (this.mode == 'add') {
                let answerInputs = document.getElementsByName('answer');
                answerInputs.forEach(el => this.answers.push(el.value));
                console.log('submit');
                await this.addQuestion();
            } else {
                const answers = [];
                let answerInputs = document.getElementsByName('answer');
                answerInputs.forEach(el => answers.push(el.value));
                this.answers = answers;
                await this.editQuiz();
            }
        },
        editQuiz: async function () {
            if (!this.title || !this.answers.length || !this.imageSrc) {
                this.addError = true;
                return;
            }
            movie = {};
            movie.title = this.title;
            movie.answers = this.answers;
            movie.image = this.imageSrc;
            const result = await fetch(`quiz/${this.editId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(movie)
            });
            this.resetQuizData();
            this.closeModal();
            await this.getQuizes();
            console.log(await result.json());
        },
        selectImage: function (e) {
            this.addError = false;
            this.file = e.target.files[0];
            var imageRef = this.storageRef.child(`images/${this.file.name}`);
            imageRef.put(this.file).then((snapshot) => {
                console.log(snapshot);
                return imageRef.getDownloadURL();
            }).then(url => {
                this.imageSrc = url;
                console.log(url);
            });
        },
        clickChange: function () {
            document.querySelector('input[type="file"]').click();
        },
        deleteQuestion: async function (id) {
            console.log(id)
            const body = JSON.stringify({ id })
            const result = await fetch('quiz', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'delete',
                body,
            });
            const data = await result.json();
            this.getQuizes()
        },
        getQuiz: async function (id) {
            const result = await fetch(`quiz/${id}`);
            const data = await result.json();
            return data;
        },
        resetQuizData: function () {
            this.title = "",
                this.answers = [],
                this.imageSrc = null;
                this.editId = null;
        }
    },
})






const http = function () { };

http.prototype.post = async function (endpoint, params) {
    const body = JSON.stringify(params);
    const result = await fetch(endpoint, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body,
    });
    const data = await result.json();
    return data;
}

http.prototype.delete = async function (endpoint, params) {
    const body = JSON.stringify(params);
    const result = await fetch(endpoint, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'delete',
        body,
    });
    const data = await result.json();
    return data;
}

http.prototype.put = async function (endpoint, params) {
    const body = JSON.stringify(params);
    const result = await fetch(endpoint, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'put',
        body,
    });
    const data = await result.json();
    return data;
}

http.prototype.get = async function (endpoint) {
    this.pending = true;
    const result = await fetch(endpoint);
    const data = await result.json();
    this.pending = false;
    return data
} 