<template>
    <div class="card border-dark mb-3">
        <div class="card-header">{{leNom}}</div>
        <div class="card-body text-dark">
            <button @click="toggleDetails()" type="button" class="btn btn-dark mb-1">{{detailsVisibles ? 'Masquer':'Voir'}}</button>
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
        ],
        data(){
            return{
                detailsVisibles:false,
            }
        },
        methods: {
            toggleDetails(){
                this.detailsVisibles =! this.detailsVisibles;
            }
        },
    }
</script>