<template>
  <div id="app" ref="app">
    <header>
      <v-header ref="header"></v-header>
    </header>
    <main>
      <transition name="fade" mode="out-in">
        <router-view class="main-wrapper" />
      </transition>
    </main>
    <footer>
      <v-footer ref="footer"></v-footer>
    </footer>
    <transition name="opacity">
      <div v-show="!visible" class="back-top" @click="scrollToTop">
        <span class="back-top-border"></span>
        <i class="iconfont icon-backtop"></i>
      </div>
    </transition>
    <firework></firework>
  </div>
</template>

<script>
import Firework from 'components/canvas/firework-canvas'
import VHeader from 'components/header/header'
import VFooter from 'components/footer/footer'

export default {
  name: 'app',
  components: {
    Firework,
    VHeader,
    VFooter
  },
  data(){
    return {
      headerHeight: 0,
      visible: true
    }
  },
  mounted() {
    const that = this
    this.headerHeight = this.$refs.header.$el.offsetHeight
    window.onresize = () => {
      that.headerHeight = that.$refs.header.$el.offsetHeight
    }
    this.$refs.app.onscroll = () => {
      const appScrollTop = this.$refs.app.scrollTop
      if(appScrollTop >= this.headerHeight){
        this.visible = false
      }else{
        this.visible = true
      }
    }
  },
  methods: {
    scrollToTop(){
      const app = this.$refs.app
      app.scrollTop -= 20
      if(app.scrollTop > 0){
        var timer = setTimeout(() => {
          this.scrollToTop()
        }, 15)
      } else {
        clearTimeout(timer)
      }
    }
  }
}
</script>

<style lang="less">
@import "~common/less/variable";
@import "~common/less/keyframes";

#app {
  display: flex;
  flex-flow: column;
  height: 100%;
  overflow: auto;
  transition: all 1s linear;

  header,
  footer {
    flex: 0 0 auto;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
  }

  main {
    flex: 1 0 auto;
    order: 1;
    display: flex;
    justify-content: center;

    .main-wrapper {
      width: 80%;
      max-width: 780px;
      transition: all 0.4s;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding: 0 5px;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  footer {
    order: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.8)
    );
    overflow: hidden;
    height: 80px !important;
  }

  .back-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    height: 30px;
    line-height: 30px;
    width: 30px;
    z-index: 998;
    text-align: center;
    font-size: 20px;
    box-sizing: content-box;
    color: #333;
    text-align: center;
    border-radius: 100%;
    filter: alpha(opacity=70);
    -moz-opacity: 0.7;
    opacity: 0.7;
    -khtml-opacity: 0.7;

    &.opacity-enter-active, &.opacity-leave-active {
      transition: all 0.5s linear;
    }

    &.opacity-enter, &.opacity-leave-active {
      opacity: 0;
    }

    &:hover .back-top-border {
      -webkit-animation: toproll 8s linear infinite normal;
      -moz-animation: toproll 8s linear infinite normal;
      animation: toproll 8s linear infinite normal;
    }

    .back-top-border {
      z-index: -1;
      display: block;
      position: absolute;
      height: 30px;
      width: 30px;
      border-radius: 100%;
      border: 3px dashed @primary-color;
      box-sizing: border-box;
      cursor: pointer;
      background-color: #e7e7e7;
      box-shadow: 0 0 5px rgba(0, 0, 0, 1);
      -webkit-animation: toproll 12s linear infinite normal;
      -moz-animation: toproll 12s linear infinite normal;
      animation: toproll 12s linear infinite normal;
    }

    .iconfont {
      display: inline-block;
      font-size: inherit;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    .header {
      width: 100% !important;
      border-left: none !important;
      border-right: none !important;
      border-top-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
    }
    .main-wrapper {
      width: 100% !important;
      padding: 0 8px !important;
      border-left: none !important;
      border-right: none !important;
    }

    .footer {
      width: 100% !important;
      height: 60px !important;
      border-left: none !important;
      border-right: none !important;
    }
  }
}

.fade-enter-active {
  animation: router-fade 0.5s;
}

.fade-leave-active {
  animation: router-fade 0.5s reverse;
}
</style>
