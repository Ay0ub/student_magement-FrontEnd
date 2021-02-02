<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  components : {

  },
  methods : {
    redirect(){
      this.$router.push('login')
    }
  },
  mounted(){
    this.redirect();
  }
}
</script>