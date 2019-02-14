<template>
  <nav>
    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'board'}">Board</router-link>
  </nav>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style lang="scss">
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

