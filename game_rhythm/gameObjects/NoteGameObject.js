class NoteGameObject extends GameObject {
    constructor(name, lane, speed) {
        super(name)
        this.lane = lane
        this.speed = speed

        this.innerR = 0
    }

    start() {
        this.addComponent(new Circle("rgb(155, 155, 155)", "rgb(154, 154, 154)", 5))
        this.addComponent(new NoteMovement(this.speed, this.lane))
        this.addComponent(new NoteMiss())

        this.innerR = this.transform.r / 4  // Higher Score Center

        // super.start()
    }
}