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
                                <tr>
                                    <div v-for="element in absences" v-bind:key="element.id">
                                        <td>{{element.module}}</td>
                                        <td>{{element.pourcentage}}</td>
                                    </div>
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
import Home from './accueil.vue'
export default {
    name: "absence",
    components: {
        Home,
        
    },
    data() {
        return{
            absences : [],
        }
    },

    methods: {
        getAbsences(){
            
        },
    },

    mounted() {
        this.getAbsences()
    }
}
</script>

