const app = Vue.createApp({
    data() {
        return {
        nomFilm: '',
        mesFilms: [],
        };
    },
    methods: {
        ajouterFilm() {
        this.mesFilms.push(this.nomFilm);
        },
        supprimerFilm(index){
            this.mesFilms.splice(index,1);
        },
    },
    });
    app.mount('#monApp');