<template>
    <div>
        <Nav/>
        <div id="nav" class="sidebar">
            <router-link to="/coursEtudiant">Cours</router-link>
            <router-link to="/notes">Notes</router-link>
            <router-link to="/serviceEtudiant">Services</router-link>
            <router-link to="/absence">Absence</router-link>
            <router-link to="/emploi">Empois de temps</router-link>
        </div>
    </div>
</template>

<script>
import Nav from '../navbar'
export default {
    components: {
        Nav,
    },

    methods: {
        
    },

    mounted() {
        
    }
}
</script>

