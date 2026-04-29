class LevelMakerGameObject extends GameObject {
    constructor(name, file) {
        super(name)
        this.file = file

    }

    start() {
        this.addComponent(new LevelMakerController(this.file))
    }
}