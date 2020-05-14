<template>
  <panZoom @init="onInit" :options="{minZoom: 0.5, maxZoom: 10}">
    <div class="mapcontents">
      <img :src="map">
      <!-- <router-link class="linkup" :to="`/${zlevel + 1}`">Up</router-link> -->
    </div>
  </panZoom>
</template>

<script>
import maps from '../maps'
export default {
  computed: {
    map() {
      return this.publicPath + maps[this.$route.params.z].file
    },
    zlevel() {
      return Number.parseInt()
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
      publicPath: 'https://mapimages.build.aurorastation.org/',
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