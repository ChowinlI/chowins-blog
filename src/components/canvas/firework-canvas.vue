<template>
  <canvas id="firework" ref="canvas"></canvas>
</template>

<script>
import Circle from './js/Circle'
import BigCircle from './js/BigCircle'

export default {
  name: 'firework-canvas',
  data(){
    return {
      canvas: null,
      ctx: null,
      nums: 40,
      circles: [],
      bCircle: null,
      animationId: false
    }
  },
  mounted(){
    this.load()
    window.onresize = () => {
      this.load()
    }
  },
  methods: {
    load(){
      this.canvas = this.canvas || this.$refs.canvas
      this.canvas.width = 2 * window.innerWidth
      this.canvas.height = 2 * window.innerHeight
      this.canvas.style.width = window.innerWidth + 'px'
      this.canvas.style.height = window.innerHeight + 'px'
      this.canvas.getContext('2d').scale(2, 2)
      this.ctx = this.canvas.getContext('2d')
      const that = this

      window.requestAnimFrame = (function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60)
          }
      })()

      window.cancelAnimationFrame = (function () {
        return window.cancelAnimationFrame || window.mozCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame
      })()

      document.onclick = (e) => {
        const event = e || window.event
        that.int(event.clientX, event.clientY)
      }
      window.onresize = () => {
        that.canvas.width = 2 * window.innerWidth
        that.canvas.height = 2 * window.innerHeight
        that.canvas.style.width = window.innerWidth + 'px'
        that.canvas.style.height = window.innerHeight + 'px'
        that.canvas.getContext('2d').scale(2, 2)
        that.ctx = that.canvas.getContext('2d')
      }
    },
    int(x, y) {
      this.circles = []

      if (this.animationId) cancelAnimationFrame(this.animationId)

      for (let i = this.nums; i-- > 0;) {
        this.circles.push(new Circle(x, y))
      }

      this.bCircle = new BigCircle(x, y)
      this.create()
    },
    create(){
      var w = this.canvas.width = this.canvas.offsetWidth
      var h = this.canvas.height = this.canvas.offsetHeight
      this.ctx.clearRect(0, 0, w, h)
      var that = this
      this.circles.forEach(function(v) {
        v.move()
        v.createCircle(that.ctx)
      })

      this.bCircle.changeR()
      this.bCircle.creatBigCircle(that.ctx)

      this.animationId = requestAnimationFrame(this.create)

      if (this.bCircle.complete()) {
        // 以大圆为标准，清空屏幕停止动画
        this.ctx.clearRect(0, 0, w, h)
        cancelAnimationFrame(this.animationId)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  #firework{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    pointer-events: none;
  }
</style>
