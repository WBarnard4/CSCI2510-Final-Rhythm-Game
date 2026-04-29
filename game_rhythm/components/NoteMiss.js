class NoteMiss extends Component {
    constructor() {
        super()
    }

    start() {

    }

    update() {
        if (this.transform.y >= 700) {
            this.parent.destroy()
        }
    }
}