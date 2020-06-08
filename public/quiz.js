new Vue({
    data: {
        name: 'კვერცხი',
        items: [],
        modal: false
    },
    mounted: function () {
        this.getQuiz() // Calls the method before page loads
    },
    methods: {
        getQuiz: function () {
            fetch('quiz')
                .then(res => res.json())
                .then(data => this.items = data.quiz)
        },
        openModal: function () {
            this.modal = true
        },
        closeModal: function(e) {
            console.log(e.target.id)
            if(e.target.id == 'notClose') return false;
            this.modal = false;
        }
    },
    el: '#question',
})