class TimerController extends Component {
    constructor() {
        super()
        this.elapsedTime = 0
    }


    start() {
        
    }

    update() {
        this.elapsedTime += Time.deltaTime
        // Globals.timer = this.elapsedTime
        // console.log("Fortnite " + Globals.timer)
        // console.log(this.elapsedTime)
    }

    getTime() {
        return this.elapsedTime
    }
}