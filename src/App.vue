<template>
  <div id="app">
    <div id="nav">
      <router-link to="/notes">note</router-link><br>
      <router-link to="/serviceSent">service</router-link><br>
      <router-link to="/coursAdmin">cours Admin</router-link><br>
      <router-link to="/register">register</router-link><br>
      <router-link to="/coursEtudiant">Cours Etudiant</router-link>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",

}
</script>