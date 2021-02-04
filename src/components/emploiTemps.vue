<template>
    <div>
        <div v-if="type == 'admin'">
            <Admin/>
        </div>
        <div v-else-if="type == 'etudiant'">
            <etudiant/>
        </div>
            <div v-else-if="type == 'enseignant'">
        </div>
    </div>
</template>

<script>
import Admin from '../components/Admin/accueil'
import etudiant from './Etudiant/accueil'
import enseignant from './Enseignant/accueil'
export default {
    components:{
        Admin,
        etudiant,
        enseignant
    },

    data() {
        return {
            type : this.$session.get('id'),
        }
    }
}
</script>

