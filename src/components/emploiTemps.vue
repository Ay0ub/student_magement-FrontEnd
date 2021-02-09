<template>
    <div>
        <div v-if="type == 'admin'">
            <Admin/>
        </div>
        <div v-else-if="type == 'etudiant'">
            <etudiant/>
        </div>
        <div v-else-if="type == 'enseignant'">
            <enseignant/>
        </div>

        <div class="content">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" @click="getEmploi(1)">Semestre 1</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" @click="getEmploi(2)">Semestre 2</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false" @click="getEmploi(3)">Semestre 3</a>
                </li>
            </ul>

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="card">
                        <div class="card-body">
                            <pdf :src="emploi" style="width:100%;height:600px;overflow:auto"></pdf>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="card">
                        <div class="card-body">
                            <pdf :src="emploi" style="width:100%;height:600px;overflow:auto"></pdf>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div class="card">
                        <div class="card-body">
                            <pdf :src="emploi" style="width:100%;height:600px;overflow:auto"></pdf>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pdf from 'vue-pdf'
import Admin from '../components/Admin/accueil'
import etudiant from './Etudiant/accueil'
import enseignant from './Enseignant/accueil'
import axios from 'axios'
export default {
    components:{
        Admin,
        etudiant,
        enseignant,
        pdf
    },

    data() {
        return {
            type : this.$session.get('type'),
            emploi : '',
        }
    },

    methods : {
        getEmploi(semestre)
        {
            axios.get("http://localhost:8080/api/v1/student/getEmp/"+semestre).then((result) => {
                this.emploi = result.data[0].docEmptemp;
            }).catch((err) => {
                console.log(err);
            });
        }
    },

    mounted() {
        this.getEmploi(1)
    }
}
</script>

