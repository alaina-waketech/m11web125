<template>
  <div id="nav">
    <nav>
      <router-link to="/HomeView">Home</router-link>
      <router-link to="/AboutView">About</router-link>
      <router-link to="/ContactView">Contact</router-link>
      <router-link to="/QuotesView">Quotes</router-link>
    </nav>
  </div>
</template>

<style lang="css">
#nav .active-link {
  border-bottom: 2px, black;
}
</style>
