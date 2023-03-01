const app = Vue.createApp({
    data() {
        return {
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
});
app.component('ami-comp',{
    template :`
    <div class="card border-dark mb-3">
        <div class="card-header">{{unPote.nameAmi
        }}</div>
        <div class="card-body text-dark">
            <button @click="toggleDetails()" type="button" class="btn btn-dark mb-1">{{detailsVisibles ? 'Masquer':'Voir'}}</button>
            <ul v-if="detailsVisibles" class="list-group list-group-flush">
                <li class="list-group-item">{{unPote.email}}</li>
                <li class="list-group-item">{{unPote.phone}}</li>                          
            </ul>
         </div>
    </div>`,
    data() {
        return {
            detailsVisibles : false,
            unPote : {
                id : 0,
                nameAmi : "COCO L'ASTICOT",
                phone : "01 23 45 67 89",
                email : 'coco@lasticot.com',
            },
        };
    },
    methods: {
        toggleDetails(){
            this.detailsVisibles =! this.detailsVisibles;
        }
    },
})
app.mount('#monApp');