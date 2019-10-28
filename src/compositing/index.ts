let canvas1 = document.createElement('canvas')
let canvas2 = document.createElement('canvas')
let WIDTH = 320
let HEIGHT = 340
let gco = [
    'source-over', 
    'source-in', 
    'source-out', 
    'source-atop',
    'destination-over', 
    'destination-in', 
    'destination-out', 
    'destination-atop',
    'lighter', 
    'copy', 
    'xor', 
    'multiply', 
    'screen', 
    'overlay', 
    'darken',
    'lighten', 
    'color-dodge', 
    'color-burn', 
    'hard-light', 
    'soft-light',
    'difference', 
    'exclusion', 
    'hue', 
    'saturation', 
    'color', 
    'luminosity'
]
let gcoText = [
    '这是默认设置，并在现有画布上下文之上绘制新图形。',
    '新图形只在新图形和目标画布重叠的地方绘制。其他的都是透明的。',
    '在不与现有画布内容重叠的地方绘制新图形。',
    '新图形只在与现有画布内容重叠的地方绘制。',
    '在现有的画布内容后面绘制新的图形。',
    '现有的画布内容保持在新图形和现有画布内容重叠的位置。其他的都是透明的。',
    '现有内容保持在新图形不重叠的地方。',
    '现有的画布只保留与新图形重叠的部分，新的图形是在画布内容后面绘制的。',
    '两个重叠图形的颜色是通过颜色值相加来确定的。',
    '只显示新图形。',
    '图像中，那些重叠和正常绘制之外的其他地方是透明的。',
    '将顶层像素与底层相应像素相乘，结果是一幅更黑暗的图片。',
    '像素被倒转，相乘，再倒转，结果是一幅更明亮的图片。',
    'multiply和screen的结合，原本暗的地方更暗，原本亮的地方更亮。',
    '保留两个图层中最暗的像素。',
    '保留两个图层中最亮的像素。',
    '将底层除以顶层的反置。',
    '将反置的底层除以顶层，然后将结果反过来。',
    '屏幕相乘（A combination of multiply and screen）类似于叠加，但上下图层互换了。',
    '用顶层减去底层或者相反来得到一个正值。',
    '一个柔和版本的强光（hard-light）。纯黑或纯白不会导致纯黑或纯白。',
    '和difference相似，但对比度较低。',
    '保留了底层的亮度（luma）和色度（chroma），同时采用了顶层的色调（hue）。',
    '保留底层的亮度（luma）和色调（hue），同时采用顶层的色度（chroma）。',
    '保留了底层的亮度（luma），同时采用了顶层的色调(hue)和色度(chroma)。',
    '保持底层的色调（hue）和色度（chroma），同时采用顶层的亮度（luma）。'
]

window.onload = function () {
    canvas1.width = WIDTH
    canvas2.width = WIDTH
    canvas1.height = HEIGHT
    canvas2.height = HEIGHT

    lightMix()
    colorSphere()
    runComposite()
    return 
}

/**
 * 新建 canvas
 */
let createCanvas = () => {
    let canvas = document.createElement('canvas')

    canvas.style.background = '#ccc'
    canvas.style.border = '1px solid #eee'
    canvas.style.margin = '5px'
    canvas.width = WIDTH / 2
    canvas.height = HEIGHT / 2
    return canvas
}

let runComposite = () => {
    let dl = document.createElement('dl')
    document.body.appendChild(dl)

    while (gco.length) {
        let pop = gco.pop()
        let dt = document.createElement('dt')
        dt.textContent = pop
        dl.appendChild(dt)
        let dd = document.createElement('dd')
        let p = document.createElement('p')
        p.textContent = gcoText.pop()
        dd.appendChild(p)

        let canvasToDrawOn = createCanvas()
        let canvasToDrawFrom = createCanvas()
        let canvasToDrawResult = createCanvas()

        let ctx = canvasToDrawResult.getContext('2d')
        ctx.clearRect(0, 0, WIDTH, HEIGHT)
        ctx.save()
        ctx.drawImage(canvas1, 0, 0, WIDTH / 2, HEIGHT / 2)
        ctx.globalCompositeOperation = pop
        ctx.drawImage(canvas2, 0, 0, WIDTH / 2, HEIGHT / 2)
        ctx.globalCompositeOperation = 'source-over'
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
        ctx.fillRect(0, HEIGHT / 2 - 20, WIDTH / 2, 20)
        ctx.fillStyle = '#fff'
        ctx.font = '14px arial'
        ctx.fillText(pop, 5, HEIGHT / 2 - 5)
        ctx.restore()

        let ctx2 = canvasToDrawOn.getContext('2d')
        ctx2.clearRect(0, 0, WIDTH, HEIGHT)
        ctx2.save()
        ctx2.drawImage(canvas1, 0, 0, WIDTH / 2, HEIGHT / 2)
        ctx2.fillStyle = "rgba(0, 0, 0, 0.8)"
        ctx2.fillRect(0, HEIGHT / 2 - 20, WIDTH / 2, 20)
        ctx2.fillStyle = "#FFF"
        ctx2.font = "14px arial"
        ctx2.fillText('existing content', 5, HEIGHT / 2 - 5)
        ctx2.restore()

        let ctx3 = canvasToDrawFrom.getContext('2d')
        ctx3.clearRect(0, 0, WIDTH, HEIGHT)
        ctx3.save()
        ctx3.drawImage(canvas2, 0, 0, WIDTH / 2, HEIGHT / 2)
        ctx3.fillStyle = "rgba(0,0,0,0.8)"
        ctx3.fillRect(0, HEIGHT / 2 - 20, WIDTH / 2, 20)
        ctx3.fillStyle = "#FFF"
        ctx3.font = "14px arial"
        ctx3.fillText('new content', 5, HEIGHT / 2 - 5)
        ctx3.restore()

        dd.appendChild(canvasToDrawOn)
        dd.appendChild(canvasToDrawFrom)
        dd.appendChild(canvasToDrawResult)

        dl.appendChild(dd)
    }
}

