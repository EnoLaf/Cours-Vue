Vue.createApp({
    data(){
        return {
            input1:'',
            input2:'',
            show:false,
        };
    },
    methods: {
        showTitle(){
            console.log("showtitle")
            this.show=!this.show;
        },
    }
}).mount('#monApp');