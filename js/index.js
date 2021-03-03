Vue.createApp({
data() {
    return {
        word: null,
        list: "null",
        words: []
    }
},

methods: {
    Add(){
        this.list = this.word
    }


    },
computed: {
    UpperCase() {
        return this.list.toUpperCase()
    },
    LowerCase() {
        return this.list.toLowerCase()
    }

}

}).mount("#app")