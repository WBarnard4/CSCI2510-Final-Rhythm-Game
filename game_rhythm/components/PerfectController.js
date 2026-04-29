class PerfectController extends Component {
    constructor() {
        super()
        Events.addEventListener("Perfect", this)
    }

    handleEvent(type, event) {
        console.log(event.xPos, event.yPos)
        let confetti = new ConfettiGameObject("Confetti", Box)

        confetti.addComponent(new RigidBody(100))
        confetti.findComponent(RigidBody).vx = 100
        confetti.findComponent(RigidBody).vy = 100
        // Engine.currentScene.addGameObject(new ConfettiGameObject(Circle), event.xPos, event.yPos + 100, 50)
        // Engine.currentScene.addGameObject(new ConfettiGameObject(Circle), event.xPos, event.yPos + 300, 50)
        // Engine.currentScene.addGameObject(new ConfettiGameObject(Box), event.xPos, event.yPos + 200, 0, 5, 5)
        // Engine.currentScene.addGameObject(new ConfettiGameObject(Box), event.xPos, event.yPos + 400, 0, 5, 5)
        // Engine.currentScene.addGameObject(confetti, event.xPos, event.yPos, 0, 5, 5)
    }
}