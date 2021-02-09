<template>
    <div>
        <Home/>
        <div class="content">
            <div class="container">
                <div class="card" style="top: 20px;">
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
                        <button class="btn btn-primary pull-right" @click="setService()">Envoyer</button>
                    </div>
                </div>

                <div class="card" style="top: 40px">
                    <div class="card-header text-primary">
                        <h3>Tableau des services envoyés</h3>
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
                                <tr v-for="element in services" v-bind:key="element.id">
                                    <td>{{element.nameService}}</td>
                                    <td>{{element.dateService}}</td>
                                    <td>
                                        <span class="badge bg-success" v-if="element.etatService == 'accepted'">{{element.etatService}}</span>
                                        <span class="badge bg-danger" v-if="element.etatService == 'refused'">{{element.etatService}}</span>
                                        <span class="badge bg-warning" v-if="element.etatService == null">en cours de traitement ...</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
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
            choice: '',
            idUser : this.$session.get('id'),
        }
    },

    methods:{
        getServices(){
            axios.get('http://localhost:8080/api/v1/student/getServicebyStudent/'+this.idUser).then((result) => {
                console.log(result);
                this.services = result.data;
            }).catch((err) => {
                console.log(err)
            });
        },
        setService()
        {
            if(this.service == 1)
            {
                this.choice = "Demander de l'attestation scolaire"
            }else if(this.service == 2)
            {
                this.choice = "Demande des documents d'inscription"
                
            }else if(this.service == 3)
            {
                this.choice = "Demande de relevé de note"
            }else if(this.service == "autre")
            {
                this.choice = this.autre
            }

            axios.post('http://localhost:8080/api/v1/student/insertService',{
                'nameService' : this.choice,
                'dateService' : new Date().toISOString().slice(0, 10),
                'idUser' : this.idUser,
            }).then((result) => {
                console.log(result)
                this.getServices()
            }).catch((err) => {
                console.log(err)
            });
        }
    },

    mounted() {
        this.getServices();
    }
    
}
</script>
