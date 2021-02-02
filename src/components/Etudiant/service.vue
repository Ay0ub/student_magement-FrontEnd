<template>
    <div>
        <Home class="sidebar"/>
        <div class="container content">
            <div class="card">
                <div class="card-header text-primary">
                    <h3>Services</h3>
                </div>
                <div class="card-body">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="1" v-model="service" :value="1">
                        <label class="form-check-label" for="1">Demander de l'attestation scolaire</label>
                    </div>
                    
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="3" v-model="service" :value="2">
                        <label class="form-check-label" for="3">Demande des documents d'inscription</label>
                    </div>
                    
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="4" v-model="service" :value="3">
                        <label class="form-check-label" for="4">Demande de relevé de note</label>
                    </div>
                    
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="5" v-model="service" :value="'autre'">
                        <label class="form-check-label" for="5">Autre</label>
                    </div>

                    <div class="form-check">
                        <label class="form-label" for="6" v-if="this.service == 'autre'">Entrez le service</label>
                        <input class="form-control" type="text" id="6" v-model="autre" v-if="this.service == 'autre'" required>
                    </div>        
                </div>
                <div class="card-footer ">
                    <button class="btn btn-primary pull-right" @click="setService">Envoyer</button>
                </div>
            </div>

            <div class="card" style="top: 20px">
                <div class="card-header text-primary">
                    <h3>Tableau des serice envoyé</h3>
                </div>
                <div class="card-body" >

                    <table class="table">
                        <thead>
                            <tr>
                                <th>Serice</th>
                                <th>Date</th>
                                <th>Etat</th>
                            </tr>
                        </thead>
                        <tbody>
                            <div v-for="element in services" v-bind:key="element.id">
                                <tr>
                                    <td>{{element.service}}</td>
                                    <td>{{element.date}}</td>
                                    <td>{{element.etat}}</td>
                                </tr>
                            </div>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Home from './accueil'
export default {
    name: 'service',
    components:{
        Home,
    },

    data(){
        return{
            services: [],
            service : '',
            autre : '',
            repense: '',
        }
    },

    methods:{
        getServices(){

        },
        setService()
        {
            // switch(this.service)
            // {
            //     case 1:
            //         return this.repense = "Demander de l'attestation scolaire";
            //     case 2:
            //         return this.repense = "Demande des documents d'inscription";
                    
            //     case 3:
            //         return this.repense = "Demande de relevé de note";
                    
            //     case "autre":
            //         return this.repense = this.autre; 
            // }

            
        }
    },

    mounted() {
        this.getServices;
    }
    
}
</script>

<style>
    body {
    margin: 0;
    font-family: "Lato", sans-serif;
    }

    .sidebar {
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;
    }

    .sidebar a {
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
    }
    
    .sidebar a.active {
    background-color: #4CAF50;
    color: white;
    }

    .sidebar a:hover:not(.active) {
    background-color: #555;
    color: white;
    }

    div.content {
    margin-left: 200px;
    padding: 1px 16px;
    height: 1000px;
    }

    @media screen and (max-width: 700px) {
    .sidebar {
        width: 100%;
        height: auto;
        position: relative;
    }
    .sidebar a {float: left;}
    div.content {margin-left: 0;}
    }

    @media screen and (max-width: 400px) {
    .sidebar a {
        text-align: center;
        float: none;
    }
    }
</style>