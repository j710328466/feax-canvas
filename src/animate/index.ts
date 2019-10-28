let sun = new Image()
let moon = new Image()
let earth = new Image()

window.onload = () => {
    init()
}

function init() {
    sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png'
    moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png'
    earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png'

    window.requestAnimationFrame(solar)
    window.requestAnimationFrame(clock)
}

// 太阳系动画
function solar() {
    let canvas = <HTMLCanvasElement>document.getElementById('demo1')
    let ctx = canvas.getContext('2d')

    // 将目标图形置于上层
    ctx.globalCompositeOperation = 'destination-over'
    ctx.clearRect(0, 0, 300, 300)

    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)'

    // 保存当前状态
    ctx.save()

    // 将当前画笔移到圆心处
    ctx.translate(150, 150)

    let time = new Date()

    // 地球顺时针旋转的角度
    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds())
    // 从当前圆心处 x 偏移量
    ctx.translate(105, 0)
    // 绘制当图片加载不出来 默认图
    // ctx.fillRect(0, -12, 25, 25)
    // 绘制地球的图片
    ctx.drawImage(earth, -12, -12)

    // 保存当前位置
    // 基于地球为圆心的旋转角度
    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds())
    // 以地球为圆心的偏移
    ctx.translate(0, 28.5)
    // 绘制月亮
    ctx.drawImage(moon, -3.5, -3.5)
    // 加载上一次的 save
    ctx.restore()

    ctx.beginPath()
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false)
    ctx.stroke()

    ctx.drawImage(sun, 0, 0, 300, 300)

    window.requestAnimationFrame(solar)
}

function clock() {
    let now = new Date()
    let canvas = <HTMLCanvasElement>document.getElementById('demo2')
    let ctx = canvas.getContext('2d')

    ctx.save()
    ctx.clearRect(0, 0, 150, 150)
    ctx.translate(75, 75)
    ctx.scale(0.4, 0.4)
    ctx.rotate(-Math.PI / 2)
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'white'
    ctx.lineWidth = 8
    ctx.lineCap = 'round'

    ctx.save()
    for (let i = 0; i < 12; i++) {
        ctx.beginPath()
        ctx.rotate(Math.PI / 6)
        ctx.moveTo(100, 0)
        ctx.lineTo(120, 0)
        ctx.stroke()
    }
    ctx.restore()

    ctx.save()
    ctx.lineWidth = 5
    for (let i = 0; i < 60; i++) {
        if (i % 5 != 0) {
            ctx.beginPath()
            ctx.moveTo(117, 0)
            ctx.lineTo(120, 0)
            ctx.stroke()
        }
        ctx.rotate(Math.PI / 30)
    }
    ctx.restore()

    let sec = now.getSeconds()
    let min = now.getMinutes()
    let hr = now.getHours()

    ctx.fillStyle = 'black'

    // hours
    ctx.save()
    ctx.rotate( hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec)
    ctx.lineWidth = 14
    ctx.beginPath()
    ctx.moveTo(-20, 0)
    ctx.lineTo(80, 0)
    ctx.stroke()
    ctx.restore()

    // min
    ctx.save()
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec)
    ctx.lineWidth = 10
    ctx.beginPath()
    ctx.moveTo(-28, 0)
    ctx.lineTo(112, 0)
    ctx.stroke()
    ctx.restore()

    // sec
    ctx.save()
    ctx.rotate(sec * Math.PI / 30)
    ctx.strokeStyle = '#d40000'
    ctx.fillStyle = '#d40000'
    ctx.lineWidth = 6
    ctx.beginPath()
    ctx.moveTo(-30, 0)
    ctx.lineTo(83, 0)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(95, 0, 10, 0, Math.PI * 2, true)
    ctx.stroke()
    ctx.fillStyle = 'rgba(0, 0, 0, 0)'
    ctx.arc(0, 0, 3, 0, Math.PI * 2, true)
    ctx.fill()
    ctx.restore()

    ctx.beginPath()
    ctx.lineWidth = 14
    ctx.strokeStyle = '#325fa2'
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true)
    ctx.stroke()

    ctx.restore()

    window.requestAnimationFrame(clock)
}