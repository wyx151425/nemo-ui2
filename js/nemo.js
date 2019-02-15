const header = new Vue({
    el: "#header",
    data: {
        isVisible: false,
        timer: null
    },
    methods: {
        navVisible: function () {
            clearInterval(this.timer);
            this.timer = null;
            this.isVisible = true;
        },
        navInvisible: function () {
            this.timer = setInterval(function () {
                header.isVisible = false;
            }, 500);
        },
        loginModalVisible: function () {
            loginModal.visible();
        }
    }
});