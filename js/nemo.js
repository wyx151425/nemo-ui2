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

function getFileNativeUrl(file) {
    let url = null;
    if (undefined !== window.createObjectURL) {
        url = window.createObjectURL(file);
    } else if (undefined !== window.URL) {
        url = window.URL.createObjectURL(file);
    } else if (undefined !== window.webkitURL) {
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}