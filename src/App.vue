<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function(){
    
  },
  created: function(){
    this.$router.push({name:"Soon"});
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>
