<template>
    <div>
        <Nav/>
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nome" class="form-label">Nome :</label>
                        <input type="text" id="nome" class="form-control" v-model="nom">
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Email :</label>
                        <input type="email" id="email" class="form-control" v-model="email">
                    </div>

                    <div class="mb-3">
                        <label for="password" class="form-label">Password :</label>
                        <input type="password" id="password" class="form-control" v-model="password">
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="1" v-model="type" :value="'etudiant'">
                        <label class="form-check-label" for="1">Etudiant</label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="2" v-model="type" :value="'enseignant'">
                        <label class="form-check-label" for="2">Enseignat</label>
                    </div>
                </div>
                <div class="card-footer ">
                    <button class="btn btn-primary" @click="register">Register</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Nav from './navbar_login'
export default {
    components:{
        Nav,
    },
    data() {
        return {
            nom: '',
            email: '',
            password: '',
            type : '',
        }
    },

    methods: {
        register(){
            axios.post('http://localhost:8080/api/v1/student/inscription',{
                'nameUser' : this.nom,
                'emailUser' : this.email,
                'passwordUser' : this.password,
                'typeUser' : this.type,
            }).then((result) => {
                if(result.status == 200)
                {
                    this.$session.start();
                    this.$session.set("type",this.typeUser)
                    this.$session.set("nom",this.nameUser)
                    this.$session.set("id",result.data.idUser)
                    this.$router.push(this.type)
                }
            }).catch((err) => {
                console.log(err)
            });
        },
    }
}
</script>