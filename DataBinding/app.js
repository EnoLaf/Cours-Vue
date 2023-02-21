Vue.createApp({
    data() {
        return {
            lien: './img.jpg',
            nom: 'Juliette',
            age: 29,
        }
    },
    methods: {
        nbreRandom(){
            return Math.random();
        },
        addAge(){
            return this.age+10;
        }
    },
}).mount('#app');

