<template>
    <div>
        <Nave/>
        <Home class="sidebar"/>
        <div class="content">
            <div class="container" >
                <div class="card" style="top:20px;">
                    <div class="card-header">
                        <nav class="navbar navbar-light bg-light">
                            <div class="container-fluid">
                                <div class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="motCle">
                                    <button class="btn btn-outline-success" type="submit" @click="search">Search</button>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>cours</th>
                                    <th class="text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <div v-for="element in cours" v-bind:key="element.id">
                                    <tr>
                                        <td>{{element.cours}}</td>
                                        <td>
                                            <button style="btn btn-seccess" @click="download">Download</button>
                                        </td>
                                    </tr>
                                </div>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Home from './accueil'
import Nave from '../Admin/accueil'
export default {
    name: 'cours',
    components:{
        Home,
        Nave
    },

    data() {
        return {
            cours : [],
            motCle : '',
        }
    },

    methods : {
        getCours(){

        },
        download(){

        },
        search(){

        },
    },

    mounted() {
        this.getCours()
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