class ScoreUpdater extends Component {
    constructor() {
        super()
        this.score = 0
        Events.addEventListener("ScoreUpdate", this)
        Events.addEventListener("ResetScore", this)
        this.elapsedTime = 0
    }

    update() {

    }

    handleEvent(type, event) {
        if (type == "ScoreUpdate") {
            this.score += event.scoreAmount
            this.parent.components[1].text = "Score: " + this.score
    
            switch (event.scoreType) {
                case 1:
                    if (this.score > Globals.score1)
                        Globals.score1 = this.score
                    break
                case 2:
                    if (this.score > Globals.score2)
                        Globals.score2 = this.score
                    break
                case 3:
                    if (this.score > Globals.score3)
                        Globals.score3 = this.score
                    break
            }
        }

        if (type == "ResetScore") {
            this.score = 0
            console.log("Score reset")
        }
    }
}