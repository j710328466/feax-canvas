import Global from './global'

window.onload = () => {
    let rw = new RouletteWheel({
        canvasName: '#rw',
        width: '500',
        height: '500',
        awards: [               // 转盘内的奖品个数以及内容
            '大保健', '话费10元', '话费20元', '话费30元', '保时捷911', '周大福土豪金项链',
            //  'iphone 20', '火星7日游'
        ]
    })
}

class RouletteWheel extends Global{
    constructor(params) {
        super()
        this.width = params.width
        this.height = params.height

        this.centerX = params.centerX
        this.centerY = params.centerY
        this.outsideRadius = params.outsideRadius

        this.evenColor = params.evenColor
        this.oddColor = params.oddColor
        this.loseColor = params.odd
        this.textColor = params.textColor

        this.awards = params.awards || []

        this.startRadian = params.startRadian || 0
        this.duration = params.duration || 4000
        this.velocity = params.velocity || 10

        // 回调函数
        this.finish = params.finish
    }

    initCanvas() {
        let canvas = document.querySelector(this.canvasName);
        canvas.width = this.width;
        canvas.height = this.height;
        let ctx = canvas.getContext('2d')

        for (let i = 0; i < this.awards.length; i++) {
            // const award = awards[i]
            let _startR = this.startRadian + this.awardRadian * i
            let _endR = _startR + this.awardRadian

            if (i % 2 === 0) ctx.fillStyle = "#FF6766"
            else ctx.fillStyle = "#FD5757"

            ctx.beginPath(); //开始绘制路径
            ctx.moveTo(250, 250); //将当前位置移动到新的目标点
            ctx.arc(250, 250, this.radius, _startR, _endR);
            ctx.closePath(); //绘制路径
            ctx.fill();
        }
        
        // ctx.beginPath(); //开始绘制路径
        // ctx.moveTo(250, 250); //将当前位置移动到新的目标点
        // ctx.arc(250, 250, 250, Math.PI / 2, Math.PI);
        // ctx.closePath(); //绘制路径
        // ctx.fillStyle = "#ccc"; //填充背景颜色
        // ctx.fill();
        // ctx.beginPath(); //开始绘制路径
        // ctx.moveTo(250, 250); //将当前位置移动到新的目标点
        // ctx.arc(250, 250, 250, Math.PI, Math.PI * 1.5);
        // ctx.closePath(); //绘制路径
        // ctx.fillStyle = "#ddd"; //填充背景颜色
        // ctx.fill();
        // ctx.beginPath(); //开始绘制路径
        // ctx.moveTo(250, 250); //将当前位置移动到新的目标点
        // ctx.arc(250, 250, 250, Math.PI * 1.5, Math.PI * 2);
        // ctx.closePath(); //绘制路径
        // ctx.fillStyle = "#aaa"; //填充背景颜色
        // ctx.fill();
    }
}