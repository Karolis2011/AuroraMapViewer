<template>
  <div class="root">
    <l-map
      ref="map"
      :zoom="zoom"
      :center="center"
      :min-zoom="minZoom"
      :crs="crs"
      class="map"
      :maxBounds="maxBounds"
      @update:zoom="onZoom"
      @update:center="onPan"
    >
      <l-image-overlay
        className="mapImage"
        :url="mapUrl"
        :bounds="maxBounds"
      />
    </l-map>
  </div>
</template>

<script>
import { CRS } from "leaflet";
import { LMap, LImageOverlay, LMarker, LPopup, LPolyline } from "vue2-leaflet";
import maps from '../maps'

export default {
  components: {
    LMap,
    LImageOverlay,
    LMarker,
    LPopup,
    LPolyline
  },
  computed: {
    maxBounds() {
      return this.bounds
    },
    mapObject() {
      return maps[this.$route.params.z]
    },
    mapUrl() {
      return this.publicPath + this.mapObject.file
    }
  },
  methods: {
    onZoom(zoom) {
      this.zoom = zoom
      this.updateURL()
    },
    onPan(center) {
      this.center = center
      this.updateURL()
    },
    updateURL() {
      if(this.uut) return
      this.uut = setTimeout(this._updateURL, 200)
    },
    _updateURL() {
      this.$log("UpURL")
      this.$router.replace({path: this.$route.path, query: {y: this.center.lat, x: this.center.lng, z: this.zoom}})
      this.uut = null
    },
    updateProps(route) {
      if(route.query.x && route.query.y && route.query.z) {
        this.center.lat = parseFloat(route.query.y)
        this.center.lng = parseFloat(route.query.x)
        this.zoom = parseInt(route.query.z)
      }
    }
  },
  data () {
    return {
      uut: null,
      updating: false,
      zoom: 0,
      center: {lat: 0, lng: 0},
      minZoom: 0,
      crs: CRS.Simple,
      bounds: [[0, 0], [255, 255]],
      publicPath: 'https://mapimages.build.aurorastation.org/',
    }
  },
  created() {
    this.updateProps(this.$route)
  },
  watch: {
    $route (to, from){
      this.updateProps(to)
    }
  }
}
</script>

<style lang="scss" scoped>
  .map {
    width: 100%;
    height: 100%;
  }

  div.root {
    flex-grow : 1;
  }
</style>

<style lang="scss">
  .map .mapImage {
    image-rendering: pixelated;
  }
</style>