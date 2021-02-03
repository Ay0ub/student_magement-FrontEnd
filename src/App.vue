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
      this.$router.push('login')
    }
  },
  mounted(){
    //this.redirect();
  }
}
</script>

