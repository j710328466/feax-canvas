window.onload = function () {
    demo1()
    demo2()
    demo3()
}

// 填充文本
function demo1() {
    // 声明DOM
    let canvas = <HTMLCanvasElement>document.getElementById('demo1')
    let ctx = canvas.getContext('2d')

    ctx.shadowOffsetY = 8
    ctx.shadowOffsetX = 8
    ctx.shadowBlur = 3
    ctx.shadowColor = '#ccc'

    ctx.font = '40px serif'
    ctx.fillText('1. 你是个智障!', 50, 50)
}

function demo2 {
    let canvas = <HTMLCanvasElement>document.getElementById('demo2')
    let ctx = canvas.getContext('2d')

    ctx.font = '48px serif'
    ctx.strokeText('2. hello world', 10, 50)
}

function demo3() {
    let canvas = <HTMLCanvasElement>document.getElementById('demo3')
    let ctx = canvas.getContext('2d')

    ctx.font = '40px serif'
    ctx.textBaseline = 'top'
    ctx.textAlign = 'start'
    ctx.strokeText('hello world', 0, 100)
}