
export default class DrawDanMu {
  public data: { fontSize: number; color: string; text: string; speed: number; }[];
  ctx: any;
  
  constructor(data: { fontSize: number; color: string; text: string; speed: number; }[]) {
    let canvas = document.getElementById('danmu')
    let ctx = canvas.getContext('2d')

    canvas.style.background = '#000'
    canvas.style.opacity = 0.1

    this.ctx = ctx;
    this.data = data;

    this.move(data)
  }

  move(opt) {
    let ctx = this.ctx
    function _move() {
      
      requestAnimationFrame(_move)
    }
    _move()
  }
}