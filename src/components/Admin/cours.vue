<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="mb-3">
                    <label for="nome" class="form-label">Nome de cours :</label>
                    <input type="text" id="nome" class="form-control">
                </div>

                <div class="mb-3">
                    <label for="cours" class="form-label">Cours :</label>
                    <input type="file" id="cours" class="form-control">
                </div>

                <div class="mb-3">
                    <label for="motCle" class="form-label">Mot clé :</label>
                    <input type="text" id="motCle" class="form-control">
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cours : [],
            pdf : '',
        }
    },

    methods: {
        getCours(){

        },
        setCours(){

        }
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