<template>
  <div id="app">
    <template v-if="isHome">
      <div id="hero-container">
        <HomeHeader></HomeHeader>
        <Slider></Slider>
      </div>
      <div class="home-wrapper">
      <router-view></router-view>
      </div>
      <script2 src="/static/js/home.js"></script2>
    </template>
    <template v-else>
      <RilenHeader></RilenHeader>
      <script2 src="/static/js/app.js"></script2>
    </template>
    <nprogress-container></nprogress-container>
  </div>
</template>

<script>
import NprogressContainer from 'vue-nprogress/src/NprogressContainer'
import HomeHeader from './components/globals/HomeHeader'
import Slider from './components/globals/Slider'
import RilenHeader from './components/globals/Header'
export default {
  name: 'rilen-app',
  components: {
    NprogressContainer,
    HomeHeader,
    Slider,
    RilenHeader
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    isHome () {
      return this.$route.meta.home || false
    }
  },
  mounted () {
  },
  methods: {
    setLocale: function (locale) {
      this.$i18n.set(locale)
    }
  }
}
</script>

<style scoped>
.nprogress-container{
  height: 10px;
  display: block;
  width: 100%;
  position: fixed !important;
  top: 0 !important;
  z-index: 1000000000000000 !important;
}
.nprogress-container{pointer-events:none;}.nprogress-container .bar{background:#29d;position:fixed;z-index:10000000000000;top:0;left:0;width:100%;height:2px;}.nprogress-container .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1.0;
  -webkit-transform:rotate(3deg) translate(0px,-4px);
  -ms-transform:rotate(3deg) translate(0px,-4px);
  transform:rotate(3deg) translate(0px,-4px);
  }
  .nprogress-container .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}.nprogress-container .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}.nprogress-custom-parent{overflow:hidden;position:relative;}.nprogress-custom-parent .nprogress-container .spinner,.nprogress-custom-parent .nprogress-container .bar{position:absolute;}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}@keyframes nprogress-spinner{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}
</style>
