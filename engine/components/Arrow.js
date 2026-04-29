class Arrow extends Component {
    constructor(fillStyle, strokeStyle, lineWidth, direction) {
        super()
        this.fillStyle = fillStyle
        this.strokeStyle = strokeStyle
        this.lineWidth = lineWidth
        this.direction = direction
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.fillStyle
        ctx.strokeStyle = this.strokeStyle
        ctx.lineWidth = this.lineWidth

        switch (this.direction) {
            case "Left":
                ctx.rect(this.transform.x, this.transform.y - 5, -40, 10)
                //
                break
            case "Up":
                ctx.rect(this.transform.x - 5, this.transform.y, 10, -40)
                //
                break
            case "Right":
                //
                ctx.rect(this.transform.x, this.transform.y - 5, 40, 10)
                break
            case "Down":
                //
                ctx.rect(this.transform.x - 5, this.transform.y, 10, 40)
                break
        }
        ctx.fill()
        ctx.stroke()
    }
}