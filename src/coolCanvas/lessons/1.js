export default function lesson1(params) {
    const canvas = document.getElementById('demo1')
    const ctx = canvas.getContext('2d')

    ctx.beginPath()
    ctx.arc(100, 100, 50, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fillStyle = '#fff'
    ctx.shadowBlur = 6
    ctx.shadowColor = '#fff'
    ctx.fill()

    ctx.beginPath()
    ctx.arc(80, 80, 60, 0, Math.PI * 0.5, false)
    ctx.lineWidth = 4
    ctx.lineCap = 'round'
    ctx.strokeStyle = '#ccc'
    ctx.shadowBlur = 5
    ctx.shadowColor = '#fff'
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(140, 140)
    ctx.lineTo(260, 260)
    ctx.lineWidth = 5
    ctx.lineCap = 'round'
    ctx.strokeStyle = '#fff'
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath()
    ctx.strokeRect(260, 260, 40, 40)
}