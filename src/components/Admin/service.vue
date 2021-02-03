<template>
    <div>
        <Home/>
        <div class="content">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>etudiant</th>
                                    <th>Serice</th>
                                    <th>Date</th>
                                    <th>Etat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="element in services" v-bind:key="element.id">
                                    <td>{{element.idService}}</td>
                                    <td>{{element.nameService}}</td>
                                    <td>{{element.date}}</td>
                                    <td>
                                        <div v-if="element.etatService == null">
                                            <button class="btn btn-success" @click="accept(element.idService)">Accepter</button>
                                            <button class="btn btn-danger" @click="refuse(element.idService)">Refuser</button>
                                        </div>
                                        <div v-else>
                                            {{element.etatService}}
                                        </div>
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
import Home from '../Admin/accueil'
import axios from 'axios'
export default {
    components: {
        Home
    },
    data(){
        return{
            services: '',
        }
    },

    methods: {
        getServices(){
            axios.get('http://localhost:8080/api/v1/student/getServices').then(response => {
                this.services = response.data
            }).catch(err => {
                console.log(err);
            })
        },
        accept(idService){
            axios.put("http://localhost:8080/api/v1/student/"+idService,{
                'etat' : 'accepted'
            }).then(() => {
                this.getServices();
            }).catch(err => {
                console.log(err);
            })
        },
        refude(idService){
            axios.put("http://localhost:8080/api/v1/student/"+idService,{
                'etat' : 'refused'
            }).then(() => {
                this.getServices();
            }).catch(err => {
                console.log(err);
            })
        },
    },
    mounted() {
        this.getServices()
    }
}
</script>

