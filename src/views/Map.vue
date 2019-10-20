<template>
  <panZoom @init="onInit" :options="{minZoom: 0.5, maxZoom: 5}">
    <div class="mapcontents">
      <img :src="map">
      <router-link class="linkup" :to="`/${zlevel + 1}`">Up</router-link>
    </div>
  </panZoom>
</template>

<script>
export default {
  computed: {
    map() {
      return `${this.publicPath}map_z${this.zlevel}.png`
    },
    zlevel() {
      return Number.parseInt(this.$route.params.z)
    }
  },
  methods: {
    onInit(panzoomInstance) {
      panzoomInstance.zoomAbs(this.dim / 2, this.dim / 2, 1)
    },
    onPan(e) {
      console.log(e)
    }
  },
  data () {
    return {
      publicPath: process.env.BASE_URL,
      dim: 8192
    }
  }
}
</script>

<style lang="scss" scoped>
  .mapcontents {
    float: left;
    z-index: -1;
  }
  img {
    image-rendering: pixelated;
  }
  .linkup {
    top: 3564px;
    left: 3500px;
    position: absolute;
    color: white;
  }
</style>