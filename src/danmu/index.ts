import DrawDanMu from './DrawDanMu'

window.onload = () => {
  let data = [
    {
      fontSize: 12,
      color: "#000",
      text: '测试弹幕内容',
      speed: 1,
    },
    {
      fontSize: 12,
      color: "#aaa",
      text: '测试弹幕内容2',
      speed: 1,
    },
    {
      fontSize: 12,
      color: "#eee",
      text: '测试弹幕内容3',
      speed: 1,
    }
  ]

  let danmu = new DrawDanMu(data)

  console.log(danmu.data)
}
