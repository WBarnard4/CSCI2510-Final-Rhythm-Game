class EndLevelController extends Component {
    constructor(){
        super()
        this.leftNotes = [-1]
        this.rightNotes = [-1]
        this.upNotes = [-1]
        this.downNotes = [-1]
        this.elapsedTime = 0
        this.ended = false
        this.wait = 0

        console.log(this.leftNotes)
      }

      update(){
        this.elapsedTime = Engine.currentScene.findGameObject("Timer").findComponent(TimerController).getTime()

        if (this.leftNotes.length == 0 && this.rightNotes.length == 0 && this.upNotes.length == 0 && this.downNotes.length == 0 && this.elapsedTime > 5 && !this.ended) {
            console.log("End Level")
            // console.log(this.leftNotes.length)
            this.ended = true
        }

        if (this.ended) {
            this.wait += Time.deltaTime
            console.log(this.wait)
            Events.handleEvent("ResetScore", {})
            // Call ResetScore event
            if (this.wait > 2)
                Engine.nextScene = new MainMenu
        }

        this.leftNotes = Engine.currentScene.findGameObjects("Left Note")
        this.rightNotes = Engine.currentScene.findGameObjects("Right Note")
        this.upNotes = Engine.currentScene.findGameObjects("Up Note")
        this.downNotes = Engine.currentScene.findGameObjects("Down Note")
        // console.log(Engine.currentScene.findGameObjects("Left Note"))
      }

}