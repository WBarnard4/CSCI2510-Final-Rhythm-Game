class Box extends Component{
    constructor(fillStyle, strokeStyle, lineWidth){
        super()
        this.fillStyle = fillStyle
        this.strokeStyle = strokeStyle
        this.lineWidth = lineWidth
        // this.transform.w = w
        // this.transform.h = h
    }
    
    draw(){
        ctx.beginPath()
        ctx.fillStyle = this.fillStyle
        ctx.strokeStyle = this.strokeStyle
        ctx.lineWidth = this.lineWidth
        ctx.rect(this.transform.x, this.transform.y, this.transform.w, this.transform.h)
    
        ctx.fill()
        ctx.stroke()
    }
}