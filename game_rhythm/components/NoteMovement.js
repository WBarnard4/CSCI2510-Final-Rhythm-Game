class NoteMovement extends Component {
    constructor(speed, lane) {
        super()
        this.speed = speed
        this.lane = lane
    }

    elapsedTime

    start() {
        // this.elapsedTime = 0
        this.startX = this.transform.x
    }

    update() {
        // this.elapsedTime += Time.deltaTime
        this.transform.x = this.startX
        this.transform.y = this.transform.y += this.speed * Time.deltaTime
        // this.transform.x = this.startX + 100 * Math.sin(this.elapsedTime * this.speed + this.offset)
    }
}