<template>
    <div>
        <Nav/>
        <div class="alert alert-danger" role="alert" v-if="error">
            email ou mot de passe incorrect
        </div>
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label" >Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label" >Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                    </div>
                    <button type="submit" class="btn btn-primary" @click="login">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Nav from './navbar_login.vue'
export default {
    components : {
        Nav,
    },
    data() {
        return {
            email : '',
            password : '',
            type: '',
            error : false,
        }
    },

    methods: {
        login(){
            axios.post('http://localhost:8080/api/v1/student/authentification/'+this.email+'/'+this.password).then((result) => {
                console.log(result);
                if(result.status == 200 && result.data.idUser != null)
                {
                    this.$session.set('id',result.data.idUser)
                    this.$session.set('nom',result.data.nameUser)
                    this.$session.set('type',result.data.typeUser)
                    this.$router.push(result.data.typeUser)
                }else{
                    this.error = true
                }
            }).catch((err) => {
                console.log(err);
            });
        },
    },

    mounted() {

    }
}
</script>