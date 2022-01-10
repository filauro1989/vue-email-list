const app = new Vue({
    el: "#app",
    data: {
        email: [],
    }, 
    created() {
        this.createMails()
        
    },
    methods: {
        createMails() {
            for (let index = 0; index < 10; index++) {
                const self = this;
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then(function (response) {
                    self.email.push(response.data.response);
                    console.log(self.email);
                    })
                    .catch(function (error) {
                    console.log(error);
                    });
            }
        }
    }
});