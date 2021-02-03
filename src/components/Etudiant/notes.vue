<template>
<div>
    <Home/>
    <div class="content">
        <div class="container">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#semestre1" role="tab" aria-controls="home" aria-selected="true">Semestre 1</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#semestre2" role="tab" aria-controls="profile" aria-selected="false">Semestre 2</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#semestre3" role="tab" aria-controls="contact" aria-selected="false">Semestre 3</a>
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

