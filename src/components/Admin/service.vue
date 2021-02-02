<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>etudiant</th>
                    <th>Serice</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <div v-for="element in services" v-bind:key="element.id">
                    <tr>
                        <td>{{element.etudiant}}</td>
                        <td>{{element.service}}</td>
                        <td>{{element.date}}</td>
                        <td>
                            <button class="btn btn-succes" @click="accept">Accepter</button>
                            <button class="btn btn-danger" @click="refuse">Refuser</button>
                        </td>
                    </tr>
                </div>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            services: '',
        }
    },

    methods: {
        getServices(){

        },
        accept(){

        },
        refude(){

        },
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