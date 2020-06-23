let random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export default class BigCircle {
  constructor(x, y) {
    this.bR = random(16, 32)
    this.overR = random(60, 100)
    this.x = x
    this.y = y
    this.op = 1
  }

  creatBigCircle(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.bR, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.strokeStyle = 'rgba(250, 250, 250, ' + this.op + ')'
    ctx.stroke()
  }

  changeR() {
    this.bR = Math.min(this.bR += random(1, 4), this.overR)
    this.op = Math.max((this.op - Math.random() / 12).toFixed(2), 0)
  }

  // 检查是否运行完毕，以大圆为标准清空屏幕
  complete() {
    return this.bR >= this.overR && this.op <= 0
  }
}
