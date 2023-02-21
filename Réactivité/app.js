Vue.createApp({
    data(){
        return {
            leNombre : 0,
            tentative :'',
        };
    },
    watch:{
        leNombre(value){
            if(value==7){
                this.tentative='Bravo tu as trouvé le nombre mystère!'
            }
            else if(value>7){
                this.tentative='Tu as dépassé le nombre mystère. Attends 5sec pour réinitialiser le compteur.'
            }
            else{
                this.tentative='Essaie encore!'
            }
            setTimeout(() => {
                this.leNombre=0
            }, 5000);
        }
    },
    methods: {
        add(nbre){
            this.leNombre+=nbre;
        },
    }
}).mount('#monApp');