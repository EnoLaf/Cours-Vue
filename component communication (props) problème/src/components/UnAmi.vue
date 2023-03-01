<template>
    <div class="card border-dark mb-3">
        <h2 class="card-header">{{leNom}}-{{mutablePremium==='1'?"Ami de ouf": "Ami pas ouf ouf"}}</h2>
        <div class="card-body text-dark">
            <button @click="toggleDetails()" type="button" class="btn btn-dark mb-1">{{detailsVisibles ? 'Masquer':'Voir'}}</button>
            <button @click="afficherPremium()" type="button" class="btn btn-dark mb-1">{{mutablePremium =='1'? 'Pas prémium':'Prémium'}}</button>
            <ul v-if="detailsVisibles" class="list-group list-group-flush">
                <li class="list-group-item">{{leMail}}</li>
                <li class="list-group-item">{{lePhone}}</li>                          
            </ul>
         </div>
    </div>
</template>

<script>
    export default{
        props:[
            "leNom",
            "lePhone",
            "leMail",
            "premium"
        ],
        data(){
            return{
                detailsVisibles:false,
                mutablePremium:this.premium,
            }
        },
        methods: {
            toggleDetails(){
                this.detailsVisibles =! this.detailsVisibles;
            },
            afficherPremium(){
                if (this.mutablePremium == "1"){
                    this.mutablePremium = "0";
                }else{
                    this.mutablePremium ="1";
                }
            }
        },
    }
</script>