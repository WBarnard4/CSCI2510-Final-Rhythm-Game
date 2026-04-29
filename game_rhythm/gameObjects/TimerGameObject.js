class TimerGameObject extends GameObject {
    constructor() {
        super()

    }

    start() {
        this.addComponent(new TimerController())
    }
}