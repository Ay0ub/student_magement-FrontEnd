<template>
    <div>
        <Home />
        <div class="content">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>module</th>
                                    <th>pourcentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="element in absences" v-bind:key="element.id">
                                    <td>{{element[0]}}</td>
                                    <td>{{element[1]}} %</td>
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
import axios from 'axios'
import Home from './accueil.vue'
export default {
    name: "absence",
    components: {
        Home,
        
    },
    data() {
        return{
            absences : [],
            idUser : 1,
        }
    },

    methods: {
        getAbsences(){
            axios.post('http://localhost:8080/api/v1/student/prct/'+this.idUser).then((result) => {
                console.log(result)
                this.absences = result.data
                console.log('ok')
            }).catch((err) => {
                console.log(err)
            });
        },
    },

    mounted() {
        this.getAbsences()
    }
}
</script>

