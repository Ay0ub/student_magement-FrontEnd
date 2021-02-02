<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  data(){
    return {
      test : this.$store.state.etudiant
    }
  },
  components : {

  },
  methods : {
    redirect(){
      this.$router.push('etudiant')
    }
  },
  mounted(){
    //this.redirect();
  }
}
</script>

