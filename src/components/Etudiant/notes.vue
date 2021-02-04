<template>
<div>
    <Home/>
    <div class="content">
        <div class="container">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#semestre1" role="tab" aria-controls="home" aria-selected="true" @click="getNotes(1)">Semestre 1</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#semestre2" role="tab" aria-controls="profile" aria-selected="false" @click="getNotes(2)">Semestre 2</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#semestre3" role="tab" aria-controls="contact" aria-selected="false" @click="getNotes(3)">Semestre 3</a>
                </li>
            </ul>
                <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="semetre1" role="tabpanel" aria-labelledby="home-tab">
                    <!-- semestre 1 -->
                    <div class="card">
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Module</th>
                                        <th>Note</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="element in notes" v-bind:key="element.id">
                                        <td>{{element[0]}}</td>
                                        <td>{{element[1]}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="profile" role="semestre2" aria-labelledby="profile-tab">
                    <!-- semestre 2 -->
                    <div class="card">
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Module</th>
                                        <th>Note</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="element in notes" v-bind:key="element.id">
                                        <td>{{element[0]}}</td>
                                        <td>{{element[1]}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="contact" role="semestre3" aria-labelledby="contact-tab">
                    <!-- semestre 3 -->
                    <div class="card">
                        <div class="card-body">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Module</th>
                                        <th>Note</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="element in notes" v-bind:key="element.id">
                                        <td>{{element[0]}}</td>
                                        <td>{{element[1]}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>

</template>

<script>
import axios from 'axios'
import Home from './accueil'
export default {
    name: 'Note',
    components:{
        Home,
    },
    data() {
        return {
            notes : [],
            idUser : this.$session.get('id'),
            idemestre : '',
        }
    },

    methods : {
        getNotes(semestre)
        {
            axios.post('http://localhost:8080/api/v1/student/getUserNote/'+this.idUser+'/'+semestre).then((result) => {
                console.log(result);
                this.notes = result.data;
            }).catch((err) => {
                console.log(err)
            });
        },
    },

    mounted(){
        this.getNotes(1);
    }
}
</script>

