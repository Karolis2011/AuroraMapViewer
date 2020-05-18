<template>
  <div class="root">
    <l-map
      ref="map"
      :zoom="zoom"
      :center="center"
      :min-zoom="minzoom"
      :max-zoom="maxzoom"
      :crs="crs"
      class="map"
      :maxBounds="maxBounds"
      @update:zoom="onZoom"
      @update:center="onPan"
      @ready="mapReady"
    >
      <l-image-overlay
        className="mapImage"
        :url="mapUrl"
        :bounds="maxBounds"
      />
      <l-rectangle ref="rec" :bounds="[[mlat, mlng], [mlat + 1, mlng + 1]]" color="#40628a" :weight="5">
      </l-rectangle>
    </l-map>
  </div>
</template>

<script>
import { CRS, point } from "leaflet";
import { LMap, LImageOverlay, LMarker, LPopup, LPolyline, LRectangle, LTooltip } from "vue2-leaflet";
import maps from '../maps'

export default {
  components: {
    LMap,
    LImageOverlay,
    LMarker,
    LPopup,
    LPolyline,
    LRectangle
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
    mapReady() {
      var tt = this.$refs.rec.mapObject.bindTooltip(`${this.mlng}, ${this.mlat}`, {
          direction: 'bottom',
          offset: point(0, 50)
        })
      this.$refs.map.mapObject.on('mousemove', (e) => {
        this.mlat = Math.floor(e.latlng.lat);
        this.mlng = Math.floor(e.latlng.lng);
        tt.setTooltipContent(`${this.mlng}, ${this.mlat}`).openTooltip()
      })
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
      zoom: 2,
      center: {lat: 0, lng: 0},
      crs: CRS.Simple,
      bounds: [[1, 1], [256, 256]],
      publicPath: 'https://mapimages.build.aurorastation.org/Aurorastation/Aurora.3/master/',
      mlat: 0,
      mlng: 0,
      maxzoom: 8,
      minzoom: 1
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
    background: none;
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
