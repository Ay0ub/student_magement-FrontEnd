<template>
    <div>
        <Home/>
        <div class="content">
            <div class="container">
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
    </div>
</template>

<script>
// import axios from 'axios'
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
            
        }
    },

    mounted() {
        this.getServices;
    }
    
}
</script>
