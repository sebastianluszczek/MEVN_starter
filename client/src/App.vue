<template>
  <div id="app">
    <div class="logos">
      <img alt="vue.js" src="./assets/images/vuejs.png">
      <img alt="node.js" src="./assets/images/nodejs.png">
      <img alt="express.js" src="./assets/images/express.png">
      <img alt="mongoDB" src="./assets/images/mongodb.png">
    </div>

    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;

  .logos {
    img {
      height: 128px;
    }
  }

  .btn {
    width: 120px;
    height: 42px;
    line-height: 42px;
    background-color: #444;
    color: #fff;
    border: none;
    box-shadow: none;
    border-radius: 5px;
    text-transform: uppercase;
    margin-top: 20px;
  }
}
</style>
