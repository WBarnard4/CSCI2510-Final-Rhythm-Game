class Input{
    static keysdown = []
    static keysDownThisFrame = []
    static keysUpThisFrame = []

    static mouseX
    static mouseY

    static mouseDown
    static mouseDownThisFrame
    static mouseUpThisFrame

    static lastMouseX
    static lastMouseY

    static keydown(event) {
      if (!Input.keysdown.includes(event.code))
        Input.keysdown.push(event.code)
        console.log(event.code)
      if(!Input.keysDownThisFrame.includes(event.code))
        Input.keysDownThisFrame.push(event.code)
    }

    static keyup(event) {
      let index = Input.keysdown.indexOf(event.code)
      Input.keysdown.splice(index, 1)
      if(!Input.keysUpThisFrame.includes(event.code))
        Input.keysUpThisFrame.push(event.code)
    }

    static mousemove(event){
      Input.mouseX = event.clientX
      Input.mouseY = event.clientY
      // console.log(event)

    }
    static mouseup(event){
      Input.mouseDown = false
      Input.mouseUpThisFrame = true
      // console.log(event)

    }
    static mousedown(event){
      Input.mouseDown = true
      Input.mouseDownThisFrame = true
      // console.log(event)

    }

    static update(){
      Input.keysDownThisFrame = []
      Input.keysUpThisFrame = []

      Input.mouseDownThisFrame = false
      Input.mouseUpThisFrame = false

      Input.lastMouseX = Input.mouseX
      Input.lastMouseY = Input.mouseY
    }
}