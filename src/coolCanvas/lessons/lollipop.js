export default class Lollipop {
  constructor(opt) {
    this.opt = {
      canvas: document.querySelector('#paper'),    // 画布
      width: document.documentElement.clientWidth,   // 宽度
      height: document.documentElement.clientHeight,    // 高度
      bgColor: '#000',
      ...opt
    }
    this.ctx = this.opt.canvas.getContext('2d')

    // 初始化画布
    this.opt.canvas.width = this.opt.width
    this.opt.canvas.height = this.opt.height
    this.opt.canvas.style.backgroundColor = this.opt.bgColor

    this.render()
  }

  render() {
    this._drawCircle(this.ctx)
    this._drawStick(this.ctx)
    this._drawHalfCircle(this.ctx)
  }

  /**
   * 画圆
   * @param {*} ctx 
   */
  _drawCircle(ctx) {
    ctx.beginPath()
    ctx.arc(300, 300, 50, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fillStyle = '#fff'
    ctx.shadowBlur = 15
    ctx.shadowColor = '#fff'
    ctx.fill()
  }

  /**
   * 棍子
   * @param {*} ctx 
   */
  _drawStick(ctx) {
    ctx.beginPath()
    ctx.moveTo(340, 340)
    ctx.lineTo(450, 450)
    ctx.lineWidth = 8
    ctx.lineCap = 'round'
    ctx.strokeStyle = '#fff'
    ctx.stroke()
    ctx.closePath()
  }

  _drawHalfCircle(ctx) {
    ctx.beginPath()
    ctx.arc(300, 300, 30, 0, Math.PI * 0.6, false)
    ctx.shadowBlur = 5
    ctx.lineWidth = 5
    ctx.lineCap = 'round'
    ctx.strokeStyle = '#ccc'
    ctx.stroke()
  }
}