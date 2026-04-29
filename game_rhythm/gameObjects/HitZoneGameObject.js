class HitZoneGameObject extends GameObject {
    constructor(name, lane, scene) {
        super(name)
        this.lane = lane
        this.scene = scene

    }

    start() {
        this.addComponent(new Circle("rgb(255, 151, 220)", "rgb(255, 124, 209)", 5))
        this.addComponent(new Arrow("rgb(255, 87, 199)", "rgb(255, 87, 199)", 5, this.lane))

        this.addComponent(new HitZoneInput(this.lane, this.scene))
        this.addComponent(new PerfectController())

        super.start()
    }
}