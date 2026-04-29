class ButtonGameObject extends GameObject {
    constructor(name, scene, text, offsetY = 0, offsetX = 0, align = "left") {
        super(name)
        this.scene = scene
        this.text = text

        this.offsetY = offsetY
        this.offsetX = offsetX
        this.align = align
    }

    start() {
        // this.addComponent(new Circle("rgb(255, 151, 220)", "rgb(255, 124, 209)", 5))
        this.addComponent(new Box("rgb(228, 228, 228)", "rgb(188, 188, 188)", 5))
        this.addComponent(new Text("rgb(0, 0, 0)", "20px Times New Roman", this.text, this.offsetY, this.offsetX, this.align))
        this.addComponent(new MouseCollision(this.scene))
    }
}