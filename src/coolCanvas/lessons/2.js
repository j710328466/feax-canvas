const canvas = document.getElementById('demo1')
const ctx = canvas.getContext('2d')
const WIDTH = document.documentElement.clientWidth
const HEIGHT = document.documentElement.clientHeight
const starNum = 100
const SPEED = 0.2
let rounds = []

export default function lesson2(params) {
    canvas.width = WIDTH
    canvas.height = HEIGHT

    for (let i = 0; i < starNum; i++) {
        rounds[i] = new RoundItem({
            index: i,
            x: Math.random() * WIDTH, 
            y: Math.random() * HEIGHT
        })
        rounds[i].draw()
    }
    animate()

    // 初始化星空
    let initStart = new InitStar({
        width: 100, 
        height: 100,
        num: 100,
    })
}

class InitStar {
    constructor(opt) {
        this.opt = {
            
        }
    }

    animate() {

    }

    draw() {

    }

    
}

// 动画执行
function animate() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT)

    for (var i in rounds) {
        rounds[i].move()
    }
    requestAnimationFrame(animate)
}

class RoundItem {
    constructor(opt) {
        this.index = opt.index
        this.x = opt.x
        this.y = opt.y
        this.r = Math.random() * 2
        var alpha = (Math.floor(Math.random() * 10) + 1) / 10
        this.color = `rgba(255, 255, 255, ${alpha})`
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.shadowBlur = this.r * 2
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
        ctx.closePath()
        ctx.fill()
    }
    move() {
        this.y -= SPEED
        if (this.y <= -10) {
            this.y = HEIGHT + 10
        }
        this.draw()
    }
}
