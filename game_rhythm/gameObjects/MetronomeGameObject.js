class MetronomeGameObject extends GameObject {
    constructor(name, speed = 2) {
        super(name)
        this.speed = speed

    }

    start() {
        this.addComponent(new Circle("rgb(0, 0, 0)", "rgb(0, 0, 0)", 5))
        this.addComponent(new MetronomeController(this.speed))

        super.start()
    }
}