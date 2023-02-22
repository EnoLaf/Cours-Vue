const app = Vue.createApp({
    data() {
        return {
        nomFilm: '',
        mesFilms: [],
        show: true,
        titre: 'Masquer Liste',
        };
    },
    methods: {
        ajouterFilm() {
        this.mesFilms.push(this.nomFilm);
        },
        supprimerFilm(index){
            this.mesFilms.splice(index,1);
        },
        showList(){
            this.show=!this.show;
            if(this.show==false){
                this.titre='Afficher Liste';
            }
            else{
                this.titre='Masquer Liste';
            }
        },
    },
    });
    app.mount('#monApp');