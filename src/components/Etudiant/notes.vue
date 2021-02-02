<template>
<div>
    <Home class="sidebar"/>
    <div class="container content">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#semestre1" role="tab" aria-controls="home" aria-selected="true">Home</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#semestre2" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#semestre3" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
            </li>
        </ul>
            <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="semetre1" role="tabpanel" aria-labelledby="home-tab">
                <div v-for="element in notes" v-bind:key="element.id">

                </div>
            </div>
            <div class="tab-pane fade" id="profile" role="semestre2" aria-labelledby="profile-tab">
                <div v-for="element in notes" v-bind:key="element.id">
                    
                </div>
            </div>
            <div class="tab-pane fade" id="contact" role="semestre3" aria-labelledby="contact-tab">
                <div v-for="element in notes" v-bind:key="element.id">
                    
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import Home from './accueil'
export default {
    name: 'Note',
    components:{
        Home,
    },
    data() {
        return {
            notes : [],
        }
    },

    methods : {
        getNotes()
        {

        },
    },

    mounted(){
        this.getNotes;
    }
}
</script>

<style>
    body {
    margin: 0;
    font-family: "Lato", sans-serif;
    }

    .sidebar {
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
    position: fixed;
    height: 100%;
    overflow: auto;
    }

    .sidebar a {
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
    }
    
    .sidebar a.active {
    background-color: #4CAF50;
    color: white;
    }

    .sidebar a:hover:not(.active) {
    background-color: #555;
    color: white;
    }

    div.content {
    margin-left: 200px;
    padding: 1px 16px;
    height: 1000px;
    }

    @media screen and (max-width: 700px) {
    .sidebar {
        width: 100%;
        height: auto;
        position: relative;
    }
    .sidebar a {float: left;}
    div.content {margin-left: 0;}
    }

    @media screen and (max-width: 400px) {
    .sidebar a {
        text-align: center;
        float: none;
    }
    }
</style>