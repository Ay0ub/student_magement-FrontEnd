<template>
    <div>
        <Nav/>
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
</template>

<script>
import Nav from './nav.vue'
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