<template>
    <div>
        <Home/>
        <div class="content">
            <div class="container" >
                <div class="card" style="top:20px;">
                    <div class="card-header">
                        <nav class="navbar navbar-light bg-light">
                            <div class="container-fluid">
                                <div class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="motCle">
                                    <button class="btn btn-outline-success" @click="search">Search</button>
                                    <button class="btn btn-outline-warning" @click="clear">Clear</button>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>cours</th>
                                    <th class="text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="element in cours" v-bind:key="element.id">
                                    <td>{{element.nameCours}}</td>
                                    <td>
                                        <button class="btn btn-success" @click="download(element.docCours)">Download</button>
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
import Home from './accueil'
import axios from 'axios'
export default {
    name: 'cours',
    components:{
        Home,
    },

    data() {
        return {
            cours : [],
            motCle : '',
        }
    },

    methods : {
        getCours(){
            axios.get('http://localhost:8080/api/v1/student/getCourses').then((result) => {
                console.log(result)
                this.cours = result.data;                
            }).catch(err => {
                console.log(err);
            })
        },
        download(lien){
            window.open('http://127.0.0.1:8887/'+lien, '_blank');
            
        },
        search(){
            axios.get('http://localhost:8080/api/v1/student/'+this.motCle).then(result => {
                console.log(result.data);
                this.cours = result.data;
            }).catch(err => {
                console.log(err)
            })
        },
        clear(){
            this.motCle = ''
            axios.get('http://localhost:8080/api/v1/student/getCourses').then((result) => {
                console.log(result)
                this.cours = result.data;                
            }).catch(err => {
                console.log(err);
            })
        }
    },

    mounted() {
        this.getCours()
    }
}
</script>
