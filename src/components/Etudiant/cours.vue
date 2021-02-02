<template>
    <div>
        <div class="card">
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
</template>

<script>
export default {
    name: 'cours',
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