window.onload = function () {
    demo1()
    demo2()
    demo3()
    demo4()
    demo5()
    demo6()
    demo7()
    demo8()
}

function demo1() {
    let canvas = <HTMLCanvasElement>document.getElementById('demo1')
    let ctx = canvas.getContext('2d')
    let img = new Image()

    img.onload = () => {
        ctx.drawImage(img, 0, 0, 200, 150)
        ctx.beginPath()
        ctx.fillStyle = 'red'
        ctx.moveTo(40, 88)
        ctx.lineTo(55, 66)
        ctx.lineTo(99, 100)
        ctx.lineTo(120, 40)
        ctx.stroke()
    }

    img.src = require('./AirPods2@2x.png')
}

function demo2() {
    let canvas = <HTMLCanvasElement>document.getElementById('demo2')
    let ctx = canvas.getContext('2d')
    let img = new Image()

    img.onload = () => {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                ctx.drawImage(img, j * 50, i * 38, 50, 38)
            }
        }
    }
    img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg'
}

function demo3() {
    let canvas = <HTMLCanvasElement>document.getElementById('demo3')
    let ctx = canvas.getContext('2d')
    let img = <HTMLImageElement>document.getElementById('airpods')
    img.style.display = 'none'
    ctx.drawImage(img, 150, 0, 80, 80, 0, 0, 80, 80)
}

/**
 * save 保存默认状态
 * restore 加载之前一次保存的默认状态，类似洋葱模型
 */
function demo4() {
    let canvas = <HTMLCanvasElement>document.getElementById('demo4')
    let ctx = canvas.getContext('2d')

    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, 150, 150)
    ctx.save()

    ctx.fillStyle = 'red'
    ctx.fillRect(15, 15, 120, 120)

    ctx.save()
    ctx.fillStyle = 'white'
    ctx.fillRect(30, 30, 90, 90)

    ctx.restore()
    ctx.fillRect(45, 45, 60, 60)

    ctx.restore()
    ctx.fillRect(60, 60, 30, 30)
}

/**
 * translate(x, y) 偏移
 */
function demo5() {
    let canvas = <HTMLCanvasElement>document.getElementById('demo5')
    let ctx = canvas.getContext('2d')

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            ctx.save()
            ctx.fillStyle = `rgb(${51 * i}, ${255 - 51 * i}, 255)` 
            ctx.translate(10 + j * 50, 10 + i * 50)
            ctx.fillRect(0, 0, 25, 25)
            ctx.restore()        
        }
    }
}

/**
 * rotate(angle) 旋转角度
 */
function demo6() {
    let canvas = <HTMLCanvasElement>document.getElementById('demo6')
    let ctx = canvas.getContext('2d')

    ctx.translate(75, 75)
    for (let i = 0; i < 5; i++) {
        ctx.fillStyle = `rgb(${51 * i}, ${255 - 51 * i}, 255)`

        for (let j = 0; j <  i * 6; j++) {
            ctx.rotate(Math.PI * 2 / (i * 6))
            ctx.beginPath()
            ctx.arc(0, 12 * i, 5, 0, Math.PI * 2, true)
            ctx.fill()
        }
    }
}

/**
 * scale(x, y) 扩大 x y
 */
function demo7() {
    let canvas = <HTMLCanvasElement>document.getElementById('demo7')
    let ctx = canvas.getContext('2d')

    ctx.save()
    ctx.scale(3, 3)
    ctx.fillRect(1, 1, 10, 10)
    ctx.restore()

    ctx.scale(-1, 1)
    ctx.font = '40px serif'
    ctx.fillText('MDN', -100, 120)
}

/**
 * setTransform(m11, m12, m21, m22, dx, dy) 
 * m11: 水平方向的缩放
 * m12: 水平方向的倾斜偏移
 * m21: 竖直方向的倾斜偏移
 * m22: 竖直方向的缩放
 * dx: 水平方向的移动
 * dy: 竖直方向的移动
 */
function demo8() {
    let canvas = <HTMLCanvasElement>document.getElementById('demo8')
    let ctx = canvas.getContext('2d')
    let sin = Math.sin(Math.PI / 6)
    let cos = Math.cos(Math.PI / 6)
    let c = 0

    ctx.translate(100, 100)
    console.log(sin, cos)
    for (let i = 0; i <= 12; i++) {
        c = Math.floor(255 / 12 * i)
        ctx.fillStyle = `rgb(${c}, ${c}, ${c})`
        ctx.fillRect(0, 0, 100, 10)
        ctx.transform(cos, sin, -sin, cos, 0, 0)
    }

    ctx.setTransform(-1, 0, 0, 1, 100, 100)
    ctx.fillStyle = 'rgba(255, 128, 255, 0.5)'
    ctx.fillRect(0, 50, 100, 100)
}