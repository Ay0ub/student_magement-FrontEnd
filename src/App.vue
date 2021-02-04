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
      test : this.$store.state.etudiant,
      type : ''
    }
  },
  components : {

  },
  methods : {
    redirect(){
      if(this.$session.exists() && this.$session.has('id') && this.$session.has('type'))
      {
        this.$router.push(this.$session.get('type'))
      }else{
        this.$router.push('login')
      }
    }
  },
  mounted(){
    this.redirect();
  }
}
</script>

