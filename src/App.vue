<template>
  <div id="app">
    <div id="nav">
      <router-link
      v-for="(m, k) in maps"
      :key="k"
      :to="'/' + k">{{ m.name }}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import maps from './maps'
export default {
  data: () => ({
    maps
  })
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
}

body {
  margin: 0px;
  // overflow: hidden;
}

#nav {
  padding: 5px;
  padding-top: 10px;
  background: white;
  z-index: 10;
  right: 0;
  left: 0;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 0.5em;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