let lightMix = () => {
    let ctx = canvas2.getContext('2d')

    ctx.save()
    ctx.globalCompositeOperation = 'lighter'
    ctx.beginPath()
    ctx.fillStyle = 'rgba(255, 0, 0, 1)'
    ctx.arc(100, 200, 100, Math.PI * 2, 0, false)
    ctx.fill()
    ctx.beginPath()
    ctx.fillStyle = 'rgba(0, 0, 255, 1)'
    ctx.arc(220, 200, 100, Math.PI * 2, 0, false)
    ctx.fill()
    ctx.beginPath()
    ctx.fillStyle = 'rgba(0, 255, 0, 1)'
    ctx.arc(160, 100, 100, Math.PI * 2, 0, false)
    ctx.fill()
    ctx.restore()
    ctx.beginPath()
    ctx.fillStyle = '#f00'
    ctx.fillRect(0, 0, 30, 30)
    ctx.fill()
}

let HSV_RGB = (o: { H: number; S: number; V: number; }) => {
    let H = o.H
    let S = o.S
    let V = o.V
    let R, G, B
    let A, C, D

    if (S == 0) {
        R = G = B = Math.round(V * 255)
    } else {
        if (H >= 1) H = 0
        H = 6 * H
        D = H - Math.floor(H)
        A = Math.round(255 * V * (1 - S))
        B = Math.round(255 * V * (1 - (S * D)))
        C = Math.round(255 * V * (1 - (S * (1 - D))))
        V = Math.round(255 * V)

        switch (Math.floor(H)) {
            case 0:
                R = V
                G = C 
                B = A
                break
            case 1:
                R = B
                G = V
                B = A
                break
            case 2:
                R = A
                G = V
                B = C
                break
            case 3:
                R = A
                G = B
                B = V
                break
            case 4:
                R = C
                G = A
                B = V
            case 5:
                R = V
                G = A
                B = B
        }
    }
    return {
        R: R,
        G: G,
        B: B
    }
}

let colorSphere = () => {
    let ctx = canvas1.getContext('2d')
    let width = 360
    let halfWidth = width / 2
    let rotate = (1 / 360) * Math.PI * 2
    let offset = 0
    let oleft = -20
    let otop = -20

    for (let n = 0; n < 360; n++) {
        let gradient = ctx.createLinearGradient(oleft, halfWidth, otop, oleft + halfWidth, otop + halfWidth)
        let color = HSV_RGB({ H: (n + 300) % 360, S: 100, V: 100 })
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)')
        gradient.addColorStop(0.7, `rgb(${color.R}, ${color.G}, ${color.B})`)
        gradient.addColorStop(1, 'rgb(255, 255, 255')
        ctx.beginPath()
        ctx.moveTo(oleft + halfWidth, otop)
        ctx.lineTo(oleft + halfWidth, otop + halfWidth)
        ctx.lineTo(oleft + halfWidth + 6, otop)
        ctx.fillStyle = gradient
        ctx.fill()
        ctx.translate(oleft + halfWidth, otop + halfWidth)
        ctx.rotate(rotate)
        ctx.translate(-(oleft + halfWidth), -(otop + halfWidth))
    }
    ctx.beginPath()
    ctx.fillStyle = '#00f'
    ctx.fillRect(15, 15, 30, 30)
    ctx.fill()
    return ctx.canvas
}

let createInterlace = (size: number, color1: string | CanvasPattern | CanvasGradient, color2: string | CanvasPattern | CanvasGradient) => {
    let proto = document.createElement('canvas').getContext('2d')

    proto.canvas.width = size * 2
    proto.canvas.height = size * 2
    proto.fillStyle = color1
    proto.fillRect(0, 0, size, size)
    proto.fillStyle = color2
    proto.fillRect(size, 0, size, size)
    proto.fillStyle = color2
    proto.fillRect(0, size, size, size)
    proto.fillStyle = color1
    proto.fillRect(size, size, size, size)
    let pattern = proto.createPattern(proto.canvas, 'repeat')
    pattern.data = proto.canvas.toDataURL()

    return pattern
}

var op_8x8 = createInterlace(8, "#FFF", "#eee");
