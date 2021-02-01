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