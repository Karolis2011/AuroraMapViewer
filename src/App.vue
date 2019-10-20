<template>
  <div id="app">
    <div id="nav">
      <router-link to="/3">Sub level</router-link> |
      <router-link to="/4">Main level</router-link> |
      <router-link to="/5">Construction level</router-link> |
      <router-link to="/6">Surface level</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
  overflow: hidden;
}

#nav {
  padding: 5px;
  padding-top: 10px;
  background: white;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
