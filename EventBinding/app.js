Vue.createApp({
    data(){
        return {
            leNombre : 0,
        };
    },
    methods: {
        incOne(){
            this.leNombre++;
        },
        decOne(){
            this.leNombre--;
        },
        add(nbre){
            this.leNombre+=nbre;
        },
        sub(nbre){
            this.leNombre-=nbre;
        },
    }
}).mount('#monApp');