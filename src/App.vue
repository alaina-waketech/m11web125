<template>
  <div id="app">
    <TheNavigation />
    <div class="container">
      <router-view />
      <GoBack />
    </div>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";
import GoBack from "@/components/GoBack.vue";
export default {
  components: { TheNavigation, GoBack },
};
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  margin-top: 150px;
  background: #eee;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a,
a:visited {
  color: #2c3e50;
}
.container {
  margin: 0 auto;
  max-width: 960px;
}

/* Navigation */
#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  padding: 30px;
  background: #2c3e50;
  color: white;
  display: flex;
  align-items: center;
  border-bottom: 5px solid #4e6c71;
  z-index: 2;
}
#nav a {
  display: inline-block;
  margin-right: 20px;
  color: white;
  opacity: 0.7;
  transition: 0.2 ease color;
}
#nav a.router-link-active,
#nav a:hover {
  opacity: 1;
}

a {
  text-decoration: none;
  font-weight: bold;
}

.go-back {
  display: inline-block;
  margin-bottom: 15px;
}

.btn {
  background-color: #2c3e50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: none;
}
</style>
