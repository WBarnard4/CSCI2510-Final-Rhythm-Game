class MetronomeController extends Component {
    constructor(speed = 2) {
        super()
        // this.elapsedTime = Engine.currentScene.findGameObject("Timer").findComponent(TimerController).getTime()
        this.elapsedTime = 0
        this.speed = speed
    }


    start() {
    
    }

    update() {
        let color = this.parent.findComponent(Circle)
        this.elapsedTime += Time.deltaTime * this.speed
        // console.log(this.elapsedTime)
        let bruh = Math.floor(this.elapsedTime) % 2
        // let oop = Math.floor(Math.sin(this.elapsedTime) * 255)
        // console.log(oop)
        // let fort = "rbg(" + oop + ", " + oop + ", " + oop + ")"

        // color.fillStyle = "rgb(${oop}, ${oop}, ${oop})"
        // color.fillStyle = fort


        if (bruh == 1) {
            color.fillStyle = "rgb(255, 255, 255)"
        } else {
            color.fillStyle = "rgb(0, 0, 0)"
        }
    }
}