const app = Vue.createApp({
    data() {
        return {
            detailsVisibles : false,
            lesAmis : [{
                id : 0,
                nameAmi : "COCO L'ASTICOT",
                phone : "01 23 45 67 89",
                email : 'coco@lasticot.com',
            },{
                id : 1,
                nameAmi : "Janine DeLavega",
                phone : "98 76 54 32 10",
                email : 'janine@delavega.com',
            }],
        };
    },
    methods: {
        toggleDetails(){
            this.detailsVisibles =! this.detailsVisibles;
        }
    },
});
app.mount('#monApp');