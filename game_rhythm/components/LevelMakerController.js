class LevelMakerController extends Component {
    constructor(file) {
        super()
        this.file = file

        this.left = 200
        this.up = 400
        this.down = 600
        this.right = 800
        this.speed = 1000
        this.distance = -500
        this.startPos = 100
    }

    start() {
        // console.log("thing")
        let size = 50
        fetch(this.file)
            .then((res) => res.text())
            .then((text) => {
                text = text.split("\n")
                for(let i = 0; i < text.length; i++) {
                    text[i] = text[i].split(" ")
                }

                let noteSize = Number(text[0][0])
                this.speed = Number(text[0][1])
                this.startPos = Number(text[0][2])
                let direction = ""
                let dirNum = 0

                for (let j = 1; j < text.length; j++) {
                    // Get direction
                    switch (text[j][0]) {
                        case "L":
                            direction = "Left"
                            dirNum = 200
                            break;
                        case "U":
                            direction = "Up"
                            dirNum = 400
                            break;
                        case "D":
                            direction = "Down"
                            dirNum = 600
                            break;
                        case "R":
                            direction = "Right"
                            dirNum = 800
                            break;
                    }
                    let noteName = direction + " Note"
                    let positionY = this.startPos + (Number(text[j][1]) * this.distance)

                    // console.log(noteSize)
                    Engine.currentScene.addGameObject(new NoteGameObject(noteName, direction, this.speed), dirNum, positionY, noteSize)
                    console.log(noteName)
                    
                }
            })
            .catch((e) => console.error(e))

    }

    update() {
            
    }

}