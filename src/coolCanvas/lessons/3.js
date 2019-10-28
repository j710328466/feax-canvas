export default function lesson3(ctx, width, height) {
    let para = {
        num: 100,
        color: false,
        r: 0.9,
        o: 0.09,
        a: 1
    }
    let color, color2, mouseX, mouseY
    let rounds = []

    window.onmousemove = function (event) {
        mouseX = event.clientX
        mouseY = event.clientY

        rounds.push({
            mouseX: mouseX,
            mouseY: mouseY,
            r: para.r,  // 设置半径每次增大的数值
            o: 1    // 判断圆消失的条件，数值越大，消失越快
        })
    }
}