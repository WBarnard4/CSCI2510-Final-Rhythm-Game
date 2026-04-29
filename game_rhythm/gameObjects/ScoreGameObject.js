class ScoreGameObject extends GameObject {
    constructor(name) {
        super(name)
    }

    start() {
        this.addComponent(new Text("Black", "30px Times New Roman", "Score: "))
        this.addComponent(new ScoreUpdater())
    }

}