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
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
}

body {
  background: #1a1921;
  color: white;
  margin: 0px;
  font-family: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
  // overflow: hidden;
}

#nav {
  padding: 5px;
  padding-top: 10px;
  z-index: 10;
  right: 0;
  left: 0;
  background: rgba(255,255,255,0.1) url('/header.png') repeat 50% 50%;
  a {
    font-weight: bold;
    margin: 0 0.5em;
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: rgb(147, 145, 167);
    }
  }
}
</style>
