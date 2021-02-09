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
                                    <th>Service</th>
                                    <th>Date</th>
                                    <th>Etat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="element in services" v-bind:key="element.id">
                                    <td>{{element[0]}}</td>
                                    <td>{{element[2]}}</td>
                                    <td>{{element[3]}}</td>
                                    <td>
                                        <div v-if="element[4] == null">
                                            <button class="btn btn-success" @click="accept(element[1])">Accepter</button>
                                            <button class="btn btn-danger" @click="refuse(element[1])" style="margin-left:20px">Refuser</button>
                                        </div>
                                        <div v-else>
                                            <!-- {{element[4]}} -->
                                            <span class="badge bg-success" v-if="element[4] == 'accepted'">{{element[4]}}</span>
                                            <span class="badge bg-danger" v-if="element[4] == 'refused'" >{{element[4]}}</span>
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
            axios.put("http://localhost:8080/api/v1/student/updateetatservice/"+idService+"/accepted").then(() => {
                this.getServices();
            }).catch(err => {
                console.log(err);
            })
        },
        refuse(idService){
            axios.put("http://localhost:8080/api/v1/student/updateetatservice/"+idService+"/refused").then(() => {
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

