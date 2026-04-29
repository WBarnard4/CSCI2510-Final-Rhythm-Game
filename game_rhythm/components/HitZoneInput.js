class HitZoneInput extends Component {
    constructor(lane, scene) {
        super()
        this.lane = "Arrow" + lane
        this.note = lane + " Note"
        this.scene = scene
    }

    start() {

    }

    update() {
        let Notes = Engine.currentScene.findGameObjects(this.note)

        for (let Note of Notes) {
            if (Input.keysdown.includes(this.lane)) {
                if (Collisions.inCollision(this.transform.x, this.transform.y, this.transform.r, Note.transform.x, Note.transform.y, Note.innerR)) {
                // if (Collisions.inCollision(this.parent, Note)) {
                    // console.log(Note.transform.x, Note.transform.y, Note.innerR)

                    // Engine.currentScene.findGameObject("Score").findComponent(ScoreUpdater).addScore(100)
                    Events.handleEvent("ScoreUpdate", {scoreType: this.scene, scoreAmount: 100})

                    Events.handleEvent("Perfect", {xPos: this.transform.x, yPos: this.transform.y})

                    Note.destroy()
                }
                else if (Collisions.inCollision(this.transform.x, this.transform.y, this.transform.r, Note.transform.x, Note.transform.y, Note.transform.r)) {
                // else if (this.parent, Note) {
                    // console.log(Note.transform.x, Note.transform.y, Note.transform.r)

                    // Engine.currentScene.findGameObject("Score").findComponent(ScoreUpdater).addScore(50)
                    Events.handleEvent("ScoreUpdate", {scoreType: this.scene, scoreAmount: 50})

                    Note.destroy()
                }
                else {
                    // console.log("Not in collision")
                }
            }
        }
    }
}