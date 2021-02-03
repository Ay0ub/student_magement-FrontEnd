<template>
    <div>
        <Nav/>
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
import Nav from './navbar_login.vue'
export default {
    components : {
        Nav,
    },
    data() {
        return {
            email : '',
            password : '',
        }
    },

    methods: {
        login(){
            
        },
    }
}
</script>