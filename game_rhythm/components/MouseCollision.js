class MouseCollision extends Component {
    constructor(goToScene) {
        super()
        this.selected = false
        this.goToScene = goToScene
    }

    start() {

    }

    update() {
        let box = this.parent.findComponent(Box)    // Get box

        if (Input.mouseDownThisFrame) {             // If clicked inside box
            if (
                Input.lastMouseX < box.transform.x + box.transform.w &&
                Input.lastMouseX > box.transform.x && 
                Input.lastMouseY < box.transform.y + box.transform.h &&
                Input.lastMouseY > box.transform.y
            ) {
                this.selected = true                // Set selected to true and give visual feedback
                box.fillStyle = "rgb(207, 207, 207)"
                // console.log("Clicked down")
            }
        }

        if (Input.mouseUpThisFrame) {
            if (                                    // If released and still on button...
                Input.lastMouseX < box.transform.x + box.transform.w &&
                Input.lastMouseX > box.transform.x && 
                Input.lastMouseY < box.transform.y + box.transform.h &&
                Input.lastMouseY > box.transform.y && this.selected
            ) {                                     // "Click" button
                this.selected = false
                // console.log("Clicked Up")
                Engine.nextScene = new this.goToScene
            }

            box.fillStyle = "rgb(228, 228, 228)"     // Regardless, set color back
        }
    }
}