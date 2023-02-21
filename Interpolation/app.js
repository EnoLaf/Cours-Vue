//Création d'une instance Vue c'est notre application
Vue.createApp({
    //Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    data() {
        return {
        unLivre: 'Les mémoires de Steven Seagal',
        unNombre: 1234567890,
        unTab: ['du texte', 99],
        unObjet: {
            name:'COOL',
            tel:12748312
            }
        };
    },
    methods:{
        nbreRandom(){
            let i = Math.random();
            if(i>0.5){
                return "Cinder";
            }
            else{
                return "Scarlet";
            }
        }
    }
    // L'application est montée sur la balise HTML qui possède l'id bookListApp
    }).mount('#bookListApp');