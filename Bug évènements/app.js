Vue.createApp({
    data(){
        return {
            leNombre : 0,
            nameUser :'nono',
        };
    },
    methods: {
        add(nbre){
            this.leNombre+=nbre;
        },
        sub(nbre){
            this.leNombre-=nbre;
        },
        userName(){
            if(this.nameUser==''){
                console.log("fonction exécutée");
                return 'test';
            }
            else {
                console.log("fonction exécutée");
                return 'un autre test';
            }
        },
    }
}).mount('#monApp');