import lesson1 from './lessons/1'
import lesson2 from './lessons/2'
import lesson3 from './lessons/3'

const canvas = document.getElementById('demo1')
const ctx = canvas.getContext('2d')
const WIDTH = document.documentElement.clientWidth
const HEIGHT = document.documentElement.clientHeight

window.onload = function () {
    canvas.width = WIDTH
    canvas.height = HEIGHT
    // lesson1()

    // lesson2()

    lesson3(ctx, WIDTH, HEIGHT)
}