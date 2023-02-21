Vue.createApp({
    data(){
        return {
            uneString:'',
            uneAutreString:'',
        };
    },
    methods: {
        alerte(){
            alert("ALERTE");
        },
        capterEventInput(event){
            console.log(event);
            this.uneString = event.target.value
        },
        capterEventInput2(event){
            console.log(event);
            this.uneAutreString = event.target.value
        },
    }
}).mount('#monApp');