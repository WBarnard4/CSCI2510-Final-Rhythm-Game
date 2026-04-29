class Text extends Component{
  constructor(fillStyle, font, text, offsetY = 0, offsetX = 0, align = "left"){
    super()
    this.fillStyle = fillStyle
    this.font = font
    this.text = text

    this.offsetY = offsetY
    this.offsetX = offsetX
    this.align = align
  }

  draw(){
    ctx.fillStyle = this.fillStyle
      ctx.font = this.font
      ctx.textAlign = this.align
      ctx.fillText(this.text, this.transform.x + this.offsetX, this.transform.y + this.offsetY)
  }
}