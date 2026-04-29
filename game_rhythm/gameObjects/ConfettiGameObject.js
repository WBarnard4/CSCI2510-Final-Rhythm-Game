class ConfettiGameObject extends GameObject {
    constructor(name, type) {
        super(name)
        this.type = type
    }

    start() {
        if (this.type == Circle) {
            this.addComponent(new Circle())
            console.log("CIFRLCE")

        } else if (this.type == Box) {
            this.addComponent(new Box())
            console.log("SAUQARFE")
        } else {
            // nothing
        }

        this.addComponent(new RigidBody(1000))
    }

    update() {
        
    }
}