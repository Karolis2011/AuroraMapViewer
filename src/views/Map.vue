<template>
  <panZoom @init="onInit" :options="{minZoom: 0.05, maxZoom: 5}">
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
      console.log("AAAA")
      panzoomInstance.moveTo(-8160 / 2, -8160 / 2, 1)
    },
    onPan(e) {
      console.log(e)
    }
  },
  data () {
    return {
      publicPath: 'https://mapimages.build.aurorastation.org/',
    }
  }
}
</script>

<style lang="scss" scoped>
  .mapcontents {
    display: inline-block;
    min-width: 8160px;
    min-height: 8160px;
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