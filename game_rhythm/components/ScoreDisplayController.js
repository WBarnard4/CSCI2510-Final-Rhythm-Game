class ScoreDisplayController extends Component {
    constructor(score) {
        super()
        this.score = score
    }

    start() {
        switch (this.score) {
            case 1: 
                this.score = Globals.score1
                break
            case 2: 
                this.score = Globals.score2
                break
            case 3: 
                this.score = Globals.score3
                break
        }

        this.parent.components[2].text = "High Score: " + this.score
    }

    update() {
        // this.parent.components[2].text = "Fortntie: " + Globals.score3
    }
}