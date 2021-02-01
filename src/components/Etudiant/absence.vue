<template>
    <table>
        <thead>
            <tr>
                <th>module</th>
                <th>pourcentage</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <div v-for="element in absences" v-bind:key="element.id">
                    <td>{{element.module}}</td>
                    <td>{{element.pourcentage}}</td>
                </div>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "absence",

    data() {
        return{
            absences : [],
        }
    },

    methods: {
        getAbsences(){

        },
    },

    mounted() {
        this.getAbsences()
    }
}
</script>