<template>
    <div>
        <Home/>
        <div class="content">
            <div class="card" style="margin: 10px">
                <form @submit.prevent="setCours">
                    <div class="card-body">
                        <div class="mb-3">
                            <label for="nom" class="form-label">Nome de cours :</label>
                            <input type="text" id="nom" class="form-control" v-model="nom" required>
                        </div>

                        <div class="mb-3">
                            <label for="cours" class="form-label">Cours :</label>
                            <input type="file" id="cours" class="form-control" ref="file" accept=".pdf" v-on:change="handleFileUpload()">
                        </div>

                        <div class="mb-3">
                            <label for="motCle" class="form-label">Mot clé :</label>
                            <input type="text" id="motCle" class="form-control" v-model="motCle" required>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary" type="submit">Enregistrer</button>
                    </div>
                </form>
            </div>

            <div class="card" style="margin: 10px">
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
</template>

<script>
import axios from 'axios'
import Home from '../Admin/accueil'
export default {
    components:{
        Home
    },
    data(){
        return{
            cours : [],
            pdf : '',
            motCle : '',
            nom : '',
        }
    },

    methods: {
        getCours(){
            axios.get('http://localhost:8080/api/v1/student/getCourses').then((result) => {
                console.log(result)
                this.cours = result.data;                
            }).catch(err => {
                console.log(err);
            })
        },
        setCours(){
            axios.post("http://localhost:8080/api/v1/student/addcours",{
                'nameCours' : this.nom,
                'docCours' : this.nom,
                'motcleCours' : this.motCle
            }).then(response => {
                console.log(response);
                this.getCours();
            }).catch(err => {
                console.log(err)
            })
        },
        download(lien){
            window.open('http://127.0.0.1:8887/'+lien, '_blank');
        },
        handleFileUpload(){
            this.pdf = this.$refs.file.files[0];
        }
    },

    mounted() {
        this.getCours()
    }
}
</script>

