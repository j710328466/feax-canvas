export default class Move {
  constructor(opt) {
    const option = {
      canvas: document.getElementById('paper'),
      width: document.documentElement.clientWidth,   // 宽度
      height: document.documentElement.clientHeight,    // 高度
      bgColor: '#000',
      para: {
        num: 100,
        color: false,    //  颜色  如果是false 则是随机渐变颜色
        r: 0.9,          //   圆每次增加的半径 
        o: 0.09,         //      判断圆消失的条件，数值越大，消失的越快
      },
      ...opt
    }
    const { canvas, width, height, bgColor } = option
    this.option = option
    this.round_arr = []
    this.ctx = canvas.getContext('2d')

    canvas.width = width
    canvas.height = height
    canvas.style.backgroundColor = bgColor

    this.init(this)
  }

  init(opt) {
    let tempSum = 0
    window.onmousemove = function (event) {

      let mouseX = event.clientX;
      let mouseY = event.clientY;

      if (tempSum < 5) {
        tempSum++
      } else {
        opt.round_arr.push({
          mouseX,
          mouseY,
          r: opt.option.para.r,  // 设置半径每次增大的数值        
          o: 1,    //  判断圆消失的条件，数值越大，消失得越快
        })
        tempSum = 0
        opt.animate()
      }
    };
  }

  animate() {
    let { para, width, height } = this.option
    let color = 0, color2
    let ctx = this.ctx
    let round_arr = this.round_arr

    if (!para.color) {
      color += Math.random();
      color2 = 'hsl(' + color + ',100%,80%)';
    }

    console.log(color)

    function _move() {
      
      ctx.clearRect(0, 0, width, height);
  
      for (var i = 0; i < round_arr.length; i++) {
  
          ctx.fillStyle = color2;
          ctx.beginPath();
          ctx.arc( round_arr[i].mouseX ,round_arr[i].mouseY, round_arr[i].r, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
          round_arr[i].r += para.r;
          round_arr[i].o -= para.o;
  
          if( round_arr[i].o <= 0){
              round_arr.splice(i,1);
              i--;
          }
      }
    }

    window.requestAnimationFrame(_move);
  }
}