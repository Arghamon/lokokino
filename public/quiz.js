new Vue({
    el: "#container",
    data: {
        activeClass: false
    },
    methods: {
        toggleActive: function () {
            this.activeClass = !this.activeClass;
        }
    }
})