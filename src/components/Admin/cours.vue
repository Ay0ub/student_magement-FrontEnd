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