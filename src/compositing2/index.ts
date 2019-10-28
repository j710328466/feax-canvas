window.onload = () => {
    demo1()
}

var demo1 = () => {
    let canvas = <HTMLCanvasElement>document.getElementById('demo1')
    let ctx = canvas.getContext('2d')

    ctx.translate(75, 75)

    ctx.beginPath()
    ctx.arc(0, 0, 60, 0, Math.PI * 2, true)
    ctx.clip()

    let lingrad = ctx.createLinearGradient(0, -75, 0, 75)
    lingrad.addColorStop(0, '#232256')
    lingrad.addColorStop(1, '#143778')

    ctx.fillStyle = lingrad
    ctx.fillRect(-75, -75, 150, 150)

    for (let i = 0; i < 50; i++) {
        ctx.save()
        ctx.fillStyle = '#fff'
        ctx.translate(75 - Math.floor(Math.random() * 150), 75 - Math.floor(Math.random() * 150))
        drawStar(ctx, Math.floor(Math.random() * 4) + 2)
    }
}

function drawStar(ctx: CanvasRenderingContext2D, r: number) {
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(r, 0)

    for (let i = 0; i < 9; i++) {
        ctx.rotate(Math.PI / 5)
        
        if (i % 2 == 0) {
            ctx.lineTo((r / 0.5257) * 0.2008, 0)
        } else {
            ctx.lineTo(r, 0)
        }
    }
    ctx.closePath()
    ctx.fill()
    ctx.restore()
}
