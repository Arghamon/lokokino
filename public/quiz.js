new Vue({
    el: "#container",
    data: {
        activeId: null,
        items: [],
        pending: false,
    },
    mounted: async function () {
        await this.getQuiz()
    },
    methods: {
        toggleActive: function (id) {
            if (this.activeId == id) {
                this.activeId = null;
                return;
            }
            this.activeId = id;
        },
        getQuiz: async function () {
            this.pending = true;
            const result = await fetch('quiz');
            const { quiz } = await result.json();
            this.items = quiz;
            this.pending = false;
            console.log(this.items)
        },
        addQuestion: async function () { },
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
            this.getQuiz()
        },
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